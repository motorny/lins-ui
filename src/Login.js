import React, { Component } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "react-bootstrap/Form";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
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
        fetch('http://localhost:9000/register' , {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(this.state),
        })
            .then((result) => result.json())
            .then((info) => { console.log(info); })
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
            <Form.Group>
                <Form.Label>Account Name</Form.Label>
                <Form.Control type="text" placeholder="Enter account name"
                              id="username"
                              value={this.state.username}
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
        );
    }
}

export default Login;