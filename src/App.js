import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter} from 'react-router-dom';
import Main from './components/Main.js'
import Header from './components/Header.js'
import {Container} from "react-bootstrap";
import Cookies from 'js-cookie';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            signedIn: 0,
            activeLink: '/login',
            activeName: 'Sign in',
        };
        this.myCallback = this.myCallback.bind(this);
    }

    myCallback() {
        if(Cookies.get('token')){
            this.setState({
                signedIn: 1,
                activeLink: '/profile',
                activeName: 'My Profile',
            });
            console.log('i got it');
            console.log(this.state);
        }
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header signedIn={this.state.signedIn} activeLink={this.state.activeLink} activeName={this.state.activeName}/>
                    <Container>
                        <Main callbackFromParent={this.myCallback}/>
                    </Container>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
