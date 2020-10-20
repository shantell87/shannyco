import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Nav from "../../components/Nav/nav";
import Footer from "../../components/Footer/footer";
// import Card from 'react-bootstrap/Card'
import "./home.css";

class Home extends Component {
    render() {
        return (

                <Container>
                <Nav />
                <div className="main">
                    <div className="d1">D1</div>
                    <div className="d2">D2</div>
                    <div className="d3">
                            <h1 className="display-5 text-center">
                                <strong>THE SD CODE</strong>
                            </h1>
                            <h5 className="text-center">Web Development | Web Design</h5>

                    </div>
                    <div className="d4">D4</div>
                </div>
                <Footer/>
            </Container>
            
        );
    };
};

export default Home;