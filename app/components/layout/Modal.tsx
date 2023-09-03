'use client'

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

import { AiOutlineMenu } from "react-icons/ai";
import ModalForm from "./modal-form";

const Modal = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <AiOutlineMenu/>
        </DialogTrigger>
          <DialogContent
            className="
              p-0
              pt-10
            bg-neutral-950
              
            "
          >
            <ModalForm/>
         </DialogContent>
      </Dialog>
    </>
  )
}

export default Modal
