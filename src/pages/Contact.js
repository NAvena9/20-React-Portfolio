import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContactForm from '../components/Form';

//Defining the Contact Form Component
const Contact = () => {
    return (
        <div>
            <Jumbotron fluid className="p-5 mb-0">
                <Container className="text-center">
                    <div className="p-md-5">
                        <h1> Contact Info 📮</h1>
                    </div>
                </Container>
            </Jumbotron>

            <Container fluid className="shadow bg-light mb-5">
                <Container className="p-4">
                    <Row>
                        <Col>
                            <Container>
                                <h4>also on: </h4>
                                <p><span><i className="fab fa-github pr-3"></i></span> NAvena9</p>
                                <p><span><i className="fab fa-linkedin pr-3"></i></span> Nicolas Avena</p>
                            </Container>
                        </Col>
                        <Col sm={12} md={6} lg={8} className="pt-sm-4 pt-lg-0">
                            <Container>
                                <h4>Send me a message 📧 </h4>
                                <ContactForm />
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    )
}

export default Contact;