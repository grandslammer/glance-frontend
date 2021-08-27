import React from "react"
import Link from 'next/link'

function Navbar() {
  return (
    <div className="py-2 px-1 flex flex flex-row-reverse">
      <Link
        href="/login"
      >
        <a className="rounded-full px-6 py-1 text-green-400 border-2 border-green-400 hover:text-white hover:bg-green-400  ">Login</a>
      </Link>
    </div>
  )
}

export default Navbar
