import React from "react";
import "./style.css";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

function Header() {
    return (
        <header className="header">
            <Container className="h-50">
                <Row className="h-100">
                    <Col>
                    <h1 className="mb-4 center text-black">Insert Text here</h1>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Header