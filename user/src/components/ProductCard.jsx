import '../styles/ProductCard.css'
import {ShoppingCart} from 'lucide-react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProductCard = ({ product }) => {
  const {
    name,
    price,
    originalPrice,
    discount,
    imageUrl,
    rating,
    type,
  } = product

   const navigate = useNavigate();

const handleAddToCart = async () => {
  const res = await axios.get(`http://localhost:5000/addtocart`);
  const cartItems = res.data;
  const alreadyInCart = cartItems.some(item => item._id === product._id);
  if(alreadyInCart){
     navigate('/addtocart');
  }
  const storedUser = localStorage.getItem('user');
  if (storedUser) {
      await axios.post('http://localhost:5000/addtocart', product);
      navigate('/addtocart'); 
  } else {
    alert("Please log in to add items to your cart.");
    navigate('/login'); 
  }
  
};
 const displayRating = rating ?? Math.floor(Math.random() * 5) + 1;
 const ratingno = rating ?? Math.floor(Math.random()*1000) + 1;



  return (
    <div className="product-card">
      {/* Product Info */}
      <div className="product-info">
        {/* Badges */}
        <div className="badges-container">
          {discount && (
            <span className="discount-badge">
              -{discount}%
            </span>
          )}
          {type && (
            <span className="new-badge">
              {type}
            </span>
          )}
        </div>
        <div className='product-image'>
            <img src={imageUrl} alt={name} />
        </div>

        <h3 className="product-name">
          {name}
        </h3>

        {/* Price */}
        <div className="price-container">
          <span className="current-price">
            ₹{price}
          </span>
          {originalPrice && (
            <span className="original-price">
              ₹{originalPrice}
            </span>
          )}
        </div>

      <div>
       <div className="rating-container">
        <div className="stars-container">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`star`}
            >
              {i < displayRating ? '★' : '☆'}
            </span>
          ))}
          ({ratingno})
        </div>
      </div>

</div>

        {/* Add to Cart Button */}
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          <ShoppingCart className="cart-icon" />
          Add To Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard
