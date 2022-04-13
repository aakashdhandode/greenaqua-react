import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import { Col, Container, Row, Image } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './clients.css'
import OurClient from './OurClient';
import Brouchersimg from '../../assets/images/clients/01.png';
import axios from 'axios';

function ClientSlider() {

  const [gallery, setGallery] = useState([]);
  useEffect(() => {
    fetchGallery();
  }, []);
  const fetchGallery = () => {
    axios
      .get('http://3.111.169.240/api/ga/files/client/true')
      .then((res) => {
        setGallery(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  const settings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0,
    cssEase: 'linear',
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>
      <section className='clients-bg client-slider'>
        <Container>
          <Slider {...settings}>
            {/* <OurClient 
                img={Brouchersimg}
              /> */}
            {gallery.map((image) => (
              <div key={image.id} className="clentslogo-card">
                <img src={'http://3.111.169.240/' + image.original} alt='greenAqua' />
              </div>
            ))}
          </Slider>
          <div className='text-center'>
            <Link to="/clients" className='more-client-btn'>
              See More</Link>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default ClientSlider