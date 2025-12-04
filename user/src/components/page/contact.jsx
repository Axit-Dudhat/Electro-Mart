import React, { useState, useEffect } from 'react';
import { Phone, Mail } from "lucide-react";
import axios from 'axios';
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [contect,setcontect] = useState([]);
  const contectdata = async () => {
    const res = await axios.get('http://localhost:5000/contect');
      setFormData(res.data);
  };

    useEffect(()=>{
      contectdata()
    },[]);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission
    await axios.post('http://localhost:5000/contect', formData); 
    alert("Message Sucefully send");
    setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
  };

  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        <div className="contact-grid">
          {/* Contact Information */}
          <div className="contact-info-section">
            {/* Call To Us */}
            <div className="contact-card">
              <div className="contact-card-content">
                <div className="contact-header">
                  <div className="contact-icon">
                    <Phone />
                  </div>
                  <h3 className="contact-title">Call To Us</h3>
                </div>
                <div className="contact-info">
                  <p className="contact-description">
                    We are available 24/7, 7 days a week.
                  </p>
                  <div className="contact-details">
                    <p className="contact-phone">Phone: +8801611112222</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Write To Us */}
            <div className="contact-card">
              <div className="contact-card-content">
                <div className="contact-header">
                  <div className="contact-icon">
                    <Mail />
                  </div>
                  <h3 className="contact-title">Write To Us</h3>
                </div>
                <div className="contact-info">
                  <p className="contact-description">
                    Fill out our form and we will contact you within 24 hours.
                  </p>
                  <div className="contact-details">
                    <p className="contact-email">Emails: Electromart@exclusive.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-section">
            <div className="contact-card">
              <div className="contact-card-content">
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="contact-input"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email *"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="contact-input"
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Your Phone *"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="contact-input"
                    />
                  </div>

                  <div>
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={8}
                      className="contact-textarea"
                    />
                  </div>

                  <div className="form-submit-container">
                    <button
                      type="submit"
                      className="contact-submit-btn"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
