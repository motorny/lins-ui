import React, {Component} from 'react';
import ItemsContainer from './ItemsContainer';
import StoragesContainer from './StoragesContainer';
import {Switch, Route} from "react-router-dom";
import Login from "./Login";
import Profile from './Profile';
import SearchContainer from './SearchContainer';
import ItemDetailedContainer from "./ItemDetailedContainer";
import AddItemForm from "./AddItemForm";
import AddStoreForm from "./AddStoreForm";
import StorageDetailedContainer from "./StorageDetailedContainer";


class Main extends Component {

    render() {
        return (
            <Switch>
                <Route exact path='/' component={SearchContainer}/>
                <Route path='/items/:id'>
                    <ItemDetailedContainer userInfo={this.props.userInfo}/>
                </Route>
                <Route path='/items' component={ItemsContainer}/>
                <Route path='/storages/:id'>
                    <StorageDetailedContainer userInfo={this.props.userInfo}/>
                </Route>
                <Route path='/storages' component={StoragesContainer}/>
                <Route path='/login'>
                    <Login setUserInfo={this.props.setUserInfo}/>
                </Route>
                <Route path='/profile' component={Profile}/>
                <Route path='/additem' component={AddItemForm}/>
                <Route path='/addstorage' component={AddStoreForm}/>
            </Switch>
        );
    }
}

export default Main;