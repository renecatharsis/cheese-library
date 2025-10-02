'use client'

import { Cheese } from '@/payload-types'
import React, { useState } from 'react'
import StarIcon from '@/app/(frontend)/icons/StarIcon'

export default function CheeseCard({ cheese }: { cheese: Cheese }) {
  const [slide, setSlide] = useState<number>(0)
  const rating = Number(cheese.rating)

  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3 rounded-2xl bg-stone-300">
      <div className="mb-10 h-full rounded-lg p-4 pb-6 shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card">
        <div className="mb-6 w-full overflow-hidden rounded-md">
          <div className="w-full">
            {cheese.images?.map(function (image, index) {
              return (
                <div
                  className={`relative w-full ${slide === index ? 'active' : 'hidden'}`}
                  key={index}
                >
                  <img
                    src={typeof image === 'string' ? image : (image.url ?? '')}
                    alt={typeof image === 'string' ? cheese.name : image.alt}
                    className="h-[250px] w-full object-cover"
                  />
                  {cheese.images && cheese.images.length > 1 && (
                    <div className="absolute left-2 right-2 lg:left-5 lg:right-5 top-1/2 flex justify-between">
                      <button
                        className="text-2xl lg:text-xl bg-white px-4 py-2 lg:px-2 lg:py-0 rounded-full cursor-pointer"
                        onClick={() => {
                          setSlide(
                            (slide) =>
                              (slide - 1 + (cheese.images?.length ?? 1)) %
                              (cheese.images?.length ?? 1),
                          )
                        }}
                      >
                        ❮
                      </button>
                      <button
                        className="text-2xl lg:text-xl bg-white px-4 py-2 lg:px-2 lg:py-0 rounded-full cursor-pointer"
                        onClick={() => {
                          setSlide((slide) => (slide + 1) % (cheese.images?.length ?? 1))
                        }}
                      >
                        ❯
                      </button>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
        <div className="px-[10px]">
          <h3 className="inline-block text-lg font-semibold sm:text-xl lg:text-lg xl:text-x">
            {cheese.name}
          </h3>
          <div className="mb-3 flex items-center gap-1">
            {new Array(5).fill(0).map((star, index) => {
              return <StarIcon key={index} highlighted={index < rating} />
            })}
          </div>
          <div dangerouslySetInnerHTML={{ __html: cheese.description_html ?? '' }} />
        </div>
      </div>
    </div>
  )
}
