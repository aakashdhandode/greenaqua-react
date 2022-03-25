import React, { useState, useEffect } from 'react';
import Slider from '../components/slider/Slider';
// import Products from '../components/productstab/Products';
import StretgyCard from '../components/stretgycard/StretgyCard';
import '../assets/css/main.css'
import { Col, Container, Row, Image, Tabs, Tab } from 'react-bootstrap';
import homeabout from "../assets/images/homeabout.jpg";
import '../assets/css/product.css'
import ClientSlider from '../components/clientlogo/ClientSlider';
import ContactForm from '../components/ContactForm';
import Popup from '../components/Popup';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function Home() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetchProducts();
    }, []);
    const fetchProducts = () => {
        axios
            .get('/api/ga/categories')
            .then((res) => {
                console.log(res);
                setProducts(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };


    // const [productscat, setProductsCat] = useState([]);
    // const params = useParams();
    // useEffect(() => {
    //     fetchProductsCat();
    // }, []);
    // const fetchProductsCat = () => {
    //     axios
    //         .get(`/api/ga/${params.id}/products`)
    //         .then((res) => {
    //             console.log(res);
    //             setProductsCat(res.data.data?.data ?? []);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // };





    return (
        <>
            <Slider />
            {/* <Popup /> */}
            {/* our 3 services */}
            <section className='home-product-card'>
                <Container>
                    <Row>
                        <Col sm={4}>
                            <Image src={require('../assets/images/img01.png')} alt="greenaqua" />
                            <h3>Domestic Range</h3>
                            <p>Green Aqua engaged in manufacturing, supplying and distributing Water RO Purifiers and Home Softeners for Residential and Small Business users. These water Purifiers are designed and developed in accordance with the guidelines laid in the industry to attain highest benchmarks of quality. We uniquely positioned to offer our clients one stop &amp; integrated solutions for household, institutional, commercial, industrial by leveraging our expertise across various technologies to cater the needs of domestic.</p>
                        </Col>
                        <Col sm={4}>
                            <Image src={require('../assets/images/img02.png')} alt="greenaqua" />
                            <h3>Commercial & Industrial</h3>
                            <p>Green Aqua is engaged in offering the commercial and Industrial Water Treatment Plants. Under this category, we offer our customers a wide range of solutions for drinking, process and recycling applications which includes Reverse Osmosis Plants(RO), Ultra Filtration(UF), nano filtration(NF), UV Purification Systems, Pressure sand filters, Activated carbon filters, Water Softeners, DM Plants, Mixed Bed Units, Desalination plants, Sewage Treatment Plants(STP)</p>
                        </Col>
                        <Col sm={4}>
                            <Image src={require('../assets/images/img03.png')} alt="greenaqua" />
                            <h3>Water Treatment Solutions</h3>
                            <p>Green Aqua expertise lies in designing of Sewage treatment or effluent treatment plant that meet individual site requirements by creating a versatile, reliable and an efficient design that on one hand meets the stringent discharge norms and regulations of Pollution control Board (PCB). Our design includes physical, chemical and biological processes to remove physical, chemical and biological contaminants. Its objective is to produce a waste stream (or treated effluent) and a solid waste or sludge suitable for.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* home page welcome section */}
            <section className='new-about-bg'>
                <Container fluid>
                    <Row>
                        <Col sm={6} className='wlcome-img-padding'>
                            <img src={homeabout} className="img-fluid" alt="greenaqua" />
                        </Col>
                        <Col sm={6}>
                            <div className="offers-containt">
                                <h3>Welcome to Green Aqua Enviro Projects Private Limited, Hyderabad, India.</h3>
                                <p>Welcome to Green Aqua Enviro Projects Private Limited, Hyderabad, India. Green Aqua is one of the leading
                                    specialist in water treatment industry operate in the Designing, manufacturing, supply,
                                    erection and commissioning of water and waste water treatment plants. At Green Aqua,
                                    we are uniquely positioned to offer our clients one stop &amp; integrated solutions for
                                    household, institutional, commercial, industrial by leveraging our expertise across various
                                    technologies to cater the needs of domestic, commercial and industrial requirements.
                                </p>
                                <p>By Integrating process thechnolgy, design engineering and project management capabilites,
                                    we take end-to-end responsibility in planning, sourcing, integrating and managing water &amp;
                                    waste water plants, thus providing customers with total systems solutions with a long term commitment
                                    for quality and service.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* home page welcome section end */}

            {/* Our product tabs section  */}
            {/* <section className='pt-4'>
                <Container>
                    <div className='section-title text-center'>
                        <h1>Our Products</h1>
                        <p> With Esteemed Quality certifications from Water Quality and focus on Safety and Environment MAnagement Systems, Green Aqua is committed to maintain the highest standards for Health, Saftey and Environment.</p>
                    </div>
                    <div className='products-tabs'>
                        <Tabs defaultActiveKey="tabone" id="uncontrolled-tab-example" className="mb-3">
                            {products.map((mainproduct) => (
                                <Tab eventKey="tabone" title={mainproduct.name}>
                                    <Row>
                                        {productscat.map((mainproductcat) => (
                                            <Col sm={3} key={mainproductcat.id}>
                                                <div className='home-tab-product-card pro-height'>
                                                    <img src={'http://127.0.0.1:8000/' + mainproduct.original} alt='greenAqua' />
                                                    <h3>{mainproductcat.name}</h3>
                                                    <p>{mainproductcat.description}</p>
                                                    <Link to={`/Details/${mainproduct.id}`}>More..</Link>
                                                </div>
                                            </Col>
                                        ))}
                                    </Row>
                                </Tab>
                            ))}



                            <Tab eventKey="tabtwo" title="Wastewater Treatment">
                                <Row>
                                    <Col sm={3}>
                                        <ProductCat
                                            img={Productone}
                                            title="Industrial Reverse Osmosis Plant"
                                            description="Green Aqua engaged in manufacturing, supplying and distributing Water RO Purifiers and Home 
                            Softeners for Residential and Small Business users."
                                            more="More.."
                                        />
                                    </Col>
                                </Row>
                            </Tab>
                        </Tabs>
                    </div>
                </Container>
            </section> */}

            <section className='pt-4'>
                <Container>
                    <div className='section-title text-center'>
                        <h1>Our Products</h1>
                        <p> With Esteemed Quality certifications from Water Quality and focus on Safety and Environment MAnagement Systems, Green Aqua is committed to maintain the highest standards for Health, Saftey and Environment.</p>
                    </div>
                    <Row>
                        {products.map((mainproduct) => (
                            <Col sm={3} key={mainproduct.id}>
                            <Link to={`/products/${mainproduct.id}`}>
                                <div className='home-tab-product-card pro-height'>
                                <img src={'http://127.0.0.1:8000/'+mainproduct.images.original} alt='greenAqua' />
                                    <h3>{mainproduct.name}</h3>
                                </div>
                            </Link>
                            </Col>
                        ))}
                    </Row>

                </Container>
            </section>







            {/* end our product tabs section */}

            <section className='pt-4'><StretgyCard /></section>
            <ClientSlider />

            {/*our feturs section */}
            <section className="footer-contact">
                <Container>
                    <Row>
                        <Col sm={3} xs={3}>
                            <div className="sevice-icons">
                                <Image className='icon-image' src={require('../assets/images/economy.png')} />
                                <h1>Economy</h1>
                            </div>
                        </Col>
                        <Col sm={3} xs={3}>
                            <div className="sevice-icons">
                                <Image className='icon-image' src={require('../assets/images/qulity.png')} />
                                <h1>Quality</h1>
                            </div>
                        </Col>
                        <Col sm={3} xs={3}>
                            <div className="sevice-icons">
                                <Image className='icon-image' src={require('../assets/images/service.png')} />
                                <h1>Service</h1>
                            </div>
                        </Col>
                        <Col sm={3} xs={3}>
                            <div className="sevice-icons">
                                <Image className='icon-image' src={require('../assets/images/innovation.png')} />
                                <h1>Innovation</h1>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* end feturs section */}

            {/* home page contact us form */}
            <ContactForm />

        </>
    );
}
