import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image, Modal, Button, Form } from 'react-bootstrap';
import '../assets/css/careers.css'
import axios from 'axios';
import { Link } from 'react-router-dom';

function Careers() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [message, setMessage] = useState("");
    const [resume, setResume] = useState('');
    const [experience, setExperience] = useState('');
    const [career_id, setCareerId] = useState('');

    const [products, setProducts] = useState([]);
    useEffect(() => {
      fetchProducts();
    }, []);
    const fetchProducts = () => {
      axios
        .get('http://admin.greenaqua.in/api/ga/careers')
        .then((res) => {
          console.log(res);
          setProducts(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const saveStudent = async () => {
        const formData = new FormData();

        if(resume != '' && resume != null) {
            formData.append(
              "resume",
              resume
            );
           }

        formData.append("name", name);
        formData.append("career_id", career_id);
        formData.append("email", email);
        formData.append("mobile", mobileNumber);
        formData.append("experience", experience);
        formData.append("message", message);

        const res = await axios.post('http://admin.greenaqua.in/api/ga/career/apply', formData);
        if (res.data.sttus === 200) {
            console.log(res.data.message)
            setName('')
        }
    }

    const [lgShow, setLgShow] = useState(false);
    return (
        <div>
            <section className='product-page-sub'>
                <Container>
                    <div className='pro-discription'>
                        <h3>Careers</h3>
                        <p>We take our responsibilities as an employer very seriously. We take good care of our new employees,
                            but we also challenge them from the very beginning by giving them responsibilities very quickly.</p>
                    </div>
                </Container>
            </section>

            <section className='pt-5 pb-5'>
                <Container>
                    <div className="section-title text-center"><h1>Opened Positions</h1>
                        <p>Explore opportunities with Hidden Brains. Let us know your area
                            of interest or expertise and we will tell you how to get there. Submit Your Resume here</p>
                    </div>
                        <div className='row'>
                        {products.map((mainproduct) => (
                     <div className='col-sm-6'>
                     <div className='career-card'>
                        <div className='career-title'>
                            <i className="fa fa-arrow-right" aria-hidden="true"></i>
                            <span>{mainproduct.title}</span>
                        </div>
                        <div className='career-details-ptb'>
                            <h4>Job Summary</h4>
                            <p>{mainproduct.description}</p>
                            <button onClick={() => {
                                setCareerId(mainproduct.id)
                                setLgShow(true)
                            }}>Apply Now &nbsp;  <i className="fa fa-arrow-right" aria-hidden="true"></i></button>
                            {/* <Link to="/ApplyJob" className='apply-job'>Apply Now <i className="fa fa-arrow-right" aria-hidden="true"></i></Link> */}
                        </div>
                    </div>
                     </div>
                       ))} 
                        </div>
                </Container>
            </section>



            <div className='lg-models'>
                <Modal
                    size="lg"
                    show={lgShow}
                    className="lg-models"
                    onHide={() => setLgShow(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                        Apply Now ! 
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                  <Form className='row career-form'>
                     <Form.Group className="col-sm-6">
                     <Form.Label>Name</Form.Label>
                        <Form.Control type="text" className='input-feild-height' onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />
                     </Form.Group>
                     <Form.Group className="col-sm-6">
                     <Form.Label>Email</Form.Label>
                        <Form.Control type="text" className='input-feild-height' onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                     </Form.Group>
                     <Form.Group className="col-sm-6">
                     <Form.Label>Phone</Form.Label>
                        <Form.Control type="text" className='input-feild-height' onChange={(e) => setMobileNumber(e.target.value)} placeholder="Mobile Number" />
                     </Form.Group>
                     <Form.Group className="col-sm-6">
                     <Form.Label>Total Experience</Form.Label>
                        <Form.Control type="text" className='input-feild-height' onChange={(e) => setExperience(e.target.value)} placeholder="Total Experience" />
                     </Form.Group>
                     <Form.Group className="col-sm-12">
                     <Form.Label>Resume Upload</Form.Label>
                        <Form.Control type="file" className='input-feild-height' onChange={(e) => setResume(e.target.files[0])} placeholder="Total Experience" />
                     </Form.Group>
             
                     <div className=''>
                        <Button variant="primary" type="button" className='btn-theme-colored' onClick={() => saveStudent()}>Send your message</Button>
                     </div>
                  </Form>
               </Modal.Body>
                </Modal>
            </div>

        </div>
    )
}

export default Careers