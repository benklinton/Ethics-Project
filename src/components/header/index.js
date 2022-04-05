import React from "react";
import "./style.css";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";

function Header() {
    return (
        <header className="header">
            <Container className="h-50">
                <Row className="h-100">
                    <Col>
                    <h1 className="mb-4 header-text">All your ethical needs, all in one place</h1>
                    <h4 className="subheading-text">Ethics Inc provides the goods and services you need to live your best possible life</h4>
                    <div className="center-buttons">
                                <Button className='header-button button-color'>Check out Products</Button>
                                <Button className="header-button-margin header-button button-color">Browse Services</Button>
                            </div>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Header