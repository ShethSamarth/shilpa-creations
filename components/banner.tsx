import Link from "next/link"

const Banner = ({ page }: { page: string }) => {
  return (
    <div className="bg-img h-56 md:h-64 relative">
      <div className="absolute w-full h-56 md:h-64 text-white">
        <h1 className="text-center text-3xl md:text-4xl font-bold mt-20 capitalize">
          {page}
        </h1>
        <p className="text-center text-sm mt-5">
          <Link href="/" className="hover:underline">
            home
          </Link>{" "}
          / {page}
        </p>
      </div>
    </div>
  )
}

export default Banner
