import React from 'react'
import UserActions from '../components/UserActions'
import '../styles/Header.css' 
import { Link } from 'react-router-dom'

export const Sellerheader = () => {
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
    // window.location.reload(); 
  };
// navigation bar 
 const Navigation = () => {
  return (  
     <nav className="navigation">
      <Link to="/sellers" className="nav-link">Home</Link>
      <Link to="/sellers/productinput" className="nav-link">Add Products</Link>
      <Link to="/sellers/adminAllProducts" className="nav-link">Products</Link>
      <Link to="/sellers/usercontect" className="nav-link">Contect data</Link>
        <>
          <Link to="/" className="nav-link logout-btn" onClick={handleLogout}>Logout</Link>
        </>
    </nav>
 
    
  )
}
