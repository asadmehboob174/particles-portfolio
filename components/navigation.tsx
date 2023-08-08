'use client'

import { links } from '@/lib/data'
import { motion, useReducedMotion, MotionConfig } from "framer-motion";
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation';
import React from 'react';
import { FC } from 'react'

interface NavigationProps {
}

const Navigation: FC<NavigationProps> = ({}) => {
  
  const pathname = usePathname();
  const [isMobile , setIsMobile] = React.useState(false)
 React.useEffect(() => {
    function handleResize() {
      console.log('resized to: ', window.innerWidth)
      setIsMobile(window.innerWidth < 631)
}

    window.addEventListener('resize', handleResize)
  })

// const isMobile = window.innerWidth < 631
   const variants  = {
          initial: {
           opacity: 0,
           height: 0,
         },
         animate: {
           opacity: 1,
           height: isMobile ? '80px' : '352px',
           transition : {
              duration: isMobile ? 0.5 : 1
           }
         },
       };


  return (
<motion.nav
        variants={variants}
        initial='initial'
        animate='animate'
        
       className='
        fixed z-[999]
        backdrop-blur-[1.3]
        bottom-0 sm:right-8 sm:top-[30%]
        sm:rounded-full
        bg-white/10 
        w-full sm:w-[initial]
        border-t-2 border-zinc-100/20 sm:border-2 sm:border-white/10
        h-20 sm:h-[22rem] overflow-hidden
        
     '>
    <ul className='flex sm:flex-col items-center justify-between sm:justify-center  sm:space-y-9 h-full  my-auto  px-8 sm:px-5 py-7'>
    {
      links.map((link, index) => {
        return (
          <li key={index}>
            <Link href={link.path} className={` font-semibold text-xl sm:text-base ${link.path === pathname ? 'text-red-600' : 'text-white'} hover:text-red-600`}>{link.icon}</Link>
          </li>
        )
      })
    }
    </ul>
  </motion.nav>
  )
  
}

export default Navigation