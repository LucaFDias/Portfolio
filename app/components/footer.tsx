'use client'

import Link from 'next/link';

import {
  FaLinkedinIn,
  FaWhatsapp,
  FaTwitter,
  FaGithubAlt
} from 'react-icons/fa';

const Footer = () => {

  const routes = [
    {
      hrefUrl: '/',
      icon: FaLinkedinIn,
      label: 'LinkedIn'
    },
    {
      hrefUrl: '/',
      icon: FaGithubAlt,
      label: 'GitHub'
    },
    {
      hrefUrl: '/',
      icon: FaTwitter,
      label: 'Twitter'

    },
    {
      hrefUrl: '/',
      icon: FaWhatsapp,
      label: 'Whatsapp',
    },
    {
      hrefUrl: '/',
      icon: FaWhatsapp,
      label: 'email',

    }
  ]
  
  return (
    <div
      className="flex items-center justify-center p-4"
    >
      {
        routes.map((route) => (
          <Link
            className='
            uppercase 
            text-xs
            rounded-md
            font-medium
            mx-5
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
            '
            key={route.hrefUrl}
            href={route.hrefUrl}
          >
            {route.icon}
            {route.label}
          </Link>
        ))
      }
    </div>
  )
}

export default Footer