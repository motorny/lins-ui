import React, { Component } from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand><Link to="/">LinS</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navsbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Link to="/login">Sign in</Link>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
export default Header;