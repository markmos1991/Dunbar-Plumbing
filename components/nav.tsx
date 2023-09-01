"use client"
import React from 'react'
import Link from 'next/link'
import { useState } from 'react';


const Nav = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <>
      <nav className='flex flex-wrap items-center p-5 shadow-lg bg-blue-900'>
        <Link href="/" className="flex items-center mx-2 mb-4 font-medium text-txt title-font md:mb-0">
        
          <span className="ml-3 text-xl text-white">LOGO HERE</span>
        </Link>
        <button className='inline-flex p-3 ml-auto text-white lg:hidden hover:text-red-600'
         onClick={handleClick}>
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        <div className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
          <div className='flex flex-col items-start w-full lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto lg:items-center lg:h-auto'>
          <Link href="/#" className="px-4 py-2 m-2 text-black rounded ">Home</Link>
      
        </div>
        </div>
      </nav>
    </>

  )
}

export default Nav