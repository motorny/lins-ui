import React, {Component} from 'react';
import ItemsListContainer from './ItemsListContainer';
import {Switch, Route} from "react-router-dom";
import Login from "./Login";
import Profile from './Profile';
import SearchContainer from './SearchContainer';

class Main extends Component {


    render() {
        return (
            <Switch>
                <Route exact path='/' component={SearchContainer}/>
                <Route path='/items' render={({data, location}) => {
                    const params = new URLSearchParams(location.search);
                    return (<div>
                        <SearchContainer/>
                        <ItemsListContainer data={data} filter={params.get("filter")}/>
                    </div>)
                }}/>
                <Route path='/login' component={Login}/>
                <Route path='/profile' component={Profile}/>
            </Switch>
        );
    }
}

export default Main;