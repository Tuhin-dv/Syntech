import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Header/Navbar'
import Footer from '../components/Footer'
import ScrollProvider from '../components/ScrollProvider'

function MainLayout() {
  return (
    <>
      <div>
        <ScrollProvider>
          <div className='secondary-color p-3'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
          </div>
        </ScrollProvider>
      </div>
    </>
  )
}

export default MainLayout