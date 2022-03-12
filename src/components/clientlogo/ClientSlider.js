import React from 'react';
import Slider from "react-slick";
import { Col, Container, Row, Image } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './clients.css'
import OurClient from './OurClient';
import Brouchersimg from '../../assets/images/clients/01.png';

function ClientSlider() {
  const settings = {
    dots: false,
    autoplay: true,
    arrows: true,
    infinite: true,
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
          infinite: true,
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
              <OurClient 
                img={Brouchersimg}
              />
              <OurClient 
                img={Brouchersimg}
              />
              <OurClient 
                img={Brouchersimg}
              />
              <OurClient 
                img={Brouchersimg}
              />
              <OurClient 
                img={Brouchersimg}
              />
              <OurClient 
                img={Brouchersimg}
              />
             {/* <div className='clentslogo-card'>
                <Image  src={require('../../assets/images/clients/01.png')}/>
             </div>
             <div className='clentslogo-card'>
                <Image  src={require('../../assets/images/clients/02.png')}/>
             </div>
             <div className='clentslogo-card'>
                <Image  src={require('../../assets/images/clients/03.png')}/>
             </div>
             <div className='clentslogo-card'>
                <Image  src={require('../../assets/images/clients/04.png')}/>
             </div>
             <div className='clentslogo-card'>
                <Image  src={require('../../assets/images/clients/06.png')}/>
             </div>
             <div className='clentslogo-card'>
                <Image  src={require('../../assets/images/clients/07.png')}/>
             </div>
             <div className='clentslogo-card'>
                <Image  src={require('../../assets/images/clients/08.png')}/>
             </div>
             <div className='clentslogo-card'>
                <Image  src={require('../../assets/images/clients/09.png')}/>
             </div>
             <div className='clentslogo-card'>
                <Image  src={require('../../assets/images/clients/10.png')}/>
             </div> */}
          </Slider>
          <div className='text-center mt-2'>
             <Link to="/clients" className='more-client-btn'>
             See More</Link>
          </div>
       </Container>
    </section>
 </div>
  )
}

export default ClientSlider