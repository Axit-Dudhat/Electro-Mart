import React from 'react'
import { Truck, Headphones, Shield } from 'lucide-react'
import  "../styles/service.css"


const ServicesSection = () => {
  const services = [
    {
      id: 1,
      icon: <Truck size={40} />,
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders"
    },
    {
      id: 2,
      icon: <Headphones size={40} />,
      title: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support"
    },
    {
      id: 3,
      icon: <Shield size={40} />,
      title: "MONEY BACK GUARANTEE",
      description: "We return money within 30 days"
    }
  ]

  return (
    <section className="services-section">
      <div className="container">
        <div className="services-grid">
          {services.map(service => (
            //items name and icons
           <div className="service-item">
            <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section> 
  )
}

export default ServicesSection
