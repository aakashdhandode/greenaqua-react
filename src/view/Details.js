import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Details() {
    const [products, setProducts] = useState([]);
    const params = useParams();
    useEffect(() => {
        fetchProducts();
    }, []);
    const fetchProducts = () => {
        axios
            .get(`/api/ga/product/${params.id}`)
            .then((res) => {
                console.log(res);
                setProducts(res.data.data?.data ?? []);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div>
            <h1 className='m-5'>hello</h1>
            {products.map((mainproduct) => (
                <Col sm={3}>
                    <div className='home-tab-product-card pro-height'>
                        <h1 className="m-5">sfjflksdjlkjlk</h1>
              
                    </div>
                </Col>
                
            ))}

          
        </div>
    )
}
