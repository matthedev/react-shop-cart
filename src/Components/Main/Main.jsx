import React, { useState } from "react";
import "./main.css";
import CardInfo from "../cardInfo/CardInfo";

const Main = ({ products, cardInfo }) => {
  const [showCard, setShowCard] = useState(false);
  const [selectCard, setSelectCard] = useState(null);

  const clickCardHandler = (product) => {
    setSelectCard(product);
    setShowCard(true);
  };

  const turnOffCard = (product) => {
    setShowCard(false);
  };

  return (
    <div className="content">
      <div className="main">
        {products.map((product) => {
          return (
            <div key={product._id} className="parent-container">
              <div
                className="product"
                onClick={() => clickCardHandler(product)}
              >
                <div className="background-img-wrapper">
                  <div
                    className="background-img"
                    style={{
                      backgroundImage: `url(${product.image})`,
                    }}
                  ></div>
                </div>
                <div className="pride-detail-a">
                  <a href="/">{product.title}</a>
                  <div className="product-detail">
                    <div className="product-price">
                      {"$" + Number(product.price.toFixed(1)).toLocaleString()}
                    </div>
                    <button className="primaryBtn">Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <CardInfo product={selectCard} turnOff={turnOffCard} show={showCard} />
      {showCard && (
        <div className="backdrop" onClick={() => setShowCard(false)}></div>
      )}
    </div>
  );
};

export default Main;
