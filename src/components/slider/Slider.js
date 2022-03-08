import React from 'react';
import Slider from "react-slick";
import banner1 from "../../assets/images/banner/uu.jpg";
import banner2 from "../../assets/images/cslide2.jpg";
import "./banner.css";

export default function Banner() {
  const settings = {
    dots: false,
    autoplay: true,
    arrows: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
    <section className="main-slider ">
     <Slider {...settings}>
          <div className="banner-slider">
            <div className="banner-img">
              <img src={banner1} className="img-fluid" alt="sap" />
            </div>          
        </div>
       
          <div className="banner-slider">
            <div className="banner-img">
              <img src={banner2} className="img-fluid" alt="sap" />
            </div>
          </div>
      </Slider>
      </section>
    </>
  );
}
