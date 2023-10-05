interface Base {
  _createdAt: string
  _id: string
  _rev: string
  _type: string
  _updatedAt: string
}

interface Reference {
  _ref: string
  _type: "reference"
}

interface Image {
  _type: "image"
  alt: string
  asset: Reference
}

interface About extends Base {
  aboutTitle: string
  mainImage: Image
  aboutBody: string[]
  serviceAreasTitle: string
  serviceAreasBody: string
  serviceAreas: string[]
  pricingBody: string[]
}

interface Gallery extends Base {
  title: string
  image: Image
  imageUrl: string
}

interface Service extends Base {
  title: string
  mainImage: Image
  body: string
}

interface Slider extends Base {
  title: string
  image: Image
}

interface Pricing extends Base {
  title: string
  prices: string[]
}
