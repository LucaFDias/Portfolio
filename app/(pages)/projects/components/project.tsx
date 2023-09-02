'use client'

import Link from "next/link";
import Image from "next/image";

import { useRef } from "react";

import { projectsData } from "@/app/data/data";

import { useScroll, motion, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

const Project = ({
  title,
  description,
  tags,
  imageUrl,
  hrefUrl
}: ProjectProps) => {

  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1']
  })

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <Link
      href={hrefUrl}
      target="_blank"
    >
      <motion.div
        ref={ref}
        style={{
          scale: scaleProgress,
          opacity: opacityProgress
        }}
        className="group mb-2 sm:mb-4"
        >
        <section
          className="
          bg-transparent 
          rounded-md
          max-w-[42rem]
          border
          border-white/20
          text-white
          overflow-hidden
          sm:pr-8
          relative
          sm:h-[20rem]
          hover:bg-gray-800
          transition
          group-even:pl-8
          "
          >
          <div className="pt-4 pb-8 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[18rem]">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-2 mb-4 leading-relaxed text-gray-400">{description}</p>
            <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
              {tags.map((tag, index) => (
                <li 
                  key={index}
                  className="
                    px-3
                    py-1
                    bg-[#212024]
                    rounded-full
                    text-white
                    text-[0.7rem]
                    uppercase
                    tracking-wider
                    shadow
                    hover:bg-white/10
                    transition
                  "
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <Image
            src={imageUrl}
            alt={title}
            quality={95}
            className="
              absolute 
              top-8 
              -right-40 
              w-[28.25rem]
              rounded-t-lg
              shadow-2xl
              transition
              group-hover:scale-[1.04]
              group-hover:-translate-x-3
              group-hover:-translate-y-3
              group-hover:-rotate-2
              group-even:right-[initial]
              group-even:-left-40
            "
          />
        </section>
      </motion.div>
    </Link>
  )
}

export default Project