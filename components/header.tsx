'use client';

import { socialLinks } from '@/lib/data';
import Link from 'next/link';
import { FC } from 'react'

interface HeaderProps {
  
}

const Header: FC<HeaderProps> = ({}) => {
  return <div className='w-[90%] sm:w-[950px] sm:mx-w-[800px] mx-auto h-32 !z-[999]'>
     <div className='flex items-center justify-between h-full'>
        <div className=''>
          <span className='text-4xl leading-6 font-bold tracking-wider text-white'>asad</span>{"   "} 
          <span className='text-4xl leading-6 font-thin text-white'>mehboob</span>{"   "} 
          <span className='text-3xl font-bold text-red-600 rounded-full'>.</span>
        </div>
 <div className=''></div>
        <ul className='flex items-center space-x-1 sm:space-x-3'>
          {
            socialLinks.map((slink, index) => {
              return (
                <li key={index} className='group cursor-pointer hover:-translate-y-2 transition duration-300 w-10 hover:text-red-600 hover:bg-white p-2 rounded-full' >
                  <Link className='text-2xl font-medium cursor-pointer text-white group-hover:text-red-600 transition duration-300' href={slink.path}>{slink.icon}</Link>
                </li>
              )
            })
          }
        </ul>
     </div>
  </div>
}

export default Header

