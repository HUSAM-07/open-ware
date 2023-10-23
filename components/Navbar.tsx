import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const navbar = () => {
  return (
    <nav className='border-2 border-red-500 flexBetween max-container padding-container relative z-30 py-5'>
        <Link href="/">
            <Image src="/open-ware-logo.svg" alt='logo' width={74}
        </Link>
    </nav>
  )
}

export default Navbar