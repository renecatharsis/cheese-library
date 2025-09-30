'use client'

import { Cheese } from '@/payload-types'
import React, { useState } from 'react'

export default function CheeseCard({ cheese }: { cheese: Cheese }) {
  const [slide, setSlide] = useState<number>(0)

  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div className="mb-10 h-full rounded-lg bg-white p-4 pb-6 shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card">
        <div className="mb-6 w-full overflow-hidden rounded-md">
          <div className="carousel w-full">
            {cheese.images?.map(function (image, index) {
              return (
                <div
                  className={`carousel-item relative w-full ${slide === index ? 'active' : 'hidden'}`}
                  key={index}
                >
                  <img
                    src={typeof image === 'string' ? image : (image.url ?? '')}
                    alt={cheese.name ?? ''}
                  />
                  <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <button
                      className="btn btn-circle"
                      onClick={() => {
                        setSlide((slide) => (slide - 1 + 3) % 3)
                      }}
                    >
                      ❮
                    </button>
                    <button
                      className="btn btn-circle"
                      onClick={() => {
                        setSlide((slide) => (slide + 1) % 3)
                      }}
                    >
                      ❯
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="px-[10px]">
          <h3 className="mb-3 inline-block text-lg font-semibold hover:text-primary text-black sm:text-xl lg:text-lg xl:text-x">
            {cheese.name}
          </h3>
          <p className="text-base text-body-color dark:text-dark-6">{cheese.description_html}</p>
        </div>
      </div>
    </div>
  )
}
