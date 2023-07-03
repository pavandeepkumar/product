import React, { useState, useEffect } from "react";
import {Rate} from "antd";
import { Card } from "antd";
import { useParams } from "react-router-dom";
const API = "https://dummyjson.com/products/";

const ProductDetails = ( ) => {
  const { id } = useParams();
  console.log("my id is pavandeep kumar", id);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`${API}${id}`)
      .then((res) => res.json())
      .then((result) => {
        setProduct(result); // Assuming the API returns the product details as an object
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
        setProduct(null); // Set product to null in case of an error
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>; // Display a loading message until the product data is fetched
  }

  return (
   <Card style={{display:"flex" ,boxSizing:"border-box",width:300,}}>
     <div>
     <Card>
     <img
        src={product.thumbnail}
        alt={`Image ${product.id}`}
        style={{ maxWidth: "150px" }}
      />
     </Card>
     <h4>Title : <b>{product.title}</b></h4>
     <p>Price : <strong> &#8377; {product.price}</strong> </p>
     <p>Brand : <b>{product.brand}</b></p>
     <p>Rating : <Rate allowHalf defaultValue={product.rating} /></p>
     
     <p>Description : <b>{product.description}</b></p>
     <p>DiscountPercentage : <b> {product.discountPercentage}%</b></p>
     <p>Stock : <b>{product.stock}</b></p>
     <p>category : <b>{product.category}</b></p>
     
     
      {/* <h1>{product.title}</h1> */}
      
      
     <div >
     <button style={{padding:10,marginRight:5,color:"white",backgroundColor:"blue",cursor:"pointer",borderRadius:7}}>Buy Now</button>
      <button style={{padding:10,marginRight:5,color:"black",backgroundColor:"yellow",cursor:"pointer",borderRadius:7}}>Add to Card</button>
     </div>
      

      {/* Add other product details as needed */}
    </div>
   </Card>
  );
};

export default ProductDetails;

// ProductDetails.js

// import React, { useEffect, useState } from "react";
// import { Card, Image, Rate } from "antd";
// import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";

// const ProductDetails = ({products}) => {
//   const { productId } = useParams();
//   const [product, setProduct] = useState({});

//   useEffect(() => {
//     fetchProduct();
//   }, []);

//   const fetchProduct = async () => {
//     try {
//       const response = await fetch(`https://dummyjson.com/products/${productId}`);
//       const data = await response.json();
//       setProduct(data); // Assuming data is a single product object
//     } catch (error) {
//       console.error("Error fetching product:", error);
//     }
//   };

//   return (
//     <div>
//     <div className="link-container">
//       <Link to="/" className="Link">
//         <button>Home</button>
//       </Link>
//       <Link to="/card" className="Link">
//         <button>Card</button>
//       </Link>
//       <Link to="/productdetails" className="Link">
//         <button>ProductDatails</button>
//       </Link>
//       <h1 className="">Welcome to pavan Store</h1>
//     </div>
//       <Card>
//         <Image
//           src={product.thumbnail}
//           alt={product.title}
//           style={{ objectFit: "cover", height: 250, width: 200 }}
//         />
//         <h4 style={{ fontSize: 20 }}>{product.title}</h4>
//         <p>
//           <b style={{ fontSize: 20 }}>
//             &#8377;{" "}
//             {parseFloat(
//               product.price - (product.price * product.discountPercentage) / 100
//             ).toFixed(2)}
//           </b>
//           <del>
//             <small> &#8377;{product.price}</small>
//           </del>
//           <strong style={{ color: "blue" }}>
//             {" "}
//             {product.discountPercentage}% <b>Off</b>
//           </strong>
//           <p style={{ color: "green", fontWeight: "bold" }}>
//             FREE Delivery{" "}
//             <del style={{ color: "black", fontWeight: "lighter" }}>
//               {" "}
//               &#8377;70
//             </del>
//           </p>
//         </p>
//         <p> {product.description}</p>
//         <Rate allowHalf defaultValue={product.rating} />
//       </Card>
//     </div>
//   );
// };

// export default ProductDetails;
