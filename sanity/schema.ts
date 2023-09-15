import { type SchemaTypeDefinition } from "sanity"

import blockContent from "./schemas/blockContent"
import about from "./schemas/about"
import gallery from "./schemas/gallery"
import pricing from "./schemas/pricing"
import services from "./schemas/services"
import slider from "./schemas/slider"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [about, blockContent, gallery, pricing, services, slider],
}
