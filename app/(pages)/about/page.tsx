'use client'

import { motion } from "framer-motion";

import SectionDivider from "@/app/components/section-divider";
import SectionHeading from "@/app/components/section-heading";
import Experiences from "@/app/components/experiences";

const About = () => {
  return (
    <>
      <main className="flex items-center flex-col leading-6 sm:mt-10">
        <SectionDivider/>
        <motion.section 
          className="max-w-[45rem] text-center"
          initial={{ opacity: 0, y: 100}}
          animate={{ opacity: 1, y: 0}}
          transition={{ delay: 0.175}}
        >
          <SectionHeading>About Me</SectionHeading>
          <p>I am currently studying the second semester of Systems analysis and development, I have experiences in real projects as a freelancer and on a personal basis. Strong skills in web development, specialized in creating and customizing e-commerce solutions (E-commerces), consumption of Rest and Restful APIs, GIT. In addition to working in Backend with Prisma, Django, and NoSQL and SQL databases. Committed to learning and growing as a technology professional. </p>
        </motion.section>
        <SectionDivider/>
      </main>
      <Experiences/>
    </>
  )
}

export default About;