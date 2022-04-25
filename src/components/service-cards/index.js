import React from "react";
import "./style.css"
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

function ServiceCards(props) {
    return (
        <Container className="h-50">
            <Row className="h-100">
               <Col lg={4}>
               <img className="margin-top image-size" src={props.img}></img>
               </Col>
               <Col lg={4}>
               <h2 className="margin-top">{props.title}</h2>
               <p>{props.description}</p>
               </Col>
            </Row>
        </Container>
    )
}

export default ServiceCards;