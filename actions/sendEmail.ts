"use server";
import ContactFormEmail from "@/email/contact-form-emial";
import { validateString } from "@/lib/utils";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (formDate: FormData) => {
  const message = formDate.get("message");
  const senderEmail = formDate.get("senderEmail");

  if (!validateString(message, 500)) {
    return {
      error: "Invalid message",
    };
  }
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid message",
    };
  }

  if (typeof message !== "string" || typeof senderEmail !== "string") {
    return {
      error: "Invalid message",
    };
  }

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "yaman9892xxx@gmail.com",
      subject: "message from contact form",
      reply_to: senderEmail,
      text: message,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
      // react: <ContactFormEmail message={message} senderEmail={senderEmail} />,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { error: error.message };
    }
    return error;
  }
};

export default sendEmail;
