import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import ContactIcons from '../ContactIcons'
//Bootstrap Import
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="bg-light shadow">
                <LinkContainer to="/about">
                    <Navbar.Brand>Nicolas Cedano Avena</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <LinkContainer to="/about">
                            <Nav.Link>About Me</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/portfolio">
                            <Nav.Link>Portfolio</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="resume">
                            <Nav.Link>Resume</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="contact">
                            <Nav.Link>Contact</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <ContactIcons></ContactIcons>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Header;