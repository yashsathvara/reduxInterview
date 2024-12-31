import React from 'react'
import Header from '../Component/Header'
import { Outlet } from 'react-router-dom'

const DashBoard = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default DashBoard
