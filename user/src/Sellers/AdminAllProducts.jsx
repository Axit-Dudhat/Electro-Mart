import React, { useState,useEffect} from "react";
import axios from 'axios'

function AdminAllProducts() {
    const[products,setProducts]=useState([])
    const adminData = JSON.parse(localStorage.getItem("admin"))
  const adminId = adminData._id;
    const fetchProducts = async () => {
         const res = await axios.get(`http://localhost:5000/products/${adminId}`);
        setProducts(res.data);
    };

    useEffect(() => {
        fetchProducts();
      }, []);


    return(
    <div style={style.div}>
        <div className="products-grid">
        
      {products.map((product) => (
        <div className="product-card" key={product._id}>
          <div className="product-info">
            <div className="badges-container">
              {product.discount && (
                <span className="discount-badge">-{product.discount}%</span>
              )}
              {product.type && <span className="new-badge">{product.type}</span>}
            </div>

            <div className="product-image">
              <img src={product.imageUrl} alt={product.name} />
            </div>

            <h3 className="product-name">{product.name}</h3>

            <div className="price-container">
              <span className="current-price">₹{product.price}</span>
              {product.originalPrice && (
                <span className="original-price">₹{product.originalPrice}</span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
    )
}
const style={
    div:{
        marginTop:"50px",
        marginLeft:"10%",
        marginRight:"10%",
        marginBottom:"50px",    
    }
}

export default AdminAllProducts
