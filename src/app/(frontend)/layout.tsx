import React from 'react'
import './styles.css'

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="de">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
