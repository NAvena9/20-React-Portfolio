import React from 'react';
import Container from 'react-bootstrap/Container';
import Icons from '../Icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Footer = () => {
    return (
        <footer className="bg-light p-3 shadow footer">
            <Container>
                <Row>
                    <Col sm={12} md={6} className="m-md-0">
                        <p className="m-md-0 copyright">© 2021 Nicolas Cedano Avena</p>
                    </Col>
                    <Col sm={12} md={6} className="d-flex justify-content-md-end justify-content-center">
                        <Icons></Icons>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;