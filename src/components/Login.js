import React, { Component } from 'react';
import '../App.css';
import {Button, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "react-bootstrap/Form";
import Jumbotron from "react-bootstrap/Jumbotron";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Cookie from 'js-cookie';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:9000/auth' , {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(this.state),
        })
            .then((result) => result.json())
            .then((info) => {
                if(info.token) {
                    this.props.history.push({
                        pathname: '/profile',
                        state: { token: info.token }
                    });
                    Cookie.set('token', info.token);
                }
                console.log(info);
            });
    }

    render() {
        return (
            <Container>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Label>Account Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter account name"
                                      id="login"
                                      value={this.state.login}
                                      onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"
                                      id="password"
                                      value={this.state.password}
                                      onChange={this.handleChange}/>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <Jumbotron>
                    <h3>Do not have an account yet?</h3>
                    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Lol jk</Tooltip>}>
                        <span className="d-inline-block">
                            <Button disabled style={{ pointerEvents: 'none' }}>
                            Click here to register
                            </Button>
                        </span>
                        </OverlayTrigger>
                    </div>

                </Jumbotron>
            </Container>
        );
    }
}

export default Login;