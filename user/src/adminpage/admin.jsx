import React from 'react'
import { Outlet } from 'react-router-dom'
import { AdminHeader } from './adminheader'

function Admin() {
  return (
    <>
      <AdminHeader />
      <main className="admin-main">
        <Outlet /> {/* This will render nested admin pages */}
      </main>
        
    </>
  )
}

export default Admin
