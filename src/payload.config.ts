// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { de } from '@payloadcms/translations/languages/de'
import {
  FixedToolbarFeature,
  HTMLConverterFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { migrations } from './migrations'
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Cheese } from '@/collections/Cheese'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Cheese],
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [
      ...defaultFeatures.filter(
        (feature) =>
          feature.key !== 'inlineCode' && feature.key !== 'add' && feature.key !== 'link',
      ),
      FixedToolbarFeature(),
      HTMLConverterFeature({}),
    ],
  }),
  serverURL: process.env.PAYLOAD_SERVER_URL || '',
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  i18n: {
    fallbackLanguage: 'de',
    supportedLanguages: { de },
  },
  localization: {
    locales: [
      {
        label: 'Deutsch',
        code: 'de',
      },
    ],
    defaultLocale: 'de',
  },
  db: postgresAdapter({
    prodMigrations: migrations,
    idType: 'uuid',
    push: false, // enforce migrations
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  upload: {
    limits: {
      fileSize: 25 * 1024 * 1024, // 25 MB
    },
  },
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
})
