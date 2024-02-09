import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Marquee from "@/components/marquee"

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Marquee />
      <Navbar />
      {children}
      <Footer />
    </main>
  )
}

export default MainLayout
