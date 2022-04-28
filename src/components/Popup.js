
import React, { Component } from "react";

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

  render() {
    return (
      <div>
        <Modal dialogClassName="modal-90w" show={this.state.show} onHide={this.handleClose} centered  className="pop-up get-quets">
          <Modal.Header closeButton>
          <Modal.Title>Request A Call Back</Modal.Title>
          </Modal.Header>
          <Modal.Body>
      <Form className=''>
         <Form.Group className="">
            <Form.Control type="text" className='input-feild-height' placeholder="Name" />
         </Form.Group>
         <Form.Group className="">
            <Form.Control type="text" className='input-feild-height' placeholder="Email" />
         </Form.Group>
         <Form.Group className="">
            <Form.Control type="text" className='input-feild-height' placeholder="Location" />
         </Form.Group>
         <Form.Group className="">
            <Form.Control type="text" className='input-feild-height' placeholder="Phone" />
         </Form.Group>
         <Form.Group className=""  >
            <textarea className="form-control" id="" rows="3" placeholder="Requirement"></textarea>
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
