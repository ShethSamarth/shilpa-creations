import Image from "next/image"

import urlFor from "@/sanity/lib/urlFor"

interface AboutProps {
  about: About
}

const About = ({ about }: AboutProps) => {
  return (
    <section className="max-w-7xl mx-auto py-10">
      <h1 className="text-center font-extrabold text-4xl md:text-5xl uppercase pt-3 pb-10">
        About
      </h1>
      <div className="flex flex-col md:flex-row items-center">
        <aside className="order-1 md:order-2 md:w-[50%]">
          <h4 className="text-xl font-semibold pb-5 px-10 md:px-5 text-center md:text-left">
            {about.aboutTitle}
          </h4>
          {about.aboutBody.map((item, i) => (
            <p
              key={i}
              className="text-base font-sans px-5 text-justify md:text-left pb-5"
            >
              {item}
            </p>
          ))}
        </aside>
        <Image
          src={urlFor(about.mainImage).url()}
          alt={about.mainImage.alt}
          className="order-2 md:order-1 h-[500px] object-contain px-5 lg:px-0 py-10 mx-auto"
          width={500}
          height={500}
        />
      </div>
    </section>
  )
}

export default About
