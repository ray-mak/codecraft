import WorkPageInfoComponent from "@/components/WorkPageInfoComponent"
import React from "react"

const content = {
  project: "ReactStack",
  about:
    "ReactStack is a React-based coding platform designed to help users improve their programming skills through hands-on practice. It features interactive coding challenges, organized by difficulty and topic, alongside structured lessons that teach key concepts step by step. Users can write and test code directly in the browser, track their progress, and reinforce learning through repeated practice.",
  challenge:
    "The goal was to create a dynamic platform that could support a wide range of coding challenges and lessons, suitable for learners at different skill levels. The platform needed to allow users to write and render code in browser, while providing a way to track progress. Additionally, users needed to be able to download source files to code on their local machine. Furthermore, admins needed the ability to create and manage coding challenges and lessons.",
  solution:
    "CodeCraft developed a React-based platform that combines a fully integrated code editor with a Markdown editor and renderer for lessons, allowing users to seamlessly learn concepts and practice coding side by side. Fullstack challenge files are hosted on AWS S3, ensuring scalability, fast load times, and reliable access. The platforms intuitive interface makes navigating challenges and lessons straightforward, with progress tracking keep users engaged and motivated.",
  images: [
    "/images/reactstack-1.webp",
    "/images/reactstack-2.webp",
    "/images/reactstack-3.webp",
  ],
}

const page = () => {
  return (
    <div>
      <div className="flex flex-col">
        <div className="flex flex-col items-center justify-center">
          <div className="banner text-white flex items-center justify-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              ReactStack
            </h1>
          </div>
        </div>
        <WorkPageInfoComponent content={content} />
      </div>
    </div>
  )
}

export default page
