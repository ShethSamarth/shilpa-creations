import { groq } from "next-sanity"

import { client } from "@/sanity/lib/client"

import About from "./components/about"
import Gallery from "./components/gallery"
import Caraousel from "./components/caraousel"
import ServiceAreas from "./components/service-areas"

export const revalidate = 200

const HomePage = async () => {
  const aboutQuery = groq`*[_type == "about"][0]`
  const about: About = await client.fetch(aboutQuery)

  const sliderQuery = groq`*[_type == "slider"] | order(_createdAt asc)`
  const sliders: Slider[] = await client.fetch(sliderQuery)

  const galleryQuery = groq`*[_type == "gallery"] [0...3] { ..., "imageUrl": image.asset->url} | order(_createdAt asc)`
  const gallery: Gallery[] = await client.fetch(galleryQuery)

  return (
    <div className="bg-[#F2F2F2]">
      <Caraousel sliders={sliders} />
      <About about={about} />
      <ServiceAreas about={about} />
      <Gallery gallery={gallery} />
    </div>
  )
}

export default HomePage
