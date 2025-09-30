import React from 'react'
import './styles.css'

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="de">
      <body>
        <main className="bg-slate-600 min-h-screen pl-4 pr-4 lg:pl-36 lg:pr-36 xl:pl-96 xl:pr-96">
          {children}
        </main>
      </body>
    </html>
  )
}
