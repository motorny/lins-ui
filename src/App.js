import React, {Component} from 'react';
import './App.css';

import {BrowserRouter} from 'react-router-dom';
import Main from './components/Main.js'
import Header from './components/Header.js'
import {MDBContainer} from "mdbreact";
import Cookies from 'js-cookie';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userInfo: null,
        };
    }

    setUserInfo = (userInfo) => {
        console.log('app userInfo', userInfo);
        Cookies.set('token', userInfo.token);
        Cookies.set('token_expire', userInfo.token_expire);
        Cookies.set('user_id', userInfo.user_id);
        this.setState({userInfo: {
                token: userInfo.token,
                user_id: userInfo.user_id,
                token_expire: new Date(userInfo.token_expire)
            }});
    };

    logout = () => {
        console.log("Logout");
        Cookies.remove('token');
        Cookies.remove('token_expire');
        Cookies.remove('user_id');
        this.setState({userInfo: null});
    };

    componentDidMount() {
        const token = Cookies.get('token');
        const tokenExpire = Cookies.get('token_expire');
        const dateExpire = tokenExpire && new Date(tokenExpire);
        console.log('loaded expiration', dateExpire);
        const dateNow = new Date();
        if (token && dateExpire && dateExpire > dateNow) {
            this.setState({
                userInfo: {
                    token: token,
                    user_id: Cookies.get('user_id'),
                    token_expire: dateExpire
                }
            })
        }
        if (token && dateExpire && dateExpire < dateNow)
        {
            toast.warning("Token expired");
        }
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header userInfo={this.state.userInfo} logout={this.logout}/>
                    <MDBContainer className="mt-5 pt-5">
                        <Main setUserInfo={this.setUserInfo}/>
                        <ToastContainer hideProgressBar={true}/>
                    </MDBContainer>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
