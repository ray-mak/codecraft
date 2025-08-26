"use client"
import Image from "next/image"
import React, { useState } from "react"

type Props = {
  content: {
    project: string
    about: string
    challenge: string
    solution: string
    images: string[]
  }
}
export default function WorkPageInfoComponent({ content }: Props) {
  const [current, setCurrent] = useState(0)

  const nextSlide = () => {
    setCurrent((prev) => (prev === content.images.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? content.images.length - 1 : prev - 1))
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* About Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">About {content.project}</h2>
        <p className="text-gray-700">{content.about}</p>
      </section>

      {/* Challenge & Solution Section */}
      <section className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h3 className="text-xl font-semibold mb-4">The Challenge</h3>
          <p className="text-gray-700">{content.challenge}</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">The Solution</h3>
          <p className="text-gray-700">{content.solution}</p>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="relative">
        <div
          className="relative overflow-hidden rounded-lg shadow-lg border-2"
          style={{ paddingTop: "56.25%" }}
        >
          <Image
            src={content.images[current]}
            alt={`Slide ${current + 1}`}
            fill
            className="object-cover"
          />
        </div>

        {/* Carousel Controls */}
        <div className="flex justify-center items-center mt-4 space-x-4">
          <button
            onClick={prevSlide}
            className="bg-gray-200 hover:bg-gray-300 rounded-full p-2"
          >
            &#8592;
          </button>
          <div className="flex space-x-2">
            {content.images.map((_, index) => (
              <span
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === current ? "bg-blue-700" : "bg-gray-300"
                }`}
              ></span>
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="bg-gray-200 hover:bg-gray-300 rounded-full p-2"
          >
            &#8594;
          </button>
        </div>
      </section>
    </div>
  )
}
