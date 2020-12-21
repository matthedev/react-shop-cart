import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import "./header.css";

class Header extends Component {
  render() {
    return (
      <div className="header-banner">
        <Link to="/" className="logo-link">
          #alpha dressing
        </Link>
        <nav>
          <Link to="/shop" className="shop-link">
            Shop
          </Link>
          <Link to="/orders">
            Cart <FiShoppingCart />
          </Link>
        </nav>
      </div>
    );
  }
}

export default Header;
