import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter} from 'react-router-dom';
import Main from './components/Main.js'
import Header from './components/Header.js'
import {Container} from "react-bootstrap";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header/>
                    <Container>
                        <Main/>
                    </Container>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
