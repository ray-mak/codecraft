import ContactForm from "@/components/ContactForm"
import Image from "next/image"

const ContactPage = () => {
  return (
    <div>
      <div className="flex flex-col">
        <div className="flex flex-col items-center justify-center">
          <div className="banner text-white flex items-center justify-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Contact Us
            </h1>
          </div>
          <div className="w-full md:w-5/6 lg:w-3/4 lg:max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-16 p-4 md:p-0 my-24">
            <div className="col-span-2 shadow-lg p-6 border order-2 md:order-1">
              <h2 className="text-3xl font-bold text-center">
                Send Us A Message
              </h2>
              <ContactForm />
            </div>
            <div className="flex flex-col justify-center gap-4 md:order-2">
              <div className="w-full flex items-center justify-center">
                <Image
                  src="/images/contact-img.webp"
                  width={320}
                  height={320}
                  alt="search engine illustration"
                />
              </div>
              <div className="border-l-4 border-lightTeal pl-4">
                <p className="text-2xl font-bold text-gray-700 dark:text-gray-200">
                  Email:
                </p>
                <p className="text-lg font-medium text-gray-700 dark:text-gray-200">
                  ray@codecraftwebdesign.com
                </p>
              </div>
              <div className="border-l-4 border-lightTeal pl-4">
                <p className="text-2xl font-bold text-gray-700 dark:text-gray-200">
                  Phone:
                </p>
                <p className="text-lg font-medium text-gray-700 dark:text-gray-200">
                  {"("}951{")"} 990-3113
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
