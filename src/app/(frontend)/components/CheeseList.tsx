'use client'

import React from 'react'
import CheeseCard from '@/app/(frontend)/components/CheeseCard'
import { PaginatedDocs } from 'payload'
import { Cheese } from '@/payload-types'

export default function CheeseList({ cheeses }: { cheeses: PaginatedDocs<Cheese> }) {
  return (
    <div className="pt-12 pb-4">
      <div className="flex flex-col items-center justify-center">
        <div className="w-full mb-10 rounded-lg border border-stroke bg-gray-1 py-5 pl-8 pr-5 dark:border-dark-3 dark:bg-dark-2">
          <div className="-mx-4 flex flex-wrap items-center justify-center">
            <div className="mb-4 mr-8 inline-flex items-center sm:block md:mb-0 lg:mr-5 lg:inline-flex xl:mr-8">
              <label htmlFor="" className="mr-4 text-base font-medium text-dark dark:text-white">
                Category
              </label>
              <div className="relative">
                <select className="w-full appearance-none rounded-[5px] border border-stroke bg-transparent py-[10px] pl-4 pr-8 font-medium text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD] dark:border-dark-3 dark:text-white">
                  <option value="" className="dark:bg-dark-2">
                    Jacket
                  </option>
                </select>
                <span className="absolute right-4 top-1/2 mt-[-2px] h-[10px] w-[10px] -translate-y-1/2 rotate-45 border-b-2 border-r-2 border-body-color"></span>
              </div>
            </div>
            <div className="mb-4 mr-8 inline-flex items-center sm:block md:mb-0 lg:mr-5 lg:inline-flex xl:mr-8">
              <label htmlFor="" className="mr-4 text-base font-medium text-dark dark:text-white">
                Size
              </label>
              <div className="relative">
                <select className="w-full appearance-none rounded-[5px] border border-stroke bg-transparent py-[10px] pl-4 pr-8 font-medium text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD] dark:border-dark-3 dark:text-white">
                  <option value="" className="dark:bg-dark-2">
                    Small
                  </option>
                </select>
                <span className="absolute right-4 top-1/2 mt-[-2px] h-[10px] w-[10px] -translate-y-1/2 rotate-45 border-b-2 border-r-2 border-body-color"></span>
              </div>
            </div>
            <div className="mb-4 inline-flex items-center sm:block md:mb-0 lg:inline-flex">
              <label htmlFor="" className="mr-4 text-base font-medium text-dark dark:text-white">
                Color
              </label>
              <div className="relative">
                <select className="w-full appearance-none rounded-[5px] border border-stroke bg-transparent py-[10px] pl-4 pr-8 font-medium text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD] dark:border-dark-3 dark:text-white">
                  <option value="" className="dark:bg-dark-2">
                    Blue
                  </option>
                </select>
                <span className="absolute right-4 top-1/2 mt-[-2px] h-[10px] w-[10px] -translate-y-1/2 rotate-45 border-b-2 border-r-2 border-body-color"></span>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-gray-2 dark:bg-dark">
          <div className="container mx-auto">
            <div className="-mx-4 flex flex-wrap justify-center">
              {cheeses.docs.map(function (cheese, index) {
                return <CheeseCard cheese={cheese} key={index} />
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
