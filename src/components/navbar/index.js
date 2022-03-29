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
                    <Nav.Link href="/"><img src="https://via.placeholder.com/150x50?text=Logo" alt="Logo"></img></Nav.Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar nav"/>
                <Navbar.Collapse id="responsive-navbar nav">
                    <Nav className="navbar-nav ml-auto">
                        <Nav.Link>Products</Nav.Link>
                        <Nav.Link>Services</Nav.Link>
                        <Nav.Link>About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;