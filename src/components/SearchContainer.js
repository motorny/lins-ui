import React, {Component} from 'react';
import '../App.css';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "react-bootstrap/Form";
import {withRouter} from 'react-router-dom';

class SearchContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: '',
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

        this.props.history.push({
            pathname: '/items',
            search: '?filter=' + this.state.filter,
        });

    }

    render() {
        return (
            <Form inline onSubmit={this.handleSubmit}>
                <Form.Control type="text" placeholder="Search"
                              id="filter"
                              value={this.state.filter}
                              onChange={this.handleChange}/>
                <Button type="submit" variant="outline-success">Search</Button>
            </Form>
        );
    }
}

export default withRouter(SearchContainer);