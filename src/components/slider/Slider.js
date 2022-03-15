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
      .get('http://127.0.0.1:8000/api/ga/banners')
      .then((res) => {
      console.log(res);
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
                    {banner.map((image) => (
                        <div className="banner-slider">
                            <div className="banner-img">
                               <img src={'http://127.0.0.1:8000/'+image.thumb} alt='greenAqua' />
                             </div>
                        </div>
                        ))}
          </Slider>
      </section>
    </>
  );
}
