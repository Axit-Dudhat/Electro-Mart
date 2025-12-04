import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Trash2, Edit2 } from 'lucide-react';
import './productinput.css';


function Productinput() {
  const [products, setProducts] = useState([]); 
  const [editingId, setEditingId] = useState(null);
  const adminData = JSON.parse(localStorage.getItem("admin"))
  const adminId = adminData._id;
  
  const [formData, setFormData] = useState({
  name: '',
  price: '',
  originalPrice: '',
  discount: '',
  imageUrl: '',
  category: '',
  type: '',
  user: adminId||''
  });
  
  // Fetch all products from backend
  const fetchProducts = async () => {
  const res = await axios.get(`http://localhost:5000/products/${adminId}`);
  setProducts(res.data);
};
  
  useEffect(() => {
    fetchProducts();
  }, []);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (editingId) {
      await axios.put(`http://localhost:5000/products/${editingId}`, formData);
      setEditingId(null);
    } else {
      await axios.post('http://localhost:5000/products', formData);
    }

    setFormData({
      name: '',
      price: '',
      originalPrice: '',
      discount: '',
      imageUrl: '',
      category:'',
      type:'',
      user: adminId ||''
    });

    fetchProducts();
  };

  const handleEdit = (product) => {
    setEditingId(product._id);
    setFormData({
  name: product.name,
  price: product.price,
  originalPrice: product.originalPrice,
  discount: product.discount,
  imageUrl: product.imageUrl,
  category: product.category,
  type: product.type,
  user: adminId||''
});
  };
  
  const handleDelete = async (id) => {
    const confirmDelete =window.confirm('Are You Sure?')
    if (!confirmDelete) return;
    await axios.delete(`http://localhost:5000/products/${id}`);
    fetchProducts();
  };
  return (
    <div className="productData">
      <br />
      <div className="container">
        <div className="form-section">
          <form onSubmit={handleSubmit} className="product-form" >
            <div className="form-grid">
              <div className="form-group">
                <label>Product Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Product Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  />
              </div>


              <div className="form-group">
                <label htmlFor="originalPrice">Original Price</label>
                <input
                  id="originalPrice"
                  name="originalPrice"
                  type="text"
                  placeholder="Original Price"
                  value={formData.originalPrice}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="discount">Discount (%)</label>
                <input
                  id="discount"
                  name="discount"
                  type="text"
                  placeholder="Discount %"
                  value={formData.discount}//discountcounter()
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="price">Current Price</label>
                <input
                  id="price"
                  name="price"
                  type="text"
                  placeholder="Current Price"
                  value={formData.price=Math.round(formData.originalPrice-((formData.originalPrice*formData.discount)/100))}
                  onChange={handleInputChange}
                  required
                  disabled
                />
              </div>
              <div className="form-group">
                    <label htmlFor="categroy">category</label>
                      <select id="category" name="category" value={formData.category} onChange={handleInputChange} required>
                          <option value="">Select Category</option>
                          <option value="Phone">Phone</option>
                          <option value="Laptop">Laptop</option>
                          <option value="SmartWatch">SmartWatch</option>
                          <option value="Camera">Camera</option>
                          <option value="HeadPhones">HeadPhones</option>
                    </select>
              </div>
              <div className="form-group">
                <label htmlFor="type">Type (optional)</label>
                   <select id="types" name="type" value={formData.type} onChange={handleInputChange} >
                      <option value="">Select type</option>
                      <option value="BestSeller">BestSeller</option>
                      <option value="new">new</option>
                </select>
              </div>


              <div className="form-group full-width">
                <label htmlFor="imageUrl">Image URL</label>
                <input
                  id="imageUrl"
                  name="imageUrl"
                  type="url"
                  placeholder="https://example.com/image.jpg"
                  value={formData.imageUrl}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-actions">
              <button type="submit" className="submit-btn">
                {editingId ? 'Update Product' : 'Add Product'}
              </button>
            </div>
          </form>
        </div>

        <div className="table-section">
          <div className="table-container">
            <table className="products-table">
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Current Price</th>
                  <th>Original Price</th>
                  <th>Discount</th>
                  <th>category</th>
                  <th>types</th>
                  <th>Image</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product._id}>
                    <td className="product-name">{product.name}</td>
                    <td className="price">₹{product.price}</td>
                    <td className="original-price">₹{product.originalPrice}</td>
                    <td className="discount">{product.discount}%</td>
                    <td className='category'>{product.category}</td>
                    <td className='category'>{product.type}</td>
                    <td className="image-url">
                      <img src={product.imageUrl} alt="" />
                    </td>
                    <td className="actions">
                      <button onClick={() => handleEdit(product)} className="edit-btn">
                        <Edit2 size={16} />
                      </button>
                      <button onClick={() => handleDelete(product._id)} className="delete-btn">
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <br /><br />
    </div>

  );
}

export default Productinput;
