import React from 'react';
import './discount.css';
import { Link } from 'react-router-dom'
import { Smartphone,ArrowRight} from 'lucide-react'

const IPhonePromoSection = () => {
  return (
    <section className="iphone-promo-section">
      <div className="promo-container">
        <div className="content-wrapper">
          <div className="text-content">
            <div className="brand-header">
              <div className="apple-logo">
                <svg viewBox="0 0 24 24" fill="currentColor" className="apple-icon">
                    <Smartphone/>
                </svg>
              </div>
              <span className="product-line">Smartphone</span>
            </div>
            
            <h1 className="main-heading">
              Up to 10%<br />
              off Voucher
            </h1>
            <h5 className="coupan-code">
              Coupan Code : <span className='coupan' >PHONE10</span> 
            </h5>
            
            <button className="shop-now-btn">
              <Link to="/phone">Shop Now</Link >
              <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <ArrowRight/>
              </svg>
            </button>
          </div>
          
          <div className="phone-image">
            <img 
              src='../../image/image.png' 
              alt="iPhone 14 in Pink"
              className="iphone-img"
            />
          </div>
        </div>
        
        <div className="carousel-dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    </section>
  );
};

export default IPhonePromoSection;
