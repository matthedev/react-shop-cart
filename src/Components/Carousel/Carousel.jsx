import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import IMG from "../../Assets/gogo1.png";
import IMG2 from "../../Assets/gogo3.png";
import IMG3 from "../../Assets/gogo2.png";

const SliderWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Slide = styled.div`
  width: 100%;
  height: 100vh;

  img {
    width: auto;
    height: 100%;
    background-size: cover;
    background-position: center;
  }
`;

const settings = {
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Carousel = () => {
  return (
    <SliderWrapper>
      <Slider {...settings}>
        <Slide>
          <img src={IMG} alt="" />
        </Slide>
        <Slide>
          <img src={IMG2} alt="" />
        </Slide>
        <Slide>
          <img src={IMG3} alt="" />
        </Slide>
      </Slider>
    </SliderWrapper>
  );
};

export default Carousel;
