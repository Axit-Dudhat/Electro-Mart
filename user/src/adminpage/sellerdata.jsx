    import React, { useState, useEffect } from 'react';
    import axios from 'axios';
    import { Trash2, Edit2, EarthIcon } from 'lucide-react';
    import './userdata.css';
        
        
const Sellerdata=()=>{

    const [user,userDetails] = useState([]);  
    const [products, setProducts] = useState([]); 
    const fetchProducts = async () => {
    const res = await axios.get(`http://localhost:5000/products/`);
    setProducts(res.data);
    };

    const userData = async () => {
    const res = await axios.get('http://localhost:5000/admin');
      userDetails(res.data);
    };
    useEffect(()=>{
      userData();
      fetchProducts();
    },[]);

    const handleDelete = async (id) => {
    const confirmDelete =window.confirm('Are you sure you want to delete this user and their products?')
    if (!confirmDelete) return;
    const userProducts = products.filter((product) => product.user === id);
    for (let product of userProducts) {
        await axios.delete(`http://localhost:5000/products/${product._id}`);
    }
    await axios.delete(`http://localhost:5000/admin/${id}`);
    userData();
    };
        return(
        <div className='userdata'>
            <div className="container">
                <div className="table-section">
                    <div className="table-container">
                        <table className="user-table">
                        <thead>
                            <tr>
                            <th>Seller_ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {user.map((user) => (
                            <tr key={user._id}>
                                <td className="password">{user._id}</td>
                                <td className="username">{user.name}</td>
                                <td className="email">{user.emailOrPhone}</td>
                                <td className="actions">
                                <button onClick={() => handleDelete(user._id)} className="delete-btn">
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
        </div>
    )}    
    export default Sellerdata