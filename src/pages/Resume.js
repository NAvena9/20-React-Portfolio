import React from 'react';

// import react-bootstrap components
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';


function Resume() {
    return (
        <div>
            <Jumbotron fluid className="p-5 mb-0 shadow">
                <Container className="text-center">
                    <div className="p-md-5">
                        <h1>Professional Experience</h1>
                    </div>
                </Container>
            </Jumbotron>

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