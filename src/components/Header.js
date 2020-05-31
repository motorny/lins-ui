import React, {Component} from 'react';
import {MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink} from 'mdbreact';
import {Link} from 'react-router-dom';

class Header extends Component {
    state = {
        collapse: null,
    };

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
                            <MDBNavItem>
                                <MDBNavLink to="/additem">Add new item</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="/storages">Storages</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="/addstorage">Add new Storage</MDBNavLink>
                            </MDBNavItem>
                        </MDBNavbarNav>

                        <MDBNavbarNav right>
                            {this.props.userInfo && this.props.userInfo.user_id &&
                            <MDBNavItem>
                                <MDBNavLink onClick={this.props.logout} to="/">Logout</MDBNavLink>
                            </MDBNavItem>}
                            <MDBNavItem>
                                {this.props.userInfo && this.props.userInfo.user_id ?
                                    <MDBNavLink to={`/profile/${this.props.userInfo.user_id}`}>My profile</MDBNavLink>
                                    : <MDBNavLink to="/login">Sign in</MDBNavLink>
                                }
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBNavbar>
            </header>
        );
    }
}

export default Header;