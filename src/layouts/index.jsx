import Footer from '@/components/Footer'
import HeaderTabs from '@/components/NavBar/HeaderTabs'
import {Outlet} from 'react-router-dom'

function BaseLayout() {
  return (
    <>
      <HeaderTabs />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default BaseLayout
