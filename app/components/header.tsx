'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

import { 
  AiOutlineMenu 
} from 'react-icons/ai';

import { motion } from "framer-motion";
import { cn } from "../lib/utils";

const Header = () => {
  const pathname = usePathname()

  const routes = [
    {
      label: 'Home',
      hrefUrl: '/'
    },
    {
      label: 'About',
      hrefUrl: '/about'
    },
    {
      label: 'projects',
      hrefUrl: '/projects'
    },
    {
      label: 'Contact',
      hrefUrl: '/contact'
    }
  ]

  return (
    <div
      className='flex h-16 items-center justify-between'
    >
      <Link
        href='/'
        className="text-xl font-bold sm:text-lg "
      >
        Lucas Dias
      </Link>
      <motion.nav
        className="hidden md:block"
      >
        {routes.map((route) => (
          <Link
            key={route.hrefUrl}
            href={route.hrefUrl}
            className={cn(`
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
              hover:bg-[#212024]
              hover:text-white
              `,
              pathname === route.hrefUrl ? "border-b rounded-none" : "text-gray-400"
            )
          }
          >
            {route.label}
          </Link>
        ))}
      </motion.nav>
      <div>
        <button
          className="
            flex
            p-2
            transition
            rounded-md
            hover:delay-150
            md:hover:bg-[#212024]
            md:hover:text-gray-400
            text-4xl
            md:text-2xl
          "
        >
          <AiOutlineMenu/>
        </button>
      </div>
    </div>
  )
}

export default Header