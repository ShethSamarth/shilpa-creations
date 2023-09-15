import Link from "next/link"
import Image from "next/image"
import urlFor from "@/sanity/lib/urlFor"
import { Button } from "@/components/ui/button"

interface GalleryProps {
  gallery: Gallery[]
}

const Gallery = ({ gallery }: GalleryProps) => {
  return (
    <section>
      <h1 className="text-center font-extrabold text-4xl md:text-5xl uppercase pt-3 pb-10">
        Gallery
      </h1>
      <div className="py-10 mx-10 md:mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {gallery.map((item) => (
          <Link key={item._id} href={urlFor(item.image).url()} target="_blank">
            <Image
              src={urlFor(item.image).url()}
              alt={item.image.alt}
              width={500}
              height={500}
              className="hover:scale-110 ease-in-out duration-300"
            />
          </Link>
        ))}
      </div>
      <div className="flex justify-center pb-10">
        <Link href="/gallery">
          <Button>View All</Button>
        </Link>
      </div>
    </section>
  )
}

export default Gallery
