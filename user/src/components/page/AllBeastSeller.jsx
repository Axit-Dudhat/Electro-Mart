import React,{ useState,useEffect} from 'react'
import axios from 'axios'
import ProductCard from '../ProductCard';
import '../../styles/Sections.css'
export const AllBestSellerSection = () => {
  
    const[products,setProducts]=useState([])

    const fetchProducts = async () => {
        const res = await axios.get('http://localhost:5000/products');
        setProducts(res.data);
    };

    useEffect(() => {
        fetchProducts();
      }, []);
      const bestSeller=products.filter(
        (product) => product.type?.toLowerCase() === 'bestseller'
      )
      const style={
        best_seller_container :{
          padding:'100px ',
        }
      }
  return (
  <div className="best-seller-container" style={style.best_seller_container}>
    <section className="best-seller-section" >
      <div className="section-header">
        <div className="section-title-container">
          <div className="category-indicator"></div>
          <h2 className="section-title">Best Selling Products</h2>
        </div>
      </div>
      <div className="products-grid">
        {bestSeller.map(product => (
          <div >
            <ProductCard key={product.id} product={product} />
          </div>
        ))}
      </div>
    </section>
  </div>
  )
}