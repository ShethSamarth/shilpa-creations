import { MapPin } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

interface ServiceAreasProps {
  about: About
}

const ServiceAreas = ({ about }: ServiceAreasProps) => {
  return (
    <section>
      <h2 className="text-center font-extrabold text-4xl md:text-5xl uppercase pt-3 pb-10">
        {about.serviceAreasTitle}
      </h2>
      <p className="max-w-2xl mx-5 md:mx-auto text-center font-medium text-sm md:text-base">
        {about.serviceAreasBody}
      </p>

      <div className="py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-5xl mx-5 md:mx-10 lg:mx-auto">
        {about.serviceAreas.map((location, i) => (
          <Card key={i}>
            <CardContent className="flex flex-col justify-center items-center space-y-4">
              <MapPin className="h-10 w-10 text-red-600 mt-8" />
              <p className="font-semibold">{location}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default ServiceAreas
