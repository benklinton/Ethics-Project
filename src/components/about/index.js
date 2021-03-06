import React from "react";
import './style.css'
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { Button } from "react-bootstrap";

function About() {
    return (
        <Container>
            <h1 className="about-header">What We Do</h1>
            <Image src="/images/about-header.jpg" alt="painting of old white men" className="about-image" fluid/>
            <Row>
                <Col><p>For as long as humans could reason one with another, old men have gathered around the proverbal bonefire to debate the various questions of how people should act and think.
                The problem was that no one knew how to capitalize on it. All the other old men had found ways to make money off of there various ideas. Untill today,
                one young white man figured out a way to sell the philosphies of men, and at a resonable price too. This comapany and its website is of his creation, a menagerie of goods and services
                to sell to every man, women and child. Just as Promethesus stole fire to give to mankind so too did our companies founder make ethics accessible to all</p> </Col>
            </Row>
            <Row>
                <h1 className="about-header">What To Expect</h1>
                <Col><Image src="/images/fox-grapes.jpg" alt="painting of a fox looking at some grapes" className="expect-image" fluid/></Col>
                <Col className="expect-text"><p>We here at Ethics Inc pride ourselves in delivering you the best goods and services possible or your money back guarantee. We have teamed
                up with companies all over the world to give you a one of a kind experince. Dont have what you are looking for? Send us a requset and a dedicated team will scoure the
                earth for your product. Are you a vendor that wants to sell your products to the world? We are more then happy to work with you and make setting up an account with us simple 
                and easy. When it comes to ethics nothing is out of reach.</p>
                <Button className="request-button request-button-color" href="/contact">Submit a Request</Button>
                <Button className="request-button request-button-color" href="/contact">Become a Vendor</Button>
                </Col>
            </Row>
            <Row>
                <h1 className="about-header">What They Say</h1>
                <Col lg={4}><Image src="/images/testimonal.jpg" className="testimonal-images image-size"/><p className="testimonals">Every since I made the switch ain't nothing changed</p></Col>
                <Col lg={4}><Image src="https://www.placecage.com/200/200"className="testimonal-images"/><p className="testimonals">Not only did Ethics Inc save my life but my marraige as well</p></Col>
                <Col lg={4}><Image src="/images/testimonal-2.jpg"className="testimonal-images"/><p className="testimonals">1 out of 10 Ethics professors recomend Ethics Inc</p></Col>
            </Row>
        </Container>

    )
}

export default About