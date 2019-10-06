import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import Home from './Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            apiResponse: '',
        };
    }

    render() {
        return (
            <Router>
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/" >Home</Nav.Link>
                            <Nav.Link href="/login">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Login} />
            </div>
            </Router>

        );
    }
}

export default App;
