import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Image, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import EnquiryForm from '../components/EnquiryForm';
import CatSlider from '../components/product/CatSlider';

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
                                <div className='pro-details-sec'>

                                    <img src="http://demo.odms.in/greenaqua/static/media/producttwo.d0aa7fe13de8f02968e2.jpg" alt="Pineapple" className='img-fulid details-img' />
                                    {/* {product?.featured?.map((productimg) => (
                                        <div className='pro-det-img' key={productimg.id}>
                                            <img src={'http://127.0.0.1:8000/'+ productimg.featured.original} alt='greenAqua' className='img-fulid details-img' />
                                        </div>
                                    ))} */}

                                    <h3>{product.name}</h3>
                                    <p>{product.description}</p>
                                </div>
                                <div className='clerfix'></div>

                                {/* Advanteg */}
                                <div>
                                    <h4 className="details-title">Features :</h4>
                                    <ul className='groupul'>
                                        {product?.advantages?.map((advantage) => (
                                            <li key={advantage.id}><i className="fa fa-arrow-circle-right" id="background"></i>{advantage.advantage}</li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Details */}
                                <div>
                                <h4 className="details-title">Product Details :</h4>
                                <table className="table table-striped details-des">
                                    <tbody>
                                        {product?.values?.map((item, i) => (
                                            <tr key={i}>
                                                <th>{item.name}</th>
                                                <td>{item.value}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                </div>
                            </Row>
                        </Col>
                        <Col sm={4}>
                            <div class="proconfig">
                                <EnquiryForm />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='pb-5'>
                <Container>
                    <div>
                        <h5 className='explores'>Explore More Products :</h5>
                    </div>
                    <CatSlider />
                </Container>
            </section>


        </div>
    )
}
