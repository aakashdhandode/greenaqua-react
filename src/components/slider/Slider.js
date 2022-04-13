import React, { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';
import Slider from "react-slick";
import "./banner.css";
import axios from 'axios';

export default function Banner() {
  const [banner, setBanner] = useState([]);
  useEffect(() => {
    fetchBanner();
  }, []);
  const fetchBanner = () => {
    axios
      .get('http://3.111.169.240/api/ga/banners')
      .then((res) => {
        setBanner(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const settings = {
    dots: true,
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
          {banner.map((banner) => (
            <div className="banner-slider" key={banner.id}>
              <div className="banner-img">
                <img src={'http://3.111.169.240/' + banner.images.original} alt='greenAqua' />
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </>
  );
}
