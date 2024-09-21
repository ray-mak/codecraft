import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <div className="flex items-center justify-center bg-indigo-950">
      <div className="relative  md:w-5/6 lg:w-3/4 lg:max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 px-4 md:px-0 py-20 text-gray-200 gap-16">
        <div>
          <Image
            src="/images/logodark.svg"
            width={220}
            height={60}
            alt="CodeCraft Web Design logo"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold">Contact</h3>
          <table className="border-separate border-spacing-y-2">
            <tbody>
              <tr>
                <td>Phone:</td>
                <td className="pl-4">951-990-3113</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td className="pl-4">ray@codecraftwebdesign.com</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="md:ml-12 flex flex-col gap-2">
          <h3 className="font-bold text-xl">Navigation</h3>
          <div>
            <Link href="/" className="link">
              Home
            </Link>
          </div>
          <div>
            <Link href="/services" className="link">
              Services
            </Link>
          </div>
          <div>
            <Link href="/about" className="link">
              About
            </Link>
          </div>
          <div>
            <Link href="/contact" className="link">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
