import React, { Component } from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { BrowserRouter } from 'react-router-dom';
//import Login from "./Login";

class Header extends Component {
    render() {
        return (
            <BrowserRouter>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/">LinS</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Button href="/login" variant="outline-info">Sign in</Button>
                    </Navbar.Collapse>
                </Navbar>
            </BrowserRouter>
        );
    }
}
export default Header;