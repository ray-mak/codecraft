import WorkPageInfoComponent from "@/components/WorkPageInfoComponent"
import React from "react"

const content = {
  project: "The Human Body Shop - Custom Booking System",
  about:
    "The Human Body Shop is a massage therapy business looking to streamline its appointment process with a custom booking solution. The goal was to create a system that allows clients to easily schedule sessions online, while giving the business full control over staff availability, appointment types, and time slots. The platform needed to be intuitive for both clients and staff, reducing administrative overhead and improving the overall customer experience.",
  challenge:
    "The main challenge was creating a custom booking system that could handle the unique scheduling needs of a massage therapy business. The platform needed to support special staff availabilities, recurring time-off, and custom booking preferences for different services, while remaining intuitive for clients. It also had to manage overlapping appointments, varying session lengths, and provide an effortless experience for both staff and customers, all without relying on off-the-shelf booking tools.",
  solution:
    "CodeCraft built a custom booking platform featuring a dynamic calendar UI that displays real-time availability for each staff member. The system supports special availabilities, recurring time-offs, and service-specific booking preferences, ensuring clients can only book valid appointment slots. We also integrated Stripe payment processing, allowing clients to securely pay online during booking.  This solution streamlines scheduling, reduces administrative overhead, and delivers a seamless experience for both staff and clients.",
  images: [
    "/images/booking-1.webp",
    "/images/booking-2.webp",
    "/images/booking-3.webp",
  ],
}

const page = () => {
  return (
    <div>
      <div className="flex flex-col">
        <div className="flex flex-col items-center justify-center">
          <div className="banner text-white flex items-center justify-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              The Human Body Shop - Custom Booking System
            </h1>
          </div>
        </div>
        <WorkPageInfoComponent content={content} />
      </div>
    </div>
  )
}

export default page
