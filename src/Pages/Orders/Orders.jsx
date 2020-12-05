import React, { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import "./Orders.css";

const Orders = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const stringToArrayHolder = localStorage.getItem("cartItems").split(",");
    setItems(stringToArrayHolder);
  }, []);

  const removeItemHandler = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
    localStorage.setItem("cartItems", updatedItems);
  };

  return (
    <div className="ui-main">
      {items.map((item, index) => {
        const updatedItem = item.split(":");
        return (
          <div key={index} className="UI-container">
            <div className="ui-img">
              <img src={updatedItem[1]} alt="img" />
            </div>
            <div className="ui-title">
              {updatedItem[0].replaceAll("-", " ")}{" "}
              <span className="dollarSign">&#36;</span>
            </div>
            <div
              className="remove-btn"
              onClick={() => removeItemHandler(index)}
            >
              <FaTrash />
            </div>
          </div>
        );
      })}
    </div>
    // <div>
    //   <img
    //     src="https://imgix.bustle.com/uploads/getty/2020/3/12/5aa737ee-d142-476f-b3d8-e863e2b56648-getty-688398000.jpg?w=1200&h=630&q=70&fit=crop&crop=faces&fm=jpg"
    //     alt="image"
    //   />
    //   <span>zdcharova</span>
    // </div>
  );
};

export default Orders;
