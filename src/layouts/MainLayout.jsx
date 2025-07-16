import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Header/Navbar'

function MainLayout() {
  return (
    <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
    </div>
  )
}

export default MainLayout