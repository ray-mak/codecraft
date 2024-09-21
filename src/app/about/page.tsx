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
                Helping Small Businesses Improve Their Web Presence Affordably
              </p>
              <p className="text-lg text-gray-800 dark:text-gray-200 mt-4">
                My name is Ray Mak and I am the owner of CodeCraft Web Design. I
                {"'"}ve been building websites for over 6 years, helping
                friends, family, and local businesses improve their web
                presence.
              </p>
              <p className="text-lg text-gray-800 dark:text-gray-200 mt-4">
                Having worked in and with small businesses, I{"'"}ve discovered
                that most small businesses don{"'"}t have the budget to spend
                thousands of dollars on a custom website. They end up resorting
                to page builders which are slow, bloated, and not optimized for
                search engines.
              </p>
              <p className="text-lg text-gray-800 dark:text-gray-200 mt-4">
                That{"’"}s why I started CodeCraft Web Design - to offer small
                businesses a better option. We provide custom web design and
                development that{"’"}s not only affordable but tailored to help
                your business grow. For just $50 a month, you{"’"}ll get a
                website that{"’"}s fast, responsive, and optimized to get
                noticed, giving you more value than any page builder ever could.
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
