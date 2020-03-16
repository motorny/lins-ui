import React, { Component } from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signedIn: this.props.signedIn,
            activeLink: this.props.activeLink,
            activeName: this.props.activeName,
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.signedIn !== prevProps.signedIn) {
            this.setState({
                    signedIn: this.props.signedIn,
                    activeLink: this.props.activeLink,
                    activeName: this.props.activeName,
                }
            );
        }
    }


    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand><Link to="/">LinS</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navsbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Link to={this.state.activeLink}>{this.state.activeName}</Link>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
export default Header;