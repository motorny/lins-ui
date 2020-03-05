import React, { Component } from 'react';
import {Container} from "react-bootstrap";
import ItemsListContainer from './ItemsListContainer';
import {Switch, Route} from "react-router-dom";
import Login from "./Login";
import Profile from './Profile';

class Main extends Component {


    render() {
        return (
            <Switch>
                <Route exact path='/' render={props => (<Container>
                    <ItemsListContainer data={this.props.data}/>
                </Container>)}/>
                <Route path='/login' component={Login}/>
                <Route path='/profile' component={Profile}/>
            </Switch>
        );
    }
}
/*
            <Container>
                <ItemsListContainer data={this.props.data}/>
            </Container>
 */
export default Main;