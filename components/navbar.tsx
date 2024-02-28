"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import MobileNavbar from "@/components/mobile-navbar"

const routes = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Gallery",
    href: "/gallery",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "Contact",
    href: "/contact",
  },
]

const Navbar = () => {
  const pathname = usePathname()
  return (
    <header className="bg-[#f2f2f2] px-5 md:px-10 pt-5 md:pt-14 pb-5 flex justify-between items-center ">
      <Link href="/">
        <Image
          src="/logo.jpeg"
          width={120}
          height={50}
          alt="Shilpa Creations"
          className="mix-blend-multiply"
        />
      </Link>
      <nav className="hidden md:flex space-x-8">
        {routes.map((route) => (
          <Link
            href={route.href}
            key={route.label}
            className={cn(
              "hover:text-[#3b5d50] hover:scale-110 transition ease-in-out",
              pathname === route.href
                ? "text-black font-semibold"
                : "text-[#696969]"
            )}
          >
            {route.label}
          </Link>
        ))}
      </nav>
      <div className="md:hidden">
        <MobileNavbar routes={routes} />
      </div>
    </header>
  )
}

export default Navbar
