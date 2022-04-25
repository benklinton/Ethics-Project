import React from "react";
import "./style.css";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

function Contact() {
    return (
        <Container>
            <Row>
                <Col lg={5} mx-auto className="page-center">
                    <Card className="contact-card my-5">
                <Card.Body>
                    <Card.Title className="text-center text-margin">Drop us a line!</Card.Title>
                    <Form className="contact-form">
                        <Form.Control type="text" placeholder="Name" className="input-style" />
                        <Form.Control type="text" placeholder="Email Address" className="input-style" />
                        <Form.Select aria-label="default select example">
                            <option>Reason for contact</option>
                            <option value='1'> General questions</option>
                            <option value='2'> Become a vendor</option>
                            <option value='3'> Submit a product request</option>
                        </Form.Select>
                        <Form.Control placeholder="discription of request" className="input-style input-margin" as="textarea" rows={5} />
                        <Button variant="outline-info" className="submit-button" type="sumbit">Submit Request</Button>
                    </Form>
                </Card.Body>
                </Card>

                </Col>
            </Row>
        </Container>
    )
}

export default Contact;