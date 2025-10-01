import React from 'react'
import './styles.css'
import FooterBar from '@/app/(frontend)/components/FooterBar'

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="de">
      <head>
        <title>Käse Bibliothek</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </head>
      <body>
        <main className="text-stone-900 bg-stone-200 min-h-screen pl-4 pr-4 lg:pl-36 lg:pr-36 xl:pl-96 xl:pr-96">
          {children}
        </main>
        <FooterBar />
      </body>
    </html>
  )
}
