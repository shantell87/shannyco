import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Nav from "../../components/Nav/nav";
import Footer from "../../components/Footer/footer";
// import Jumbotron from "./../../components/Jumbotron/jumbotron";
import "./contact.css";

class Contact extends Component {
    render() {
        return (
            <div>
            <Container>
                <Nav />
                <div className="main">

                </div>
                <Footer/>
            </Container>

            </div>

        );
    };
};

export default Contact;