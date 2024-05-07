import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"

interface PriceScrollProps {
  list: Pricing
}

const PriceScroll = ({ list }: PriceScrollProps) => {
  return (
    <ScrollArea className="rounded-md border bg-white">
      <div className="p-4">
        <h4 className="mb-4 text-lg font-semibold text-center">{list.title}</h4>
        {list.prices.map((item) => (
          <div key={item}>
            <div className="text-sm text-center">{item}</div>
            <Separator className="my-2" />
          </div>
        ))}
        <Link href="/contact">
          <Button className="w-full">Enquire Now</Button>
        </Link>
      </div>
    </ScrollArea>
  )
}

export default PriceScroll
