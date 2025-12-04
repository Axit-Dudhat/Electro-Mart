import React from 'react'
import UserActions from './UserActions'
import '../styles/Header.css' 
import { Link } from 'react-router-dom'
import axios from 'axios';




 export const Header=() => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <div className="logo">
            <img src="../../image/logo.png" alt="Electro Mart" />
          </div>
          {Navigation()}
        </div>
        {SearchBar()}
        <div className="header-right">
          <UserActions />
        </div>
      </div>
    </header>
  )
}
export const TopHeader = () => {
  return (
    <header className="top-header">
      <div className="top-header-content">
        <div className="promo-section">
          <span className="promo-text">
           Sale For All Smartphones And Free Express Delivery - OFF 50%!
          </span>
          <a href="#" className="shop-now-link">ShopNow</a>
        </div>
      </div>
    </header>
  )
}
// navigation bar 
const Navigation = () => {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedAdmin = localStorage.getItem('admin');
    if (storedUser || storedAdmin) {
      setUser(JSON.parse(storedUser));
    } else if (storedAdmin) {
      setUser(JSON.parse(storedAdmin));
    }
  }, []);

  const handleLogout = async () => {
    localStorage.removeItem('user');
    localStorage.removeItem('admin');
    window.location.reload(); // Refresh to trigger header re-render
  };

  return (
    <nav className="navigation">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/AllProducts" className="nav-link">Products</Link>
      <Link to="/contact" className="nav-link">Contact</Link>
      <Link to="/about" className="nav-link">About</Link>

      {user ? (
        <>
          <span className="nav-link username">{user.name || 'User'}</span>
          <button className="nav-link logout-btn" onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login" className="nav-link">Login</Link>
          <Link to="/signup" className="nav-link">Sign Up</Link>
        </>
      )}
    </nav>
  );
};


        
//search bar 
const SearchBar = () => {
  return (
    <div className="search-bar">
      <input 
        type="text" 
        placeholder="What are you looking for?" 
        className="search-input"
      />
      <button className="search-button">
        <img 
          src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-24/wrAWBJgnUv.svg" 
          alt="Search" 
          className="search-icon"
        />
      </button>
    </div>
  )
}