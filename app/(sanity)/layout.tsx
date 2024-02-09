import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sanity Studio",
  description: "A CMS for Shilpa Creations - Sanity Studio",
}

const SanityLayout = ({ children }: { children: React.ReactNode }) => {
  return <main>{children}</main>
}

export default SanityLayout
