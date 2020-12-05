import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import "./cardinfo.css";
import { GrClose } from "react-icons/gr";

const CardInfo = ({ product, turnOff, show, history }) => {
  const [chosenSize, setChosenSize] = useState("");

  const addToCart = (item) => {
    const existingItems = localStorage.getItem("cartItems");
    const updatedItem =
      item + "-" + chosenSize + "-" + product.price + ":" + product.image;
    let updatedItems;
    if (existingItems) {
      updatedItems = existingItems + "," + updatedItem;
    } else {
      updatedItems = updatedItem;
    }
    localStorage.setItem("cartItems", updatedItems);
    history.push("/orders");
  };

  return (
    <div className={show ? "card-info show" : "card-info"}>
      <span className="close-icon">
        <GrClose onClick={() => turnOff()} />
      </span>
      {product && (
        <>
          {" "}
          <div className="product-image">
            <img src={product.image} alt="img" />
          </div>
          <div className="product-content">
            <h1 className="">{product.title}</h1>
            <div className="product-desc">{product.description}</div>
            <div className="product-size">
              Available Sizes:{" "}
              {product.availableSizes.slice(0, -1).map((size) => {
                return (
                  <div
                    key={size}
                    className={
                      chosenSize === size
                        ? "size-btn size-btn-active"
                        : "size-btn"
                    }
                    onClick={() => setChosenSize(size)}
                  >
                    {size}
                  </div>
                );
              })}
            </div>
            <div className="product-price">
              <span>
                {"$" + Number(product.price.toFixed(1)).toLocaleString()}
              </span>
              <button
                className="primaryBtn"
                onClick={() => addToCart(product.title)}
              >
                Add to Cart
              </button>
            </div>
          </div>{" "}
        </>
      )}
    </div>
  );
};

export default withRouter(CardInfo);
