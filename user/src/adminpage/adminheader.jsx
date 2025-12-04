import React from 'react'
import UserActions from '../components/UserActions'
import '../styles/Header.css' 
import { Link } from 'react-router-dom'

export const AdminHeader = () => {
  return (
    
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <div className="logo">
            <img src="../../image/logo.png" alt="Electro Mart" />
          </div>
          {Navigation()}
        </div>
        <div className="header-right">
        
        </div>
      </div>
    </header>

  )
}
const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('admin');
  };
// navigation bar 
 const Navigation = () => {
  return (  
     <nav className="navigation">
      <Link to="#" className="nav-link">Home</Link>
      <Link to="/admin/userData" className="nav-link">Signupdata</Link>
      <Link to="/admin/sellerdata" className="nav-link">Sellerdata</Link>
      <Link to="/admin/usercontect" className="nav-link">Contectdata</Link>
        <>
          <Link to="/" className="nav-link logout-btn" onClick={handleLogout}>Logout</Link>
        </>
    </nav>
 
    
  )
}
