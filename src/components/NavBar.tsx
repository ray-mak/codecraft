"use client"
import Image from "next/image"
import Link from "next/link"
import ThemeSwitch from "./ThemeSwitch"
import HamburgerMenu from "./HamburgerMenu"
import { useTheme } from "next-themes"
export function Navbar() {
  const { theme } = useTheme()
  return (
    <nav className="navbar fixed top-0 z-20 flex w-full h-20 p-4 md:p-0 flex items-center justify-center bg-white dark:bg-gray-800 shadow-xl">
      <div className="w-full md:w-5/6 lg:w-3/4 lg:max-w-6xl flex items-center justify-center">
        <Link href="/" className={`text-4xl font-bold `}>
          <Image
            src={
              theme === "dark"
                ? "/images/logodark.svg"
                : "/images/logolight.svg"
            }
            width={180}
            height={60}
            alt="codecraft web design logo"
          />
        </Link>
        <HamburgerMenu />
        <ThemeSwitch />
      </div>
    </nav>
  )
}
