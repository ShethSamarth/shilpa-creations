import {
  ArrowRight,
  Facebook,
  Instagram,
  Mail,
  Phone,
  Twitter,
} from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"

const Footer = () => {
  const date = new Date()

  return (
    <footer className="bg-[#2d2d2d] text-white">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col sm:flex-row p-5">
          <div className="mx-5 space-y-2">
            <p className="flex mb-3">
              <Phone className="h-5 w-5 mr-2" /> Call Us :{" "}
            </p>
            <Link
              href="tel:07946894584"
              target="_blank"
              className="hover:underline"
            >
              +4407946894584
            </Link>
          </div>
          <div className="mx-5 mt-5 sm:mt-0">
            <p className="flex mb-3">
              <Mail className="h-5 w-5 mr-2" /> Mail Us :{" "}
            </p>
            <Link
              href="mailto:manishilpa@hotmail.co.uk"
              target="_blank"
              className="hover:underline"
            >
              manishilpa@hotmail.co.uk
            </Link>
          </div>
        </div>
        <Link href="/contact" className="mx-10 mb-5 md:mb-0">
          <Button variant="secondary">
            Contact Form <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </Link>
      </div>
      <div className="bg-[#242424] flex flex-col md:flex-row justify-between items-center px-10 pt-3 pb-12 md:pb-3">
        <p className="text-sm text-center md:text-left">
          © {date.getFullYear()} Shilpa Creations. All Rights Reserved.
        </p>
        <div className="flex space-x-3 mx-auto md:mx-0 my-2 md:my-2">
          <Link href="https://www.instagram.com/" target="_blank">
            <Instagram className="h-5 w-5" />
          </Link>
          <Link href="https://www.facebook.com/" target="_blank">
            <Facebook className="h-5 w-5" />
          </Link>
          <Link href="https://twitter.com/" target="_blank">
            <Twitter className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
