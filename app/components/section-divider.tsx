'use client'

import { motion } from 'framer-motion'
const SectionDivider = () => {
  return (
    <motion.div
      className='
        bg-gray-200 
        my-8 
        h-16 
        w-[2px] 
        rounded-full 
        hidden 
        lg:block
        bg-gradient-to-b
        from-gray-800
      '
      initial={{opacity: 0, y: 100}}
      animate={{opacity: 1, y: 0}}
      transition={{delay: 0.125}}
    />
  )
}

export default SectionDivider