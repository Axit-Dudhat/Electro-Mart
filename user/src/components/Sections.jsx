import { Link } from 'react-router-dom'
import React,{ useState,useEffect} from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
import '../styles/Sections.css'

export const BestSellerSection = () => {
  const[products,setProducts]=useState([])
  
  const fetchProducts = async () => {
  try {
    const res = await axios.get('http://localhost:5000/products');
    setProducts(res.data);
  } catch (error) {
    console.error('Failed to fetch products:', error);
  }
};

  
  useEffect(() => {
      fetchProducts();
    }, []);
      const bestSeller=products.filter(
        (product) => product.type?.toLowerCase() === 'bestseller'
      )
  return (

    <section className="best-seller-section">
      <div className="section-header">
        <div className="section-title-container">
          <div className="category-indicator"></div>
          <h2 className="section-title">Best Selling Products</h2>
        </div>
        <Link to="/bestsellers">
        <button className="view-all-btn" > 
        View All
        </button>
        </Link>
      </div>
      <div className="products-grid">
        {bestSeller.slice(0, 4).map(product => (
          <div >
            <ProductCard key={product.id} product={product} />
          </div>
        ))}
      </div>
    </section>
  )
}
// best categories sections 

//just for you Section
export const JustForYouSection = () => {
  const[products,setProducts]=useState([])
  const fetchProducts = async () => {
      const res = await axios.get('http://localhost:5000/products');
      setProducts(res.data);
  };
  useEffect(() => {
      fetchProducts();
    }, []);

    const getRandomProducts = (productList) => {
    const productsdata = [...productList].sort(() => 0.5 - Math.random());
    return productsdata.slice(0, 4);
  };
  const randomProducts = getRandomProducts(products);
  return (
    
    <section className="just-for-you-section">
      <br/>
      <br/>
      <div className="section-header">
        <div className="section-title-container">
          <div className="category-indicator"></div>
          <h2 className="section-title">Just For You</h2>
        </div>  
      </div>
      <div className="products-grid">
        {randomProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {/* <LoginPage/> */}
    </section>
  )
}
