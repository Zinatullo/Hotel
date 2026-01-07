import { Outlet } from 'react-router-dom'

import Header from '../../widgets/Header'
import Footer from '../../widgets/Footer'
export default function MainLayout() {
  return (
    <>
  <Header/>
    <main>
        <Outlet/>
    </main>
    <Footer/>
    </>
  )
}
