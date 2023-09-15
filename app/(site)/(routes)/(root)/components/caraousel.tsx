"use client"

import urlFor from "@/sanity/lib/urlFor"
import Image from "next/image"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

interface CaraouselProps {
  sliders: Slider[]
}

const Caraousel = ({ sliders }: CaraouselProps) => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showStatus={false}
      showThumbs={false}
      interval={4000}
      showArrows={true}
    >
      {sliders.map((slider) => (
        <Image
          key={slider._id}
          src={urlFor(slider.image).url()}
          alt={slider.image.alt}
          className="h-[35vh] sm:h-[45vh] md:h-[55vh] lg:h-[75vh] object-cover"
          height={600}
          width={1500}
        />
      ))}
    </Carousel>
  )
}

export default Caraousel
