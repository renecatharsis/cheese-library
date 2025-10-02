export const revalidate = 300 // cache for 5 minutes

import React from 'react'
import CheeseList from '@/app/(frontend)/components/CheeseList'
import { getPayload, PaginatedDocs } from 'payload'
import config from '@payload-config'
import { Cheese } from '@/payload-types'

export default async function HomePage() {
  const payload = await getPayload({ config })
  const cheeses: PaginatedDocs<Cheese> = await payload.find({
    collection: 'cheese',
    sort: '-rating',
  })

  return (
    <div className="pt-12 pb-4">
      <CheeseList cheeses={cheeses} />
    </div>
  )
}
