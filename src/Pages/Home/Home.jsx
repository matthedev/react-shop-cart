import React from "react";
import Carousel from "../../Components/Carousel/Carousel";
import "./home.css";

const Home = ({ history }) => {
  return (
    <div className="content-root">
      <div className="content-text">
        <h1>TRENDING DRESSCODE</h1>
        <h2>
          Cozy and cute - our new collection is now available for you in store.
          Feel great and steal looks!
        </h2>
        <div className="shop-btn" onClick={() => history.push("/shop")}>
          SHOP NOW
        </div>
      </div>
      <div className="content-pic-parent">
        {/* <div className="content-big-pic"></div> */}
        <Carousel />
      </div>
    </div>
  );
};

export default Home;
