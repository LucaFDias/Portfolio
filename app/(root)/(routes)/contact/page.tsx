import ContactForm from "./components/contact-form"
import SectionHeading from "@/app/components/section-heading"

const Contact = () => {
  return (
    <section className="flex items-center flex-col leading-6 sm:mb-5">
      <SectionHeading>Contact</SectionHeading>
      <p>
        please contact me directly at <a href="lucasferndias@gmail.com" className="underline">exemple@gmail.com</a> or through this form.
      </p>
      <ContactForm/>
    </section>
  )
}

export default Contact