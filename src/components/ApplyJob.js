// import { useState } from "react";
// import { Container, Row, Col, Image, Modal, Button, Form } from 'react-bootstrap';
// function ApplyJob() {
//     const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [mobile, setMobile] = useState("");
//   const [experience, setExperience] = useState("");
  
//   const [message, setMessage] = useState("");
//   let handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       let res = await fetch("http://admin.greenaqua.in/api/ga/career/apply", {
//         method: "POST",
//         body: JSON.stringify({
//           name: name,
//           email: email,
//           mobile: mobile,
//           experience: experience
//         }),
//       });
//       let resJson = await res.json();
//       if (res.status === 200) {
//         setName("");
//         setEmail("");
//         setMobile("");
//         setExperience("");
//         setMessage("User created successfully");
//       } else {
//         setMessage("Some error occured");
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };




// return (
// <div className='car-app'>
//    <Container>
//       <div className='apply-section'>
//          <div className='top-containt'>
//             <h1 className="ca-m-t">We are Always Looking Forward for Talented Candidate.</h1>
//             <p className='cmn-title'>We are eager to meet aspiring professionals who would like to join our team.
//                Submit your resume to be considered for future positions.
//             </p>
//          </div>
//       </div>
//       <div className='apply-form'>
//          <Form className='row career-form' onSubmit={handleSubmit}>
//             <Form.Group className="col-sm-6">
//                <Form.Label>Name</Form.Label>
//                <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} className='input-feild-height' placeholder="Enter Name" />
//             </Form.Group>
//             <Form.Group className="col-sm-6">
//                <Form.Label>Email</Form.Label>
//                <Form.Control type="text" onChange={(e) => setEmail(e.target.value)} value={email} className='input-feild-height' placeholder="Enter email" />
//             </Form.Group>
//             <Form.Group className="col-sm-6">
//                <Form.Label>Phone</Form.Label>
//                <Form.Control type="number" value={mobile} onChange={(e) => setMobile(e.target.value)} className='input-feild-height' placeholder="Mobile Number" />
//             </Form.Group>
//             <Form.Group className="col-sm-6">
//                <Form.Label>Total Experience</Form.Label>
//                <Form.Control type="number" value={experience} onChange={(e) => setExperience(e.target.value)} className='input-feild-height' placeholder="Total Experience" />
//             </Form.Group>
//             <Form.Group className="col-sm-12">
//                <Form.Label>Resume Upload</Form.Label>
//                <Form.Control type="file" className='input-feild-height' placeholder="Total Experience" />
//             </Form.Group>
//             <div className=''>
//                <Button variant="primary" type="submit" className='btn-theme-colored'>Send your message</Button>
//                <div className="message">{message ? <p>{message}</p> : null}</div>
//             </div>
//          </Form>
//       </div>
//    </Container>
// </div>
// )
// }
// export default ApplyJob




import axios from 'axios';
import React, { Component } from 'react'
import { Col, Container, Row, Image, Form, Button } from 'react-bootstrap';

class ApplyJob extends Component {  

    constructor(props) {
        super(props)
        this.state = {
            career_id: '',
            name: '',
            email: '',
            mobile: '',
            experience: '',
            message: '',
            resume: ''
        }
}

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    saveStudent = async (e) => {
        e.preventDefault();
        const formData = new FormData();

        if(this.state.resume != '' && this.state.resume != null) {
            formData.append(
              "resume",
              this.state.resume
            );
           }

        formData.append("name", this.state.name);
        formData.append("email", this.state.email);
        formData.append("mobile", this.state.mobile);
        formData.append("experience", this.state.experience);
        formData.append("message", this.state.message);

        const res = await axios.post('http://admin.greenaqua.in/api/ga/career/apply', this.state);
        if (res.data.success) {
            alert(res.data.message)
            this.setState({
                career_id: '',
                name: '',
                email: '',
                mobile: '',
                experience: '',
                message: '',
                
            });
        }else{
            alert(res.data.message)
        }
    }
    render() {
        return (
            <>
             <div className='car-app'>
        <Container>
            <div className='apply-section'>
                <div className='top-containt'>
                    <h1 className="ca-m-t">We are Always Looking Forward for Talented Candidate.</h1>
                    <p className='cmn-title'>We are eager to meet aspiring professionals who would like to join our team. Submit your resume to be considered for future positions. </p>
                </div>
            </div>
            <div className='apply-form'>
                <Form className='row career-form' onSubmit={this.saveStudent}>

                             <Form.Group className="col-sm-6">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="name" onChange={this.handleInput} value={this.state.name} className='input-feild-height' placeholder="Enter Name" />
                            </Form.Group>
                            <Form.Group className="col-sm-6">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" name="email" onChange={this.handleInput} value={this.state.email} className='input-feild-height' placeholder="Enter Email" />
                            </Form.Group>
                            <Form.Group className="col-sm-6">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="number" name="mobile" onChange={this.handleInput} value={this.state.mobile} className='input-feild-height' placeholder="Enter Phone" />
                            </Form.Group>
                            <Form.Group className="col-sm-6">
                            <Form.Label>Exprience</Form.Label>
                            <Form.Control type="number" name="experience" onChange={this.handleInput} value={this.state.experience} className='input-feild-height' placeholder="Enter experience" />
                            </Form.Group>
                            <Form.Group className="col-sm-12">
                            <Form.Label>Resume Upload</Form.Label>
                            <Form.Control type="file" className='input-feild-height' onChange={(e) =>  this.setState({resume: e.target.files[0]})} placeholder="Total Experience" />
                            </Form.Group>
                            <div className=''>
                            <Button variant="primary" type="submit" className='btn-theme-colored'>Send your message</Button>
                            </div>
                </Form>
            </div>
        </Container>
    </div>

            </>
        )
    }
}

export default ApplyJob



