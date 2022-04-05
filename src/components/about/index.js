import React from "react";
import './style.css'
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Image } from "react-bootstrap";

function About() {
    return (
        <Container>
            <h1 className="about-header">What We Do</h1>
            <Image src="/images/about-header.jpg" alt="painting of old white men" className="about-image" fluid/>
            <Row>
                <Col>For as long as humans could reason one with another, old white men have gathered around the proverbal bonefire to debate the various questions of how people should act and think.
                The problem was that no one knew how to capitalize on it. All the other old white men had found ways to make money off of there various ideas. Untill today,
                one young white man figured out a way to sell the philosphies of men, and at a resonable price too. This comapany and its website is of his creation, a menagerie of goods and services
                to sell to every man, women and child. Just as Promethesus stole fire to give to mankind so too did our companies founder make ethics accessible to all </Col>
            </Row>
            <Row>
                <h1 className="about-header">What To Expect</h1>
                <Image src="/images/fox-grapes.jpg" alt="painting of a fox looking at some grapes" className="expect-image" fluid/>
                <Col>We</Col>
            </Row>
        </Container>

    )
}

export default About