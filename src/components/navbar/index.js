import React from "react";
import './style.css'
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";

function Navigation() {
    return (
        <Navbar expand='lg'>
            <Container>
                <Navbar.Brand>
                    <Nav.Link href="/"><img src="https://via.placeholder.com/150x50?text=Home" alt="Logo"></img></Nav.Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar nav"/>
                <Navbar.Collapse id="responsive-navbar nav">
                    <Nav className="navbar-nav ml-auto">
                        <Nav.Link href="/products">Products</Nav.Link>
                        <Nav.Link href="/services">Services</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;