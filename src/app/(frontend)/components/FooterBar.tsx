import React from 'react'

export default function FooterBar() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-stone-300 bottom-0 w-full py-2">
      <p className="text-center text-sm/6 md:order-1">&copy; {year} Rene Rösch</p>
    </footer>
  )
}
