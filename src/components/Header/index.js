import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import Icons from '../Icons'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';



const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="bg-light shadow">
                <LinkContainer to="/about">
                    <Navbar.Brand>Nicolas Cedano Avena</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                {/* <Navbar.Collapse id="basic-navbar-nav"> */}
                    <Nav className="mr-auto">
                        <LinkContainer to="/about">
                            <Nav.Link>About Me</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/projects">
                            <Nav.Link>Portfolio</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="resume">
                            <Nav.Link>Resume</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="contact">
                            <Nav.Link>Contact</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <Icons></Icons>
                {/* </Navbar.Collapse> */}
            </Navbar>
        </div>
    )
}

export default Header;