import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';




const Resume = () => {
    return (
        <div>
            <Jumbotron fluid className="p-5 mb-0 shadow">
                <Container className="text-center">
                    <div className="p-md-5">
                        <h1>Professional Experience</h1>
                    </div>
                </Container>
            </Jumbotron>


            <Container className="p-3 ">
                <Row>
                <Col sm={12} md={6} lg={4} className="justify-content-center">
                            <Image src={require("../Assets/images/cv.jpeg")}
                                width="400vw"
                                height="400vw" />
                        </Col>
                </Row>
            </Container>



            <Container className="py-5 d-flex flex-column flex-md-row justify-content-center align-items-center">
                <Button
                    href="https://drive.google.com/file/d/1-xAPr7ufoApfmXCuLnOahsXRw7S_qgWD/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer">
                    My Resume 
                </Button>
            </Container>
        </div>
    )
}

export default Resume;