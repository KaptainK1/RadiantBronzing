import React from 'react';
import logo from '../logo.svg';
import {Container} from "react-bootstrap";
import {Navbar} from "react-bootstrap";
import {Nav} from "react-bootstrap";


function MainNavbar(props){

    return(
        <Navbar variant="dark" bg="test" expand="md">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#aboutSection">About</Nav.Link>
                        <Nav.Link href="#pricingSection">Pricing</Nav.Link>
                        <Nav.Link href="#shopSection">Shop</Nav.Link>
                        <Nav.Link href="#contactSection">Contact Me</Nav.Link>
                        <Nav.Link href="#contactSection">Book Now!</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}


export default MainNavbar;