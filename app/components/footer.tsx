'use client'

import Link from 'next/link';
import { footerData } from '@/app/data/data';

const Footer = () => {
  
  return (
    <div
      className="flex items-center justify-center p-4"
    >
      {
        footerData.map((item, index) => (
          <Link
            className='
              text-base
              uppercase 
              md:text-xs
              rounded-md
              font-medium
              md:mx-4
              p-4
              transition-all
              ease-in-out
              hover:delay-150
              translate-x-2
              text-gray-400
              hover:bg-[#212024]
              hover:text-white
              max-w-fit
            '
            key={index}
            href={item.hrefUrl}
            target='_blank'
          >
            <div className='flex items-center gap-2'>
              <p className='hidden md:block'>{item.label}</p>
              <span className='text-2xl md:text-base '>{item.icon}</span>
            </div>
          </Link>
        ))
      }
    </div>
  )
}

export default Footer