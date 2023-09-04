import Link from 'next/link';

import {
  HiOutlineDownload
} from 'react-icons/hi';

const Home = () => {
  return (
    <div className="mx-auto container w-full px-2 sm:px-4 lg:px-6 max-w-4xl h-full flex items-center">
      <div className='flex-col flex gap-y-4 flex-1'>
        <h1 className='text-4xl font-bold px-2 title'>
          Lucas Dias
        </h1>
        <div className='flex-col flex px-2'>
          <p className='font-semibold'>Software engineer fullstack</p>
          <p className='text-gray-400 '>Developer frontend with 1 year of experiences.</p>
          <p className='text-gray-400'>I enjoy building sites and apps with a focus on the world of React. </p>
        </div>
        <div className='flex flex-col md:flex gap-4'>
          <Link
            href='/cv.pdf'
            download={true}
            target='_blank'
            className='
              flex
              items-center
              rounded-md
              font-bold
              gap-2
              p-2
              transition-all
              ease-in-out
              hover:delay-150
              translate-x-2
              text-gray-400
              md:hover:bg-[#212024]
              md:hover:text-white
              max-w-fit
              ml-[-8px]
            '
          >
            Download CV - pt
            <HiOutlineDownload size={20}/>
          </Link>
          <Link
            href='/cven.pdf'
            download={true}
            target='_blank'
            className='
              flex
              items-center
              rounded-md
              font-bold
              gap-2
              p-2
              transition
              ease-in-out
              delay-150
              translate-x-2
              bg-white
              text-[#212024]
              md:hover:bg-transparent
            md:hover:text-white
              md:hover:ring-1
              max-w-fit
              
              ml-[-8px]
            '
          >
            Download CV - en
            <HiOutlineDownload size={20}/>
          </Link>
        </div>   
      </div>
    </div>
  )
}

export default Home