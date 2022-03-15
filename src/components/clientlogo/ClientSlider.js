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
      .get('http://127.0.0.1:8000/api/ga/files/client/true')
      .then((res) => {
      console.log(res);
      setGallery(res.data.data);
      })
      .catch((err) => {
      console.log(err);
      });
  };


  const settings = {
    dots: false,
    autoplay: true,
    arrows: true,
    infinite: false,
    speed: 2000,
    slidesToShow: 6,
    margin:5,
    slidesToScroll: 1,
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
                            <img src={'http://127.0.0.1:8000/'+image.original} alt='greenAqua' />
                       
                        ))}
             
             {/* <div className='clentslogo-card'>
                <Image  src={require('../../assets/images/clients/01.png')}/>
             </div>
           
             <div className='clentslogo-card'>
                <Image  src={require('../../assets/images/clients/10.png')}/>
             </div> */}
          </Slider>
          <div className='text-center mt-3'>
             <Link to="/clients" className='more-client-btn'>
             See More</Link>
          </div>
       </Container>
    </section>
 </div>
  )
}

export default ClientSlider