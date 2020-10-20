import React, { Component } from "react";
// import Jumbotron from "../../components/Jumbotron/jumbotron";
import { Col, Row, Container } from 'react-bootstrap';
import Nav from "../../components/Nav/nav";
import Footer from "../../components/Footer/footer";
import Image from 'react-bootstrap/Image'
import "./style.css"

class About extends Component {
    render() {
        return (
            <Container>
                <Nav />
                <Row className="row1">
                    <Col>
                        <Image width="500" height="500" src="https://bridge355.qodeinteractive.com/wp-content/uploads/2020/04/about-img-1.jpg"></Image>
                    </Col>
                    <Col>
                        <h2>/</h2>
                        <h2>Hello!</h2>
                        <h4>A bit about me!</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum turpis id felis sollicitudin malesuada. Praesent tristique egestas nisi, et ornare metus euismod eu. Quisque enim lorem, iaculis in nisl quis, porta semper nunc. Sed finibus egestas sem vitae lobortis. Vestibulum ac suscipit nisi, sed pretium ante. In nulla ligula, ornare sed magna vulputate, interdum ullamcorper turpis. Cras ac mi vel quam tincidunt gravida. Donec ex dolor, tincidunt sed tristique eget, finibus et elit.</p>
                    </Col>
                </Row>
                <Footer />
            </Container>
        );
    };
};

export default About;