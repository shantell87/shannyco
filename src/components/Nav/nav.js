import React, { Component } from "react";
import { Container } from "react-bootstrap";
// import Navbar from 'react-bootstrap/Navbar';
// import { Link } from "react-router-dom";
import "./style.css";


class Nav extends Component {

    render() {

        return (
            <Container>
            <nav className="navbar navbar-expand-lg site-navbar">
                <a className="navbar-brand" href="/">theSDcode</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-md-center" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="/portfolio">Portfolio</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="/sesrvices">Services</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
            </Container>
        );
    }
};



export default Nav;
