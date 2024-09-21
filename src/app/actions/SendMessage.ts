"use server"

import nodemailer from "nodemailer"

export type MessageProps = {
  name: string
  email: string
  message: string
  phone: string
  subject: string
}

export default async function SendMessage(messageData: MessageProps) {
  const { name, email, message, phone, subject } = messageData

  if (name === "" || message === "" || phone === "") {
    return { error: "Please fill required fields" }
  }

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  })

  let mailOptions = {
    from: "no-reply@codecraftwebdesign.com",
    to: "rmak12594@gmail.com",
    subject: `New message from ${name} - ${subject}`,
    html: ` <p>You've received a new message from <strong>${name}</strong>.</p>
    <h3>Contact Details</h3>
    <ul>
      <li><strong>Name:</strong> ${name}</li>
      <li><strong>Email:</strong> ${email}</li>
      <li><strong>Phone:</strong> ${phone}</li>
      <li><strong>Subject:</strong> ${subject}</li>
    </ul>
    <h3>Message</h3>
    <p>${message}</p>`,
  }
  try {
    await transporter.sendMail(mailOptions)
    return { success: "Message sent successfully" }
  } catch (error) {
    console.error(error)
    return { error: "Message failed to send" }
  }
}
