import Link from "next/link"
import { Mail, Phone } from "lucide-react"

import Banner from "@/components/banner"

import Form from "./components/form"

export const revalidate = 200

const ContactPage = () => {
  return (
    <div className="bg-[#F2F2F2]">
      <Banner page="contact" />
      <div className="py-10 flex flex-col md:flex-row justify-between items-center max-w-4xl mx-10 md:mx-auto">
        <Form />
        <aside>
          <h1 className="text-3xl font-bold tracking-tight pb-5 pt-5 md:pt-0">
            Contact Details
          </h1>
          <h4 className="pt-3 font-medium">Phone :</h4>
          <p className="flex items-center">
            <Phone className="h-5 w-5 mr-2" color="#3b5d50" />{" "}
            <Link
              href="tel:+4407946894584"
              target="_blank"
              className="hover:underline"
            >
              +4407946894584
            </Link>
          </p>
          <h4 className="pt-3 font-medium">Email :</h4>
          <p className="flex items-center">
            <Mail className="h-5 w-5 mr-2" color="#3b5d50" />{" "}
            <Link
              href="mailto:manishilpa@hotmail.co.uk"
              target="_blank"
              className="hover:underline"
            >
              manishilpa@hotmail.co.uk
            </Link>
          </p>
        </aside>
      </div>
    </div>
  )
}

export default ContactPage
