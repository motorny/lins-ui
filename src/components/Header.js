import React, { Component } from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signedIn: 0,
            activeLink: '/login',
            activeName: 'Sign In',
        };
        this.switchLinkDynamically = this.switchLinkDynamically.bind(this);
    }

    componentDidMount() {
        this.switchLinkDynamically();
    }

    switchLinkDynamically(){
        if(Cookies.get('token')){
            this.setState({
                signedIn: 1,
                activeLink: '/profile',
                activeName: 'My Profile',
            });
            console.log('link changed');
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