import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import { Col, Container, Row, Image } from 'react-bootstrap';
import { Link } from "react-router-dom";
import axios from 'axios';

function CatSlider() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetchProducts();
    }, []);
    const fetchProducts = () => {
        axios
            .get('http://admin.greenaqua.in/api/ga/categories')
            .then((res) => {
                console.log(res);
                setProducts(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };


    const settings = {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
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
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>
            <Slider {...settings}>
                {products.map((mainproduct) => (
                    <div key={mainproduct.id}>
                        <div className='home-cat-slider'>
                            <Link to={`/details/${mainproduct.id}`}>
                                <div className='home-tab-product-card pro-height'>
                                    <img src={'http://admin.greenaqua.in/' + mainproduct.images?.original} alt='greenAqua' />
                                    <h3>{mainproduct.name}</h3>
                                </div>
                            </Link>
                        </div>

                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default CatSlider