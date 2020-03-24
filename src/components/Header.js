import React, {Component} from 'react';
import {MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink} from 'mdbreact';
import {Link} from 'react-router-dom';

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
            <header>
                <MDBNavbar style={{backgroundColor: "#FFFFFF"}} light expand="md" fixed="top" scrolling>
                    <Link to="/"><MDBNavbarBrand>LinS</MDBNavbarBrand></Link>
                    <MDBNavbarToggler/>
                    <MDBCollapse isOpen={this.state.collapse} navbar>
                        <MDBNavbarNav left>
                            <MDBNavItem>
                                <MDBNavLink to="/items">Items</MDBNavLink>
                            </MDBNavItem>
                        </MDBNavbarNav>

                        <MDBNavbarNav right>
                            <MDBNavItem>
                                <MDBNavLink to={this.state.activeLink}>{this.state.activeName}</MDBNavLink>
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBNavbar>
            </header>
        );
    }
}

export default Header;