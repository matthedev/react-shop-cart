import React, {useState} from "react"

import Header from "./Components/Header/Header"
import Main from "./Components/Main/Main"
import Footer from "./Components/Footer/Footer"
import Filter from "./Components/Main/Filter"
import data from "./data.json"

function App() {

  const [products, setProducts] = useState(data.products);
console.log(data.products)  

  const onSizeChange = (size) => {
     const  filteredProducts = data.products.filter(product => product.availableSizes.includes(size))
     setProducts(filteredProducts)
  };



  const onOrderChange = (order) => {
    console.log(typeof(order))
    let filteredProducts;
    if (order === "Highest") {
      filteredProducts = [...data.products].sort((a, b) => b.price - a.price)
    } else if (order === "Lowest" ) {
       filteredProducts = [...data.products].sort((a, b) => a.price - b.price)
    } else {
      filteredProducts = data.products
    }
    setProducts(filteredProducts)
  }  

  

  return (
    <div >
     <Header />
     <Filter sizeChange={onSizeChange} orderChange={onOrderChange}/>
     <Main products={products}/>
     <Footer />
    </div>
  );
}

export default App;
