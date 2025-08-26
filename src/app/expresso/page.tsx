import WorkPageInfoComponent from "@/components/WorkPageInfoComponent"
import React from "react"

const content = {
  project: "Expresso",
  about:
    "Expresso is a software-as-a-service platform that helps restaurants automatetheir operations with web app, mobile app, and QR code-basedordering systems. Expresso helps restaurants succeed by providing adiverse set of cutting-edge features and operational automations.",
  challenge:
    "Expresso was challenged with creating a highly dynamic platform able to accommodate the style of operations of any restaurant. The platform needed to be simple, yet support a wide feature set capable of supporting a wide variety of customers. In addition, the platform needed to have a simple and intuitive user experience that abstracted away the underlying complexity.",
  solution:
    "CodeCraft developed a highly configurable platform that allowed for multiple modes of operations for restaurants. In response to feedback from restaurant operators, CodeCraft developed complex features, such as QR-code based ordering mapped to the table number. CodeCraft also developed a robust ticket printing system through an integration with Star Micronics printers.",
  images: [
    "/images/expresso-1.webp",
    "/images/expresso-2.webp",
    "/images/expresso-3.webp",
  ],
}

const page = () => {
  return (
    <div>
      <div className="flex flex-col">
        <div className="flex flex-col items-center justify-center">
          <div className="banner text-white flex items-center justify-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Expresso
            </h1>
          </div>
        </div>
        <WorkPageInfoComponent content={content} />
      </div>
    </div>
  )
}

export default page
