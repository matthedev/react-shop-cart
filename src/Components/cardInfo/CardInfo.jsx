import React from "react";
import "./cardinfo.css";
import { GrClose } from "react-icons/gr";

const CardInfo = ({ product, turnOff, show }) => {
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
                  <div key={size} className="size-btn">
                    {size}
                  </div>
                );
              })}
            </div>
            <div className="product-price">
              <span>
                {"$" + Number(product.price.toFixed(1)).toLocaleString()}
              </span>
              <button className="primaryBtn">Add to Cart</button>
            </div>
          </div>{" "}
        </>
      )}
    </div>
  );
};

export default CardInfo;
