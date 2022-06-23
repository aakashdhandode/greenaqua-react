
import React, { Component } from "react";
import axios from 'axios';

import { Modal,  Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleInput = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    });
}

  saveStudent = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://admin.greenaqua.in/api/ga/contact', this.state);
    if (res.data.success) {
        alert(res.data.message)
        this.setState({
            name: '',
            email: '',
            phone: '',
            company: '',
            message: '',
            show: false
        });                        
    }else{
        alert(res.data.message)
    }
}

  render() {
    return (
      <div>
        <Modal dialogClassName="modal-90w" show={this.state.show} onHide={this.handleClose} centered  onSubmit={this.saveStudent}  className="pop-up get-quets">
          <Modal.Header closeButton>
          <Modal.Title>Request A Call Back</Modal.Title>
          </Modal.Header>
          <Modal.Body>
      <Form className=''>
      <Form.Group>
                        <Form.Control type="text" name="name" onChange={this.handleInput} value={this.state.name} className='input-feild-height' placeholder=" Name" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="text" name="email" onChange={this.handleInput} value={this.state.email} className='input-feild-height' placeholder="Email" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="text" name="phone" onChange={this.handleInput} value={this.state.phone} className='input-feild-height' placeholder="Phone" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="text" name="company" onChange={this.handleInput} value={this.state.company} className='input-feild-height' placeholder="Location" />
                    </Form.Group>
                    <Form.Group>
                        <textarea className="form-control" name="message" onChange={this.handleInput} value={this.state.message} rows="4" placeholder="Requirement"></textarea>
                    </Form.Group>
         <div className='text-center'>
         <Button variant="primary" type="submit" className='btn-theme-colored'>Send your message</Button>
         </div>
      </Form>
   </Modal.Body>


        </Modal>
      </div>
    );
  }
}

export default Popup;
