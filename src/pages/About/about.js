import React, { Component } from "react";
// import Jumbotron from "../../components/Jumbotron/jumbotron";
import { Col, Row, Container } from 'react-bootstrap';
import Nav from "../../components/Nav/nav";
import Footer from "../../components/Footer/footer";
import Image from 'react-bootstrap/Image'
import "./about.css"

class About extends Component {
    render() {
        return (
            <Container>
                <Nav />
                <Row className="row1">
                    <Col>
                        <Image width="500" height="500" src="https://reductress.com/wp-content/uploads/2019/12/defaultmacbackground.jpg"></Image>
                    </Col>
                    <Col>
                        <Row>
                            <div className="shape1"></div>
                            <div className="shape2"></div>
                            <div className="shape3"></div>
                        </Row>
                        <h1 className="display-2">Hello!</h1>
                        <h3>A bit about me!</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum turpis id felis sollicitudin malesuada. Praesent tristique egestas nisi, et ornare metus euismod eu. Quisque enim lorem, iaculis in nisl quis, porta semper nunc. Sed finibus egestas sem vitae lobortis. Vestibulum ac suscipit nisi, sed pretium ante. In nulla ligula, ornare sed magna vulputate, interdum ullamcorper turpis. Cras ac mi vel quam tincidunt gravida. Donec ex dolor, tincidunt sed tristique eget, finibus et elit.</p>
                        <Row>
                            <div className="circle1 text-center">Skills</div>
                            <div className="circle2"></div>
                            <div className="circle3 text-center">Resume</div>
                        </Row>
                    </Col>
                </Row>
                <Footer />
            </Container>
        );
    };
};

export default About;