import React from 'react';

// import react-bootstrap components
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
    return (
        <div>
            <Jumbotron fluid className="mb-0">
                <Container>
                    <Row>
                        <Col sm={12} md={6} lg={4} className="justify-content-center">
                            <Image
                                src={require("../Assets/images/nico.jpeg")}
                                roundedCircle
                                width="280vw"
                                height="280vw" />
                        </Col>
                        <Col className="pl-md-5">
                            <h1 className="display-4 text-center text-lg-left text-light p-0-lg pt-4">
                                Hola! </h1>
                            <p className="text-dark text-center text-md-left h3">
                                I'm Nicolas, a Software QA and Full-Stack Web Developer based in Houston.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>

            <Container fluid className="shadow mb-5 bg-light">
                <Container className="p-5 text-justify">
                    <h3>About Me</h3>
                    <p>
                        Hi! I’m an engineer, a team player, a full-stack software developer, with a background in customer service, OG drilling technologies and applications, with proven experience delivering client satisfaction through technical know-how and leadership.
                    </p>
                    <p>
                        Passionate about learning and known as a creative thinker, I got a certificate in full-stack development and I would never have thought that the conjunction of developing solutions for everyday living, solving complex problems and design-thinking were going to make me fall in love with coding. In my current role as Software QA. With my set of skills and experience I am planning on venturing to smart, automatic and integrated software systems.
                    </p>
                </Container>
            </Container>
        </div>
    )
}

export default About;