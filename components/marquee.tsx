import { Phone } from "lucide-react"
import Link from "next/link"

const Marquee = () => {
  return (
    <div className="bg-[#3b5d50] text-white flex py-2 text-sm items-center justify-center md:absolute w-screen md:top-0 md:bottom-auto bottom-0 top-auto fixed space-x-2 z-10">
      <Phone className="h-4 w-4 mr-2" />
      Enquiries :
      <Link
        href="tel:+4407946894584"
        target="_blank"
        className="hover:underline"
      >
        +4407946894584
      </Link>
    </div>
  )
}

export default Marquee
