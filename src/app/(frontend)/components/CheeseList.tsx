'use client'

import React, { useEffect, useState } from 'react'
import CheeseCard from '@/app/(frontend)/components/CheeseCard'
import { PaginatedDocs } from 'payload'
import { Cheese } from '@/payload-types'

type Filter = {
  name: string | undefined
  type: string | undefined
  rating: number | undefined
}

export default function CheeseList({ cheeses }: { cheeses: PaginatedDocs<Cheese> }) {
  const [filteredCheeses, setFilteredCheeses] = useState<Cheese[]>(cheeses.docs)
  const [filters, setFilters] = useState<Filter>({
    name: undefined,
    type: undefined,
    rating: undefined,
  })

  useEffect(() => {
    let filtered = cheeses.docs

    if (filters.type !== undefined && filters.type !== '') {
      filtered = filtered.filter(function (cheese) {
        return cheese.type === filters.type
      })
    }

    if (filters.rating !== undefined && filters.rating !== 0) {
      filtered = filtered.filter(function (cheese) {
        return Number(cheese.rating) >= (filters.rating || 0)
      })
    }

    if (filters.name !== undefined && filters.name !== '') {
      filtered = filtered.filter(function (cheese) {
        cheese.name.toLowerCase().includes((filters.name as string).toLowerCase())
      })
    }

    setFilteredCheeses(filtered)
  }, [filters, cheeses])

  function filterByName(name: string) {
    setFilters({ ...filters, name: name })
  }

  function filterByType(type: string) {
    setFilters({ ...filters, type: type })
  }

  function filterByRating(rating: number) {
    setFilters({ ...filters, rating: rating })
  }

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <div className="w-full mb-8 px-4 py-8 flex flex-col gap-4 border border-stone-300 rounded-xl">
          <input
            type="text"
            placeholder="Nach Namen filtern..."
            className="w-full rounded-md border border-stone-300 py-2 px-5 focus:border-primary active:border-primary"
            onChange={(e) => filterByName(e.target.value)}
          />
          <select
            className="w-full bg-transparent rounded-md border border-stone-300 py-2 px-5 focus:border-primary selected:border-primary active:border-primary"
            onChange={(e) => filterByType(e.target.value)}
          >
            <option value="">Alle Sorten</option>
            <option value="hard">Hartkäse</option>
            <option value="soft">Weichkäse</option>
            <option value="grated">Reibekäse</option>
          </select>
          <select
            className="w-full bg-transparent rounded-md border border-stone-300 py-2 px-5 focus:border-primary active:border-primary"
            onChange={(e) => filterByRating(Number(e.target.value))}
          >
            <option value="">Alle Bewertungen</option>
            <option value="1">1 Stern oder mehr</option>
            <option value="2">2 Sterne oder mehr</option>
            <option value="3">3 Sterne oder mehr</option>
            <option value="4">4 Sterne oder mehr</option>
            <option value="5">5 Sterne</option>
          </select>
        </div>
      </div>

      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {filteredCheeses.map(function (cheese, index) {
            return <CheeseCard cheese={cheese} key={index} />
          })}
        </div>
      </section>
    </div>
  )
}
