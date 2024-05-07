"use client"

import Image from "next/image"
import { useState } from "react"
import "yet-another-react-lightbox/styles.css"
import Lightbox from "yet-another-react-lightbox"
import Zoom from "yet-another-react-lightbox/plugins/zoom"

export const Gallery = ({ images }: { images: { src: string }[] }) => {
  const [index, setIndex] = useState(-1)

  return (
    <>
      <section className="py-10 mx-10 md:mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {images.map((item, i) => (
          <Image
            key={i}
            className="object-contain bg-white h-72 aspect-square hover:scale-110 ease-in-out duration-300 cursor-pointer"
            src={item.src}
            onClick={() => setIndex(i)}
            alt="image"
            width={500}
            height={500}
          />
        ))}
      </section>

      <Lightbox
        index={index}
        slides={images}
        open={index >= 0}
        plugins={[Zoom]}
        zoom={{ scrollToZoom: true }}
        close={() => setIndex(-1)}
      />
    </>
  )
}
