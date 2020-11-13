import React, { useEffect } from 'react';
import data from "../../data.json"
import "./main.css"

// const Content = () => {
//     const [products, setProducts] = useState(data.products)
//     const [size, setSize] = useState("")
//     const [sort, setSort] = useState("")
//   }

const Main = () => {

  
    return (
        <div className="content">
            <div className="main">
               {data.products.map((product) => {
                   return <div key={product._id}>
                       <div className="product">
                           <div className="background-img-wrapper">

                           <div className="background-img"  style={{
                                            backgroundImage: `url(${product.image})`
                                        }} ></div>
                           </div>
                           {/* <img src={product.image} alt={product.title}/> */}
                                 <a href="/">{product.title}</a>
                                 <div className="product-detail">
                                    <div className="product-price">{"$" + Number(product.price.toFixed(1)).toLocaleString()}</div>
                                    <button className="primaryBtn">Add to Cart</button>
                                 </div>
                             
                       </div>
                   </div>
               })}
            </div>
            <div className="sidebar">Cart Items</div>
        </div>
    );
};

export default Main;