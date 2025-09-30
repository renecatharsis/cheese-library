import type { CollectionConfig } from 'payload'
import { lexicalHTMLField } from '@payloadcms/richtext-lexical'

export const Cheese: CollectionConfig = {
  slug: 'cheese',
  access: {
    read: () => true,
  },
  labels: {
    singular: 'Käse',
    plural: 'Käse',
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'type',
      type: 'select',
      options: [
        {
          label: 'Weichkäse',
          value: 'soft',
        },
        {
          label: 'Hartkäse',
          value: 'hard',
        },
        {
          label: 'Reibkäse',
          value: 'grated',
        },
      ],
      required: true,
    },
    {
      name: 'rating',
      type: 'select',
      options: [
        {
          label: '1 Stern',
          value: '1',
        },
        {
          label: '2 Sterne',
          value: '2',
        },
        {
          label: '3 Sterne',
          value: '3',
        },
        {
          label: '4 Sterne',
          value: '4',
        },
        {
          label: '5 Sterne',
          value: '5',
        },
      ],
    },
    {
      name: 'description',
      type: 'richText',
      required: false,
    },
    {
      name: 'firstPurchaseDate',
      type: 'date',
      required: true,
    },
    {
      name: 'images',
      type: 'relationship',
      relationTo: 'media',
      hasMany: true,
      required: false,
    },
    lexicalHTMLField({
      htmlFieldName: 'description_html',
      lexicalFieldName: 'description',
    }),
  ],
}
