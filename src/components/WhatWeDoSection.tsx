import Image from "next/image"

const WhatWeDoSection = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 px-4 md:py-12">
      <div className="flex w-full md:w-5/6 lg:w-3/4 lg:max-w-6xl items-center justify-center">
        <div className="flex gap-4 items-center">
          <div className="w-20 h-[2px] bg-lightTeal"></div>
          <h2 className="text-4xl font-bold text-center">
            <span className="text-teal-700 dark:text-lightTeal">What</span> We
            Do
          </h2>
          <div className="w-20 h-[2px] bg-lightTeal"></div>
        </div>
      </div>
      <p className="max-w-2xl md:text-lg text-center text-gray-700 dark:text-gray-200">
        We specialize in helping small businesses create custom websites at
        affordable rates. Our code is hand written to optimize performance,
        which increases traffic and revenue for your business.
      </p>
      <div className="lg:mt-6 grid grid-cols-1 xl:grid-cols-2 w-full lg:max-w-[100rem] p-4 gap-8 lg:gap-0">
        <div className="w-full flex justify-center items-center">
          <Image
            src="/images/idea-image.webp"
            width={500}
            height={500}
            alt="picture of a lightbulb"
            className="xl:w-5/6"
          />
        </div>
        <div className="w-full flex flex-col justify-center gap-6 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border">
          <h3 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
            <span className="text-lightTeal">$0</span> Down,{" "}
            <span className="text-lightTeal">$50</span> Per Month, <br /> 6
            Month Minimum Contract
          </h3>
          <p className="text-gray-700 dark:text-gray-200">
            We understand that most small businesses don{"'"}t want to pay
            thousands of dollars for a website. That{"'"}s why we offer an{" "}
            <span className="font-semibold">affordable solution</span> that will
            help you grow your business.
          </p>
          <p className="text-gray-700 dark:text-gray-200">
            For $50 a month, you will get a standard 5 page website, plus all of
            the following:
          </p>
          <div className="my-8 w-full pl-4 grid sm:grid-cols-2 gap-2 gap-y-12">
            <div className="flex gap-2">
              <div className="check-box relative p-4">
                <p className="text-xl font-bold text-gray-700 dark:text-gray-200">
                  Unlimited Edits
                </p>
                <p className="mt-1 text-gray-700 dark:text-gray-200">
                  Make any changes you need at any time, and we'll handle it for
                  you.
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="check-box relative p-4">
                <p className="text-xl font-bold text-gray-700 dark:text-gray-200">
                  Design & Development
                </p>
                <p className="mt-1 text-gray-700 dark:text-gray-200">
                  Over 40 hours of design, development and testing to ensure
                  your website is perfect.
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="check-box relative p-4">
                <p className="text-xl font-bold text-gray-700 dark:text-gray-200">
                  24/7 Support
                </p>
                <p className="mt-1 text-gray-700 dark:text-gray-200">
                  Call anytime and speak with a real person who can help you
                  with any questions or concerns.
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="check-box relative p-4">
                <p className="text-xl font-bold text-gray-700 dark:text-gray-200">
                  All Inclusive Service
                </p>
                <p className="mt-1 text-gray-700 dark:text-gray-200">
                  Hosting and maintenance fees are included in the monthly
                  pricing.
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="check-box relative p-4">
                <p className="text-xl font-bold text-gray-700 dark:text-gray-200">
                  100 Google SEO Score
                </p>
                <p className="mt-1 text-gray-700 dark:text-gray-200">
                  We help boost the search ranking of your website with a
                  perfect 100 on Google SEO Score.
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="check-box relative p-4">
                <p className="text-xl font-bold text-gray-700 dark:text-gray-200">
                  Google Analytics
                </p>
                <p className="mt-1 text-gray-700 dark:text-gray-200">
                  We can implement Google Analytics to track your website and
                  see where traffic is coming from.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatWeDoSection
