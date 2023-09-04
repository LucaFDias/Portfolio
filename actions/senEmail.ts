'use server';

import { Resend } from 'resend';

import { validateString } from '@/lib/validate-string';
import ContactFormEmail from '@/email/contact-form-email';
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY)

const getErrorMessage = (error: unknown) => {
  let message: string;

  if (error instanceof Error){
    message = error.message

  } else if (error && typeof error === 'object' && 'message' in error) {
    message = String(error.message)
  } else if (typeof error === 'string') {
    message = error;
  } else {
    message = 'Semething went wrong';
  }

  return message;
}


export const sendEmail = async (formData: FormData) => {
  const message = formData.get('message')
  const senderEmail = formData.get('senderEmail')

  if(!validateString(senderEmail, 50)) {
    return {
      error: 'Invalid sender email'
    }
  }
  if (!validateString(message, 300)) {
    return {
      error: 'Invalid message'
    }
  }

  let data;
  try {
    data = await resend.emails.send({
      from: 'Contact form <onboarding@resend.dev>',
      to: 'lucasferndias@gmail.com',
      subject: 'message from contato form',
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      })
    })

  } catch (error: unknown) { 
    return {
      error: getErrorMessage(error)
    } 
  }

  return {
    data
  }
}
