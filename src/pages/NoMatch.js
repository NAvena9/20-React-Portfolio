import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const NoMatch = () => {
    return (
        <Container className="p-5 h-100">
            <Card>
                <Card.Body className="text-center m-5">
                    <Card.Title>
                        <h2>Error, the page doesn't exist.</h2>
                    </Card.Title>
                    <Card.Text className="mt-5">
                        <LinkContainer to="/about">
                            <Button>
                                Homepage
                            </Button>
                        </LinkContainer>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default NoMatch;