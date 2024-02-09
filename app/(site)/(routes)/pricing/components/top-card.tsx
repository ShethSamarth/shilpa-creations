import { Card, CardContent, CardTitle } from "@/components/ui/card"

interface TopCardProps {
  about: About
}

const TopCard = ({ about }: TopCardProps) => {
  return (
    <Card className="px-5 pt-5">
      <CardTitle className="mx-5">Pricing</CardTitle>
      <CardContent className="space-y-3 mt-3">
        {about.pricingBody.map((item, i) => (
          <p key={i}>{item}</p>
        ))}
      </CardContent>
    </Card>
  )
}

export default TopCard
