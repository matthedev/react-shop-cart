import React, { useState } from "react";
import Main from "../../Components/Main/Main";
import Filter from "../../Components/Main/Filter";
import data from "../../data.json";

const Shop = () => {
  const [products, setProducts] = useState(data.products);

  const onSizeChange = (size) => {
    const filteredProducts = data.products.filter((product) =>
      product.availableSizes.includes(size)
    );
    setProducts(filteredProducts);
  };

  const onOrderChange = (order) => {
    let filteredProducts;
    if (order === "Highest") {
      filteredProducts = [...data.products].sort((a, b) => b.price - a.price);
    } else if (order === "Lowest") {
      filteredProducts = [...data.products].sort((a, b) => a.price - b.price);
    } else {
      filteredProducts = data.products;
    }
    setProducts(filteredProducts);
  };

  return (
    <div>
      <Filter sizeChange={onSizeChange} orderChange={onOrderChange} />
      <Main products={products} />
    </div>
  );
};

export default Shop;
