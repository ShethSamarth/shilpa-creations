import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Gallery as GalleryLightHouse } from "@/components/gallery"

interface GalleryProps {
  gallery: Gallery[]
}

const Gallery = ({ gallery }: GalleryProps) => {
  const images = gallery.map((item) => {
    return { src: item.imageUrl }
  })

  return (
    <section>
      <h1 className="text-center font-extrabold text-4xl md:text-5xl uppercase pt-3 pb-10">
        Gallery
      </h1>
      <GalleryLightHouse images={images} />
      <div className="flex justify-center pb-10">
        <Link href="/gallery">
          <Button>View All</Button>
        </Link>
      </div>
    </section>
  )
}

export default Gallery
