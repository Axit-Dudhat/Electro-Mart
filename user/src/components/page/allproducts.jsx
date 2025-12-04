import React, { useState,useEffect} from "react";
import axios from 'axios'
import ProductCard from "../ProductCard";

function AllProducts() {
    const[products,setProducts]=useState([])

    const fetchProducts = async () => {
        const res = await axios.get('http://localhost:5000/products');
        setProducts(res.data);
    };

    useEffect(() => {
        fetchProducts();
      }, []);


    return(
    <div style={style.div}>
        <div className="products-grid">
        {products.map(product => (
            <ProductCard  product={product} />
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

export default AllProducts
