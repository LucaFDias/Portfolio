'use client'

import { motion } from 'framer-motion';
import ContactForm from "./components/contact-form"
import SectionHeading from "@/app/components/section-heading"

const Contact = () => {
  return (
    <motion.section 
      className="container max-w-4xl"
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1}}
      transition={{ duration: 1}}
      viewport={{ once: true}}
    >
      <SectionHeading>Contact</SectionHeading>
      <p >
        please contact me directly at <a href="lucasferndias@gmail.com" className="underline">exemple@gmail.com</a> or through this form.
      </p>
      <ContactForm/>
    </motion.section>
  )
}

export default Contact