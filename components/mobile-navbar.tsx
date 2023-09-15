"use client"

import { useEffect, useState } from "react"
import { Menu } from "lucide-react"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import Link from "next/link"

interface MobileNavbarProps {
  routes: {
    label: string
    href: string
  }[]
}

const MobileNavbar = ({ routes }: MobileNavbarProps) => {
  const pathname = usePathname()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => setIsMounted(true), [])

  if (!isMounted) return null

  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="p-0">
        <nav className="bg-[#f2f2f2] h-screen flex flex-col pt-20">
          {routes.map((route) => (
            <SheetClose asChild key={route.label}>
              <Link
                href={route.href}
                className={cn(
                  "text-center p-3 border-b hover:text-[#3366CC] hover:scale-110 transition ease-in-out",
                  pathname === route.href
                    ? "text-black font-semibold"
                    : "text-[#696969]"
                )}
              >
                {route.label}
              </Link>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNavbar
