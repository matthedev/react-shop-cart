import React, { useState, useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { FaTrash } from "react-icons/fa";
import "./Orders.css";

const stripePromise = loadStripe(
  "pk_test_51HuduDFEzHGjSQ0ZIGRH1xv5R3YLhoucZWpzzM1l9RWss0AZd2oRraPF1X07Oxjv3sLHGbS59f6mY3qiYXPDXfqi003P4Pn9IZ"
);

const Orders = ({ history }) => {
  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  if (!localStorage.getItem("cartItems")) {
    history.push("/react-shop-cart");
  }
  useEffect(() => {
    const cockpit = localStorage.getItem("cartItems");
    const stringToArrayHolder = cockpit.split(",");
    setItems(stringToArrayHolder);
  }, []);

  useEffect(() => {
    items.map((item) => {
      const updatedItem = item.split(";");
      return setTotalPrice(
        (prevState) => Number(prevState) + Number(updatedItem[1])
      );
    });
  }, [items]);

  const removeItemHandler = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
    localStorage.setItem("cartItems", updatedItems);
    setTotalPrice(0);
  };

  const [checkOutForm, setCheckOutForm] = useState(false);

  return (
    <div className="ui-main">
      {items.map((item, index) => {
        const updatedItem = item.split(";");

        return (
          <div key={index} className="UI-container">
            <div className="ui-img">
              <img src={`${updatedItem[2]}`} alt="img" />
            </div>
            <div className="ui-title">
              {updatedItem[0].replaceAll("-", " ")}{" "}
              <span className="dollarSign">{updatedItem[1]} &#36;</span>
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
      <span className="Total-price">
        Total Price: <span className="dollarSign">{totalPrice} &#36;</span>
      </span>
      <div className="buybtn" onClick={() => setCheckOutForm(true)}>
        Purchase
      </div>
      <div className={checkOutForm ? "checkOutHandlerShow" : "checkHandler"}>
        <Elements stripe={stripePromise}>
          <CheckoutForm TotalAmount={totalPrice} />
        </Elements>
      </div>
      <div className="instructions">
        <span>
          *Please use the following test credit card for peyments* <br />
          4242 4242 4242 4242 - Exp: 05/25 - CVV: 123
        </span>
      </div>
    </div>
  );
};

export default Orders;
