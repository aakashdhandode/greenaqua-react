
import axios from 'axios';
import React, { Component } from 'react'
import { Col, Container, Row, Image, Form, Button } from 'react-bootstrap';

class EnquiryForm extends Component {  
    state = {
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    saveStudent = async (e) => {
        e.preventDefault();
        const res = await axios.post('/api/ga/contact', this.state);
        if (res.data.sttus === 200) {
            console.log(res.data.message)
            this.setState({
                name: '',
                email: '',
                phone: '',
                company: '',
                message: ''
            });
        }
    }
    render() {
        return (
            <>
                <div className='product-enquiry'>
                <Form className='details-form-shedo' onSubmit={this.saveStudent}>
                    <h4 className="det-title">Product Enquiry 
                    </h4>
                    
                    <div className='input-padd'>
                    <Form.Group>
                        <Form.Control type="text" name="name" onChange={this.handleInput} value={this.state.name} className='input-feild-height' placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="text" name="email" onChange={this.handleInput} value={this.state.email} className='input-feild-height' placeholder="Enter Email" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="text" name="phone" onChange={this.handleInput} value={this.state.phone} className='input-feild-height' placeholder="Enter Phone" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="text" name="company" onChange={this.handleInput} value={this.state.company} className='input-feild-height' placeholder="Company" />
                    </Form.Group>
                    <Form.Group>
                        <textarea className="form-control" name="message" onChange={this.handleInput} value={this.state.message} rows="4" placeholder="Enter Message"></textarea>
                    </Form.Group>
                    <Button variant="primary" type="submit" className='btn-theme-colored'>Send your message</Button>
                    </div>
                </Form> 
                </div>

            </>
        )
    }
}

export default EnquiryForm
