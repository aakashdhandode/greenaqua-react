import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Image, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import EnquiryForm from '../components/EnquiryForm';

export default function Details() {
    const [product, setProduct] = useState({});

    const params = useParams();
    useEffect(() => {
        fetchProducts();
    }, []);
    const fetchProducts = () => {
        axios
            .get(`/api/ga/product/${params.id}`)
            .then((res) => {
                console.log(res);
                setProduct(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };



    return (
        <div>
            <section className='product-page-sub'>
                <Container>
                    <div className='pro-discription'>
                        <h3>Details</h3>
                        <p>Check out the categories below to find the right products and solutions for you. And, if you don't find what you're looking for, please contact us.</p>
                    </div>
                </Container>
            </section>

            <section className='details-page-padding'>
                <Container>
                    <Row >
                        <Col sm={8}>
                            <Row>
                                <Col sm={4}>
                                    {/* {product?.featured?.map((mainproduct) => (
                                        <div className='pro-det-img' key={mainproduct.id}>
                                            <img src={'http://127.0.0.1:8000/'+ mainproduct.featured.original} alt='greenAqua' />
                                        </div>
                                    ))} */}
                                </Col>
                                <Col sm={8}>
                                    <div>
                                        <h3>{product.name}</h3>
                                        <div className='descriptions-details'>
                                            <p>{product.description}
                                            </p>
                                        </div>
                                    </div>
                                </Col>


                                {/* Advanteg */}
                                <div>
                                    <h4 className="details-title">Advantages</h4>
                                    <ul className='groupul'>
                                        {product?.advantages?.map((advantage) => (
                                            <li key={advantage.id}><i className="fa fa-arrow-circle-right" id="background"></i>{advantage.advantage}</li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Details */}
                                <h4 className="details-title">Details</h4>
                                <table className="table table-striped details-des">
                                    <tbody>
                                        <tr>
                                            {product?.values?.map((value) => (
                                                <th key={value.id} >{value.name}</th>

                                            ))}
                                        </tr>
                                    </tbody>
                                </table>
                            </Row>
                        </Col>







                        <Col sm={4}>
                            <EnquiryForm />
                        
                        </Col>
                    </Row>
                </Container>
            </section>


        </div>
    )
}
