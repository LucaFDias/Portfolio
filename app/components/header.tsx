'use client'

import Link from "next/link"
import { AiOutlineMenu } from 'react-icons/ai'


const Header = () => {

  const routes = [
    {
      label: 'Home',
      hrefUrl: '/'
    },{
      label: 'About',
      hrefUrl: '/about'
    },{
      label: 'projects',
      hrefUrl: '/'
    }
  ]

  return (
    <div
      className='flex h-16 items-center justify-between'
    >
      <Link
        href='/'
      >
        Lucas
      </Link>
      <nav>
        {routes.map((route) => (
          <Link
            key={route.hrefUrl}
            href={route.hrefUrl}
            className="
              flex-col 
              inline-text
              uppercase
              font-medium
              text-xs
              rounded-md
              m-5
              p-4
              transition-all
              ease-in-out
              hover:delay-150
              translate-x-2
              text-gray-400
              hover:bg-[#212024]
              hover:text-white
              focus:outline-none
              focus:ring-2
              focus:ring-inset
              focus:ring-white
            "
          >
            {route.label}
          </Link>
        ))}
      </nav>
      <div>
        <button 
          className="
            flex
            p-2
            transition
            rounded-md
            hover:delay-150
            hover:bg-[#212024]
            hover:text-gray-400
            focus:outline-none
            focus:ring-2
            focus:ring-inset
          focus:ring-white
          "
        >
          <AiOutlineMenu size={24}/>
        </button>
      </div>
    </div>
  )
}

export default Header