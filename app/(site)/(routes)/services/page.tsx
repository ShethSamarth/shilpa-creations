import Image from "next/image"
import { groq } from "next-sanity"

import { cn } from "@/lib/utils"
import urlFor from "@/sanity/lib/urlFor"
import Banner from "@/components/banner"
import { client } from "@/sanity/lib/client"
import { Card, CardContent } from "@/components/ui/card"

export const revalidate = 200

const ServicesPage = async () => {
  const serviceQuery = groq`*[_type == "services"] | order(_createdAt asc)`
  const services: Service[] = await client.fetch(serviceQuery)

  return (
    <div className="bg-[#F2F2F2]">
      <Banner page="services" />
      <section className="max-w-5xl mx-10 lg:mx-auto py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service) => (
          <Card key={service._id}>
            <CardContent className="p-5">
              <Image
                src={urlFor(service.mainImage).url()}
                width={400}
                height={400}
                alt={service.mainImage.alt}
                className={cn(
                  "h-56 w-80 sm:h-60 sm:w-96 object-cover rounded-md mx-auto"
                )}
              />
              <aside>
                <h1 className="text-xl font-semibold text-center pt-5">
                  {service.title}
                </h1>
                <p className="text-sm py-5">{service.body}</p>
              </aside>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  )
}

export default ServicesPage
