"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"

import MobileNavbar from "@/components/mobile-navbar"
import { cn } from "@/lib/utils"

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
    <header className="bg-[#f2f2f2] px-10 pt-5 md:pt-14 pb-5 flex justify-between items-center ">
      <Link href="/" className="font-bold text-2xl text-[#99111e]">
        Shilpa Creations
      </Link>
      <nav className="hidden md:flex space-x-8">
        {routes.map((route) => (
          <Link
            href={route.href}
            key={route.label}
            className={cn(
              "hover:text-[#99111E] hover:scale-110 transition ease-in-out",
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
