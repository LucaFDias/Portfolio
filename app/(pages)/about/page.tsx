'use client'

import { motion } from "framer-motion";

import SectionDivider from "@/app/components/section-divider";
import SectionHeading from "@/app/components/section-heading";
import Experiences from "@/app/components/experiences";

const About = () => {
  return (
    <>
      <main className="flex items-center flex-col leading-6 sm:mb-5">
        <SectionDivider/>
        <motion.section 
          className="max-w-[45rem] text-center"
          initial={{ opacity: 0, y: 100}}
          animate={{ opacity: 1, y: 0}}
          transition={{ delay: 0.175}}
        >
          <SectionHeading>About Me</SectionHeading>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate ipsum nulla minus unde voluptatum eaque aliquam officia atque quasi consequuntur libero, fugiat, tempore deserunt exercitationem consequatur praesentium voluptatibus. Et, eaque?</p>
        </motion.section>
        <SectionDivider/>
      </main>
      <Experiences/>
    </>
  )
}

export default About;