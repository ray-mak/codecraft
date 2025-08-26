import ContactForm from "@/components/ContactForm"
import Image from "next/image"

const AboutPage = () => {
  return (
    <div>
      <div className="flex flex-col">
        <div className="flex flex-col items-center justify-center">
          <div className="banner text-white flex items-center justify-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              About Us
            </h1>
          </div>
          <div className=" w-full md:w-5/6 lg:w-3/4 lg:max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-16 p-4 md:p-0 my-16">
            <div className="flex flex-col justify-center lg:col-span-2">
              <h2 className="text-teal-700 dark:text-teal-400 font-medium">
                CODECRAFT WEB DESIGN
              </h2>
              <p className="text-3xl font-bold text-gray-800 dark:text-gray-200">
                Helping Businesses Implement Custom Software Solutions
              </p>
              <p className="text-lg text-gray-800 dark:text-gray-200 mt-4">
                My name is Ray Mak and I am the owner of CodeCraft Web Design. I
                {"'"}ve been building websites for over 6 years, helping
                friends, family, and local businesses improve their web
                presence.
              </p>
              <p className="text-lg text-gray-800 dark:text-gray-200 mt-4">
                What started as a hobby turned into a passion for web
                development and creating custom solutions that can have a
                real-world impact. From e-commerce stores and booking platforms
                to educational portals and fully custom applications, I build
                scalable, high-performing tools designed to help businesses grow
                and operate more efficiently.
              </p>
              <p className="text-lg text-gray-800 dark:text-gray-200 mt-4">
                My goal is to provide businesses of all sizes with digital
                solutions that combine clean code, strong performance, and
                real-world results.
              </p>
            </div>
            <div className="flex items-center justify-center px-12 lg:px-0">
              <Image
                src="/images/profile-img.jpg"
                width={500}
                height={500}
                alt="picture of Ray Mak"
              />
            </div>
          </div>
        </div>
        <div id="contact" className="my-16 flex justify-center">
          <div className="w-full md:w-5/6 lg:w-3/4 lg:max-w-4xl">
            <h2 className="text-4xl font-bold text-center mb-6">Contact Us</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
