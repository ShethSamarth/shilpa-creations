import Image from "next/image"
import { groq } from "next-sanity"

import { cn } from "@/lib/utils"
import urlFor from "@/sanity/lib/urlFor"
import { client } from "@/sanity/lib/client"

import Banner from "@/components/banner"
import { Card, CardContent } from "@/components/ui/card"

export const revalidate = 200

const ServicesPage = async () => {
  const serviceQuery = groq`*[_type == "services"] | order(_createdAt asc)`
  const services: Service[] = await client.fetch(serviceQuery)

  return (
    <div className="bg-[#F2F2F2]">
      <Banner page="services" />
      <section className="max-w-5xl mx-10 lg:mx-auto space-y-10 py-10">
        {services.map((service, i) => (
          <Card key={service._id}>
            <CardContent className="flex flex-col md:flex-row p-5 items-center">
              <aside
                className={cn(
                  "order-2",
                  i % 2 === 0 ? "md:order-1" : "md:order-2"
                )}
              >
                <h1 className="text-xl font-semibold text-center md:text-left pt-5 md:pt-0">
                  {service.title}
                </h1>
                <p className="text-sm py-5">{service.body}</p>
              </aside>
              <Image
                src={urlFor(service.mainImage).url()}
                width={400}
                height={400}
                alt={service.mainImage.alt}
                className={cn(
                  "h-56 w-80 sm:h-60 sm:w-96 object-cover rounded-md order-1",
                  i % 2 === 0 ? "md:order-2" : "md:order-1 md:mr-10"
                )}
              />
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  )
}

export default ServicesPage
