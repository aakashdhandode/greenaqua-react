import React,{useState} from 'react'
import { Col, Container, Row, Image, Form, Button } from 'react-bootstrap';
import Axios from 'axios';


function EnquiryForm() {
    const url="/api/ga/contact"
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: ""

    })
    function submit(e){
        e.preventDefault();
        Axios.post(url,{
            name: data.name,
            email: data.email,
            phone: data.phone,
            company: data.company,
            message: data.message
        })
        .then(res=>{
            console.log(res.data)
        })
    }

    function handle(e){
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }
    return (
        <div>
            <Form className='details-form-shedo' onsubmit={(e)=> submit(e)}>
                <h4 className="det-title">Product Enquiry</h4>
                <Form.Group className="mb-3">
                    <Form.Control type="text" onChange={ (e)=>handle(e)} value={data.name} id="name" className='input-feild-height' placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="text" onChange={ (e)=>handle(e)} value={data.email} id="email" className='input-feild-height' placeholder="Enter Email" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="text" onChange={ (e)=>handle(e)} value={data.phone} id="phone" className='input-feild-height' placeholder="Enter Phone" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="text" onChange={ (e)=>handle(e)} value={data.company} id="company" className='input-feild-height' placeholder="Company" />
                </Form.Group>
                <Form.Group className="mb-3"  >
                    <textarea className="form-control" onChange={ (e)=>handle(e)} value={data.message} id="message" rows="3" placeholder="Enter Message"></textarea>
                </Form.Group>
                <Button variant="primary"  type="submit" className='btn-theme-colored'>Send your message</Button>
            </Form>
        </div>
    )
}

export default EnquiryForm