'use client'

import { motion } from "framer-motion"
import Project from "./components/project"
import { projectsData } from "@/app/data/data"
import SectionHeading from "@/app/components/section-heading"

const Projects = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 100}}
      animate={{ opacity: 1, y: 0}}
      transition={{ delay: 0.175}}
      className="flex items-center flex-col my-10">
      <SectionHeading>Projects</SectionHeading>
      <div>
        {
          projectsData.map((project, index) => (
            <motion.div
              key={index}>
              <Project
                {...project}
              />
            </motion.div>
          ))
        }
      </div>
    </motion.section>
  )
}

export default Projects