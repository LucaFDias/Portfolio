import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ClientOnly from './components/layout/client-only'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lucas Dias',
  description: 'Hi, my name is Lucas Dias, i am developer fullstack',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className},
        bg-black
        text-white
        relative
      `}>
        <ClientOnly>
          <div 
            className='
              bg-gray-900 
              absolute 
              top-[-6rem] 
              right-[8rem] 
              h-[26.25rem] 
              w-[28.25rem] 
              rounded-full 
              blur-[10rem]
              sm:w-[68.75rem]
              z-[-50]
            '
          />
          <div 
            className='
              bg-gray-800 
              absolute 
              top-[-1rem] 
              left-[-35rem] 
              h-[22.25rem] 
              w-[36.25rem] 
              rounded-full 
              blur-[10rem]
              sm:w-[68.75rem]
              md:left-[-33rem]
              lg:left-[-28rem]
              xl:left-[-15rem]
              2xl:left-[-5rem]
              z-[-50]
            '
          />
          {children}
        </ClientOnly>
      </body>
    </html>
  )
}
