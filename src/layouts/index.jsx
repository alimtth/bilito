import Footer from '@/components/Footer'
import HeaderTabs from '@/components/NavBar/HeaderTabs'

function BaseLayout({children}) {
  return (
    <>
      <HeaderTabs />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default BaseLayout
