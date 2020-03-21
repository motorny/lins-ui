import React, {Component} from 'react';
import ItemsContainer from './ItemsContainer';
import {Switch, Route} from "react-router-dom";
import Login from "./Login";
import Profile from './Profile';
import SearchContainer from './SearchBar';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
          callback: this.props.callbackFromParent,
        };
    }

    render() {
        return (
            <Switch>
                <Route exact path='/' component={SearchContainer}/>
                <Route path='/items' component={ItemsContainer}/>
                <Route path='/login' render={(props) => <Login {...props} callback={this.state.callback} />}/>
                <Route path='/profile' component={Profile}/>
            </Switch>
        );
    }
}

export default Main;