import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Products() {

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


  return (
    <>
      <section className='product-page-sub'>
        <Container>
          <div className='pro-discription'>
            <h3>Categories</h3>
            <p>Check out the categories below to find the right products and solutions for you. And, if you don't find what you're looking for, please contact us.</p>
          </div>
        </Container>
      </section>
      <section className='pt-5 pb-5'>


        <Container>
          <Row>
            {products.map((mainproduct) => (
              <Col sm={3} key={mainproduct.id}>
                <Link to={`/category/${mainproduct.id}`}>
                  <div className='home-tab-product-card pro-height'>
                    <img src={'/' + mainproduct.images.original} alt='greenAqua' />
                    <h3>{mainproduct.name}</h3>
                  </div>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}
