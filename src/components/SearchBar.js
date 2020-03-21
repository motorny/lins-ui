import React, {Component} from 'react';
import '../App.css';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "react-bootstrap/Form";
import {withRouter} from 'react-router-dom';

class SearchBar extends Component {
    state = {
        searchStr: ""
    };

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
        this.props.onSearchChange(event.target.value, false);
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSearchChange(this.state.searchStr, true);
    };

    render() {
        return (
            <Form inline onSubmit={this.handleSubmit}>
                <Form.Control type="text" placeholder="Search"
                              id="searchStr"
                              value={this.state.searchStr}
                              onChange={this.handleChange}/>
                <Button type="submit" variant="outline-success">Search</Button>
            </Form>
        );
    }
}

export default withRouter(SearchBar);