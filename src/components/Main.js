import React, {Component} from 'react';
import ItemsListContainer from './ItemsListContainer';
import {Switch, Route} from "react-router-dom";
import Login from "./Login";
import Profile from './Profile';
import SearchContainer from './SearchContainer';

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
                <Route path='/items' render={({location}) => {
                    const params = new URLSearchParams(location.search);
                    return (<div>
                        <SearchContainer/>
                        <ItemsListContainer filter={params.get("filter")}/>
                    </div>)
                }}/>
                <Route path='/login' render={(props) => <Login {...props} callback={this.state.callback} />}/>
                <Route path='/profile' component={Profile}/>
            </Switch>
        );
    }
}

export default Main;