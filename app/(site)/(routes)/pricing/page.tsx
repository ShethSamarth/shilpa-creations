import { groq } from "next-sanity"

import Banner from "@/components/banner"
import { client } from "@/sanity/lib/client"

import TopCard from "./components/top-card"
import PriceScroll from "./components/price-scroll"

export const revalidate = 200

const PricingPage = async () => {
  const aboutQuery = groq`*[_type == "about"][0]`
  const about: About = await client.fetch(aboutQuery)

  const pricingQuery = groq`*[_type == "pricing"] | order(_createdAt asc)`
  const pricing: Pricing[] = await client.fetch(pricingQuery)

  return (
    <div className="bg-[#F2F2F2]">
      <Banner page="pricing" />
      <section className="py-10 mx-10 md:mx-auto max-w-5xl">
        <TopCard about={about} />
      </section>
      <section className="max-w-5xl mx-10 md:mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 pb-10">
        {pricing.map((list, i) => (
          <PriceScroll list={list} key={i} />
        ))}
      </section>
    </div>
  )
}

export default PricingPage
