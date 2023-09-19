'use client'

import Button from "@/app/components/button";
import { sendEmail } from "@/actions/senEmail";

import { FaPaperPlane } from 'react-icons/fa';
import { toast } from "react-hot-toast";

const ContactForm = () => {
  
  return (
    <>
      <form 
        className="mb-10 mt-4 flex max-w-2xl flex-col"
        action={async (FormData) => {
          const { data, error } = await sendEmail(FormData)

          if (error) {
            toast.error(error);
            return;
          }
          toast.success('Your email has been sent successfully!')
        }}
      >
        <div className="flex gap-2 flex-col">
          <label className="text-xs font-light uppercase">Email</label>
          <input 
            placeholder="Your email"
            type="email"
            name="senderEmail"
            maxLength={50}
            required
            className="
              bg-transparent
              py-2
              px-3
              rounded-md
              sm:w-1/2
              placeholder:text-xs
              text-xs
              ring-isent
              border
              border-gray-300npn
            "
          />

        </div>
        <div className="flex flex-col gap-2 my-3">
          <label className="text-xs font-light uppercase">Message</label>
          <textarea 
            placeholder="Your message"
            required
            name="message"
            maxLength={300}
            className="
              h-40
              py-2
              px-3
              bg-transparent
              rounded-md
              sm:w-1/2
              placeholder:text-xs
              text-xs
              border
              border-gray-300
            "
            />
        </div>

        <Button
          type="submit"
          label="Enviar mensagem"
          icon={FaPaperPlane}
        />
      </form>
    </>
  )
}

export default ContactForm