import Image from "next/image"
import Link from "next/link"
import React from "react"

const cards = [
  {
    image: "/images/booking-1.webp",
    title: "Custom Booking and Scheduling Platform for Service Providers",
    text: "A Calendly-like platform providing service providers with a highly customized booking and scheduling experience.",
    url: "/hbs-booking",
  },
  {
    image: "/images/reactstack-1.webp",
    title: "LeetCode Style Platform for Coding Challenges and Lessons",
    text: "A web platform designed to help users improve their coding skills through interactive challenges and lessons.",
    url: "/reactstack",
  },
  {
    image: "/images/expresso-1.webp",
    title: "Highly Customizable Restaurant Ordering Platform",
    text: "Web and mobile platform for restaurant online ordering, supporting a high level of operational customization.",
    url: "/expresso",
  },
]

const OurWorkSection = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 px-4 py-12 bg-slate-100 dark:bg-slate-800">
      <div className="flex w-full md:w-5/6 lg:w-3/4 lg:max-w-6xl items-center justify-center">
        <div className="flex gap-4 items-center">
          <div className="w-20 h-[2px] bg-lightTeal"></div>
          <h2 className="text-4xl font-bold text-center ">
            <span className="text-lightTeal dark:text-lightTeal">Our</span> Work
          </h2>
          <div className="w-20 h-[2px] bg-lightTeal"></div>
        </div>
      </div>
      <CardLayout />
    </div>
  )
}
export function CardLayout() {
  return (
    <div className=" bg-gray-100 flex items-center justify-center p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl w-full">
        {cards.map((card, index) => (
          <Link
            href={card.url}
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-2 transform transition duration-300"
          >
            <div className="p-4 rounded-lg">
              <Image
                src={card.image}
                alt={card.title}
                width={400}
                height={400}
                className="w-full h-60 object-cover rounded-lg"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600">{card.text}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default OurWorkSection
