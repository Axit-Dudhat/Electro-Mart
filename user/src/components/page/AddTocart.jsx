import { useState, useEffect } from 'react';
import './Cart.css';
import axios from 'axios';
import { Link, matchRoutes, useNavigate } from 'react-router-dom';

export default function Cart() {
  const navigate = useNavigate(); 
  const [products, setProducts] = useState([]);
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0); 
  
  const productdata = async () => {
  
      const res = await axios.get('http://localhost:5000/addtocart');
      setProducts(res.data);
  };

  useEffect(() => {
    productdata();
  }, []);

  const handleQuantityChange = async (index, newQuantity) => {
    const parsedQuantity = parseInt(newQuantity);
    if (isNaN(parsedQuantity)) return;

    const updatedProducts = [...products];

    if (parsedQuantity === 0) {
      const idToDelete = updatedProducts[index]._id;
      await axios.delete(`http://localhost:5000/addtocart/${idToDelete}`);
      productdata();
      return;
    }

    updatedProducts[index] = {
      ...updatedProducts[index],
      quantity: parsedQuantity,
    };
    setProducts(updatedProducts);

    await axios.put(`http://localhost:5000/addtocart/${updatedProducts[index]._id}`, {
      quantity: parsedQuantity,
    });
  };

  const applyCoupon = () => {
    if (couponCode.toLowerCase() === 'phone10') {
      setDiscount(0.1);
    } else {
      setDiscount(0);
      alert("Invalid coupon code");
    }
  };

  const calculateSubtotal = (product) => {
    return (product.price || 0) * (product.quantity || 1);
  };

  const subtotal = products.reduce((acc, curr) => acc + calculateSubtotal(curr), 0);
  const discountedTotal = subtotal - Math.round(subtotal * discount);

 

  return (
    <div className="cart-container">
      <div className="cart-content">
        <div className="cart-table-section">
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td className="product-cell">
                    <div className="product-infor-cart">
                      <img src={product.imageUrl || "/placeholder.svg"} alt={product.name} className="products-images-cart" />
                    </div>
                  </td>
                  <td className="product-cell">
                    <span className="product-names">{product.name}</span>
                  </td>
                  <td className="price-cell">₹{product.price}</td>
                  <td className="quantity-cell">
                    <input
                      type="number"
                      min="0"
                      max="5"
                      value={product.quantity}
                      className="quantity-input"
                      onChange={(e) => handleQuantityChange(index, e.target.value)}
                    />
                  </td>
                  <td className="subtotal-cell">₹{calculateSubtotal(product)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="cart-actions">
            <Link to="/"><button className="return-btn">Return To Shop</button></Link>
            <button className="update-btn" onClick={productdata}>Update Cart</button>
          </div>

          <div className="coupon-section">
            <div className="coupon-input-group">
              <input
                type="text"
                placeholder="Coupon Code"
                className="coupon-input"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
              />
              <button className="apply-coupon-btn" onClick={applyCoupon}>Apply Coupon</button>
            </div>
          </div>
        </div>

        <div className="cart-total-section">
          <div className="cart-total">
            <h3>Cart Total</h3>
            <div className="total-row">
              <span>total</span>
              <span>₹{subtotal}</span>
            </div>
            <div className="total-row">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            {discount > 0 && (
              <div className="total-row">
                <span>Coupon Discount</span>
                <span>-₹{Math.round(subtotal * discount)}</span>
              </div>
            )}
            <div className="total-row total-final">
              <span>Total:</span>
              <span>₹{discountedTotal}</span>
            </div>
            <button className="checkout-btn">Proceed to checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}
