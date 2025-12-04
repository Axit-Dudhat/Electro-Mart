import React from 'react'
import { Outlet } from 'react-router-dom'
import { Sellerheader } from './Sellerheader'

function Sellers() {
  return (
    <>
      <Sellerheader />
      <main className="admin-main">
        <Outlet /> {/* This will render nested admin pages */}
      </main>
        
    </>
  )
}

export default Sellers
