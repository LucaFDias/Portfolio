import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

const Layout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <div
      className="mx-auto px-4 w-full sm:px-6 lg:px-8"
    >
      <div className="flex flex-col h-screen justify-between">
        <Header/>
        {children}
        <Footer/>
      </div>
    </div>
  )
}

export default Layout