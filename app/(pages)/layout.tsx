import Header from "@/app/components/header"
import Footer from "@/app/components/footer"

const Layout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <div className="mx-auto px-2 w-full sm:px-6 lg:px-8">
      <Header/>
      {children}
      <Footer/>
    </div>
  )
}

export default Layout