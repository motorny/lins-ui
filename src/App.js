import React, {Component} from 'react';
import './App.css';

import {BrowserRouter} from 'react-router-dom';
import Main from './components/Main.js'
import Header from './components/Header.js'
import {MDBContainer} from "mdbreact";
import Cookies from 'js-cookie';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
                activeLink: '/profile/' + Cookies.get('user_id'),
                activeName: 'My Profile',
            });
            console.log('i got it');
            console.log(this.state);
        }
    }

    componentDidMount() {
        this.myCallback();
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header signedIn={this.state.signedIn} activeLink={this.state.activeLink} activeName={this.state.activeName}/>
                    <MDBContainer className="mt-5 pt-5">
                        <Main callbackFromParent={this.myCallback}/>
                        <ToastContainer hideProgressBar={true}/>
                    </MDBContainer>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
