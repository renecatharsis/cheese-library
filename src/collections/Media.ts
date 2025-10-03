import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: {
    staticDir: 'media',
    imageSizes: [
      {
        name: 'small',
        width: 1200,
        position: 'centre',
      },
      {
        name: 'large',
        width: 2400,
        position: 'centre',
      },
    ],
    adminThumbnail: 'small',
    mimeTypes: ['image/*'],
  },
}
