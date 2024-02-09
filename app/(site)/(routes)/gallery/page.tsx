import Link from "next/link"
import Image from "next/image"
import { groq } from "next-sanity"

import Banner from "@/components/banner"
import { client } from "@/sanity/lib/client"

export const revalidate = 200

const GalleryPage = async () => {
  const galleryQuery = groq`*[_type == "gallery"] { _id, "imageUrl": image.asset->url} | order(_createdAt asc)`
  const gallery: Gallery[] = await client.fetch(galleryQuery)

  return (
    <div className="bg-[#F2F2F2]">
      <Banner page="gallery" />
      <section className="py-10 mx-10 md:mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {gallery.map((item) => (
          <Link key={item._id} href={item.imageUrl} target="_blank">
            <Image
              src={item.imageUrl}
              alt="image"
              width={500}
              height={500}
              className="object-contain bg-white h-72 aspect-square hover:scale-110 ease-in-out duration-300"
            />
          </Link>
        ))}
      </section>
    </div>
  )
}

export default GalleryPage
