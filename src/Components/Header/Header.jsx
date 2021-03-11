import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { GoLightBulb } from "react-icons/go";
import "./header.css";

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="header-banner">
        <Link to="/react-shop-cart" className="logo-link">
          #reactive
        </Link>
        <nav className="navigations">
          <Link to="/shop" className="shop-link">
            Shop
          </Link>
          <Link to="/orders">
            Cart <FiShoppingCart />
          </Link>
          <div className="lighter" onClick={this.props.toggleDarkMode}>
            <GoLightBulb />
          </div>
        </nav>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  toggleDarkMode: () => dispatch({ type: "DARK_MODE_TOGGLE" }),
});

export default connect(null, mapDispatchToProps)(Header);
