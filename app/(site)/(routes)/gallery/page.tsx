import { groq } from "next-sanity"

import Banner from "@/components/banner"
import { client } from "@/sanity/lib/client"

import { Gallery } from "@/components/gallery"

export const revalidate = 200

const GalleryPage = async () => {
  const galleryQuery = groq`*[_type == "gallery"] { _id, "imageUrl": image.asset->url} | order(_createdAt asc)`
  const gallery: Gallery[] = await client.fetch(galleryQuery)

  const images = gallery.map((item) => {
    return { src: item.imageUrl }
  })

  return (
    <div className="bg-[#F2F2F2]">
      <Banner page="gallery" />
      <Gallery images={images} />
    </div>
  )
}

export default GalleryPage
