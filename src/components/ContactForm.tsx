"use client"

import SendMessage, { MessageProps } from "@/app/actions/SendMessage"
import { useState } from "react"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [success, setSuccess] = useState<boolean>(false)
  const [error, setError] = useState<string | null>()
  const [loading, setLoading] = useState<boolean>(false)
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (
      formData.name !== "" &&
      formData.message !== "" &&
      formData.phone !== ""
    ) {
      setLoading(true)
      const sendMessageServer = async (data: MessageProps) => {
        const { error } = await SendMessage(data)
        if (error) {
          setError(error)
          setLoading(false)
        } else {
          setSuccess(true)
          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          })
          setLoading(false)
        }
      }
      sendMessageServer(formData)
    }
  }

  return (
    <form className="p-4" onSubmit={handleSubmit}>
      <div className="flex flex-col items-center justify-center gap-6">
        {success && (
          <div className="text-green-600 px-4 py-2 rounded flex flex-col items-center justify-center">
            <p>Message sent! We{"'"}ll reach out to you as soon as possible.</p>
          </div>
        )}

        {error && (
          <div className="text-red-600 px-4 py-2 rounded flex flex-col items-center justify-center">
            <p>error</p>
          </div>
        )}

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          <label
            htmlFor="name"
            className="flex flex-col text-gray-600 dark:text-gray-200"
          >
            Name{"*"}
            <input
              type="text"
              id="name"
              name="name"
              className="p-2 border border-gray-300 dark:border-gray-700"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label
            htmlFor="email"
            className="flex flex-col text-gray-600 dark:text-gray-200"
          >
            Email
            <input
              type="email"
              id="email"
              name="email"
              className="p-2 border border-gray-300 dark:border-gray-700"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label
            htmlFor="phone"
            className="flex flex-col text-gray-600 dark:text-gray-200"
          >
            Phone{"*"}
            <input
              type="tel"
              id="phone"
              name="phone"
              className="p-2 border border-gray-300 dark:border-gray-700"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </label>
          <label
            htmlFor="subject"
            className="flex flex-col text-gray-600 dark:text-gray-200"
          >
            Subject
            <input
              type="text"
              id="subject"
              name="subject"
              className="p-2 border border-gray-300 dark:border-gray-700"
              value={formData.subject}
              onChange={handleChange}
            />
          </label>
          <label
            htmlFor="message"
            className="md:col-span-2 flex flex-col text-gray-600 dark:text-gray-200"
          >
            Message{"*"}
            <textarea
              id="message"
              name="message"
              className="p-2 border border-gray-300 dark:border-gray-700"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
            />
          </label>
        </div>
        <button
          type="submit"
          className="mt-4 px-6 py-2 rounded bg-teal-700 hover:bg-teal-800 text-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={loading}
        >
          Send Message
        </button>
      </div>
    </form>
  )
}

export default ContactForm
