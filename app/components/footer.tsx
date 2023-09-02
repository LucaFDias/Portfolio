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
              uppercase 
              text-xs
              rounded-md
              font-medium
              mx-4
              p-4
              transition-all
              ease-in-out
              hover:delay-150
              translate-x-2
              text-gray-400
              hover:bg-[#212024]
              hover:text-white
            '
            key={index}
            href={item.hrefUrl}
            target='_blank'
          >
            <div className='flex items-center gap-2'>
              <p>{item.label}</p>
              <span className='text-base'>{item.icon}</span>
            </div>
          </Link>
        ))
      }
    </div>
  )
}

export default Footer