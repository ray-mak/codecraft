import Footer from "@/components/Footer"
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import Link from "next/link"

const ServicesPage = () => {
  return (
    <div>
      <div className="flex flex-col">
        <div className="flex flex-col items-center justify-center">
          <div className="banner text-white flex items-center justify-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Our Services
            </h1>
          </div>
          <div className=" w-full md:w-5/6 lg:w-3/4 lg:max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 p-4 md:p-0 my-16">
            <div className="flex items-center justify-center">
              <Image
                src="/images/custom-dev.webp"
                width={500}
                height={500}
                alt="search engine illustration"
              />
            </div>
            <div className="flex flex-col gap-6 justify-center">
              <h2 className="text-3xl font-bold">
                Fully Custom Web Design & Development
              </h2>
              <p className="text-lg">
                We build custom websites that are tailored to your business
                needs and goals. Every line of code is hand-written without the
                use of page builders like Wix or Wordpress.
              </p>
              <p className="text-lg">
                By hand-writing every line of code, we can trim the fat
                associated with page builders and optimize your website for
                performance and SEO.
              </p>
              <p className="text-lg">
                Simply put, fast and responsive websites rank higher on search
                engines and boost your visibility.
              </p>
            </div>
          </div>
          <div className=" w-full md:w-5/6 lg:w-3/4 lg:max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 p-4 md:p-0 my-16">
            <div className="flex items-center justify-center lg:order-2">
              <Image
                src="/images/seo-illustration.webp"
                width={500}
                height={500}
                alt="custom web development illustration"
              />
            </div>
            <div className="flex flex-col gap-6 justify-center lg:order-1">
              <h2 className="text-3xl font-bold">Search Engine Optimization</h2>
              <p className="text-lg">
                When building your website, we implement all of the latest
                search engine optimization techniques to ensure your website is
                found by your target audience.
              </p>
              <p className="text-lg">
                We follow Google's best practices when implementing these
                techniques, which include:
              </p>
              <div className="text-lg flex flex-col gap-2">
                <div className="flex gap-2 items-center">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{ color: "#32bcfb" }}
                  />
                  <p>Keyword Research and Content Implementation</p>
                </div>
                <div className="flex gap-2 items-center">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{ color: "#32bcfb" }}
                  />
                  <p>On-page Optimization for Fast Load Times</p>
                </div>
                <div className="flex gap-2 items-center">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{ color: "#32bcfb" }}
                  />
                  <p>Mobile Responsiveness for Accessibility</p>
                </div>
                <div className="flex gap-2 items-center">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{ color: "#32bcfb" }}
                  />
                  <p>Meta Tag Optimization for Web Crawlers</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full md:w-5/6 lg:w-3/4 lg:max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 p-4 md:p-0 my-16">
            <div className="flex items-center justify-center">
              <Image
                src="/images/design-team.webp"
                width={500}
                height={500}
                alt="illustration of a web design team"
              />
            </div>
            <div className="flex flex-col gap-6 justify-center">
              <h2 className="text-3xl font-bold">
                Lifetime Updates For Your Website
              </h2>
              <p className="text-lg">
                Google regularly updates its search algorithms and accessibility
                standards over time.
              </p>
              <p className="text-lg">
                That{"’"}s why we include lifetime updates for your website,
                ensuring it always stays up to date and adapts to the latest
                changes, so you never fall behind.
              </p>
              <div className="mt-4">
                <Link
                  href="/contact"
                  className="bg-teal-800 py-2 px-6 text-white hover:bg-teal-700 rounded text-lg font-bold"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default ServicesPage
