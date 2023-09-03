
import Link from 'next/link'

import { modalformData } from '@/app/data/data'
import { BsArrowRight } from 'react-icons/bs'

const ModalForm = () => {
  return (
    <div
      className='
        flex
        item-center
        flex-col
      '
    >
      {
        modalformData.map((item, index) => (
          <Link
            key={index}
            href={item.hrefUrl}
            className='
              flex 
              items-center 
              justify-between
              hover:bg-neutral-900
              rounded-lg
              transition
            '
          >
            <div
              className='
                flex
                items-center 
                gap-4
                py-2
                px-4
              '
            >
              {item.icon}
              {item.label}
            </div>
            <p className='px-4'>
              <BsArrowRight/>
            </p>
          </Link>
        ))
      }
    </div>
  )
}

export default ModalForm