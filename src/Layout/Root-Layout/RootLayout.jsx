// import Footer from 'daisyui/components/footer'
// import Navbar from 'daisyui/components/navbar'
import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

const RootLayout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar></Navbar>

      <main className='flex-1'>
        <Outlet></Outlet>
      </main>

      <Footer></Footer>
    </div>
  )
}

export default RootLayout
