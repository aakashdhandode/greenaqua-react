import React from 'react';
import { Container } from 'react-bootstrap';
import ContactForm from '../components/ContactForm';
export default function Contact() {
  return (
    <>
        <section className='product-page-sub'>
          <Container>
            <div className='pro-discription'>
               <h3>Contact</h3>
               <p>sCheck out the categories below to find the right products and solutions for you. And, if you don't find what you're looking for, please contact us.</p>
            </div>
          </Container>
        </section>
    
        <ContactForm />


        <section>
            <Container>
                <div className="google-map-code pb-5">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2500388431886!2d78.3782063501211!3d17.447742587983775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93de5eab8731%3A0xe28813073a3d2535!2sGreen%20Aqua%20Enviro%20Projects%20Private%20Limited!5e0!3m2!1sen!2sin!4v1650624981728!5m2!1sen!2sin" width="100%" height="350"  style={{border:0}}  aria-hidden="false"></iframe>
                </div>
            </Container>
        </section>
       
    </>
  );
}
