import Image from "next/image"
import Link from "next/link"

const WhoWeAre = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 px-4 py-12 bg-slate-700 dark:bg-slate-800">
      <div className="flex w-full md:w-5/6 lg:w-3/4 lg:max-w-6xl items-center justify-center">
        <div className="flex gap-4 items-center">
          <div className="w-20 h-[2px] bg-lightTeal"></div>
          <h2 className="text-4xl font-bold text-center text-white">
            <span className="text-lightTeal dark:text-lightTeal">Who</span> We
            Are
          </h2>
          <div className="w-20 h-[2px] bg-lightTeal"></div>
        </div>
      </div>
      <div className="relative grid lg:grid-cols-4 w-full md:w-5/6 lg:max-w-7xl">
        <div className="absolute h-full flex items-center justify-center col-span-2">
          <div className="hidden lg:flex flex-col gap-4 w-[65%] mr-80 xl:mr-[450px] mt-24 bg-white dark:bg-gray-700 p-8 ">
            <p className="text-2xl font-semibold">Ray Mak</p>
            <p>
              My name is Ray, and I used to manage a small business that, like
              many, didn{"’"}t want to overspend on a website. I took it upon
              myself to build one and, over the years, learned how to improve
              its search ranking on Google.
            </p>
            <p>
              That hands-on experience turned into a passion for web design and
              development. Today, I go beyond simple websites to create custom
              solutions tailored to each client{"'"}s needs. From e-commerce
              stores and booking platforms to educational portals and fully
              custom applications, I build scalable, high-performing tools
              designed to help businesses grow and operate more efficiently.
            </p>
            <p>
              My goal is to provide businesses of all sizes with digital
              solutions that combine clean code, strong performance, and
              real-world results.
            </p>
            <div className="mt-4 ">
              <Link
                href="/contact"
                className="px-8 py-2 bg-teal-700 text-white hover:bg-teal-600"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        <div className="order-1 cols-span-1 lg:col-span-2">
          <div className="block lg:hidden flex flex-col gap-4 bg-white dark:bg-gray-700 p-8 ">
            <p className="text-2xl font-semibold">Ray Mak</p>
            <p>
              My name is Ray, and I used to manage a small business that, like
              many, didn{"’"}t want to overspend on a website. I took it upon
              myself to build one and, over the years, learned how to improve
              its search ranking on Google.
            </p>
            <p>
              That hands-on experience turned into a passion for web design and
              development. Today, I go beyond simple websites to create custom
              solutions tailored to each client{"'"}s needs. From e-commerce
              stores and booking platforms to educational portals and fully
              custom applications, I build scalable, high-performing tools
              designed to help businesses grow and operate more efficiently.
            </p>
            <p>
              My goal is to provide businesses of all sizes with digital
              solutions that combine clean code, strong performance, and
              real-world results.
            </p>
            <div className="mt-4 ">
              <Link
                href="/contact"
                className="px-8 py-2 bg-teal-700 text-white hover:bg-teal-600"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        <div className="order-2 col-span-1 lg:col-span-2 mt-16 lg:mt-0">
          <Image
            src="/images/profile-img.jpg"
            width={450}
            height={450}
            alt="picture of Ray"
            className="mx-auto lg:ml-auto"
          />
        </div>
      </div>
    </div>
  )
}

export default WhoWeAre
