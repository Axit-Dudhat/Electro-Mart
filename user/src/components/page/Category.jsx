// import React from "react";
// import axios from 'axios'
// import ProductCard from "../ProductCard";

// const Allcategory=()=> {
//     const [products,setProducts]=useState([])

//     const fetchProducts = async () => {
//         const res = await axios.get(`http://localhost:5000/products/${category}`);
//         setProducts(res.data);
//     };

//     // useEffect(() => {
//     //     fetchProducts();
//     //   }, []);

//       return(
//        <div style={style.div}>
//         <div className="products-grid">
//             {setProducts}
//          </div>
//     </div>
//       )
// }
// // const category[]=await axios.put(`http://localhost:5000/products/${category}`)
// // function data(){
// //     if (category="Phone") {
// //         products.map(product => (
// //                 <ProductCard  product={product} />
// //             ))
// //     }
// // }
// export default Allcategory