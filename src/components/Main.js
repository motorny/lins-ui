import React, { Component } from 'react';
import {Container} from "react-bootstrap";
import ItemsListContainer from './ItemsListContainer';


class Main extends Component {


    render() {
        return (
            <Container>
                <ItemsListContainer data={this.props.data}/>
            </Container>
        );
    }
}

export default Main;