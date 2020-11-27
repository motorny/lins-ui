import React, {Component} from 'react';
import ItemsContainer from './ItemsContainer';
import StoragesContainer from './StoragesContainer';
import {Switch, Route} from "react-router-dom";
import Login from "./Login";
import Register from "./Register"
import Profile from './Profile';
import SearchContainer from './SearchContainer';
import ItemDetailedContainer from "./ItemDetailedContainer";
import AddItemForm from "./AddItemForm";
import EditItemForm from "./EditItemForm";
import AddStoreForm from "./AddStoreForm";
import StorageDetailedContainer from "./StorageDetailedContainer";


class Main extends Component {

    state = {
        itemData: null
    };

    editItem = async (itemData) => {
        this.setState({itemData:itemData});

    };

    render() {
        return (
            <Switch>
                <Route exact path='/' component={SearchContainer}/>
                <Route path='/items/:id/edit'>
                    <EditItemForm itemData={this.state.itemData}/>
                </Route>
                <Route path='/items/:id'>
                    <ItemDetailedContainer editItem={this.editItem} userInfo={this.props.userInfo}/>
                </Route>
                <Route path='/items' component={ItemsContainer}/>
                <Route path='/storages/:id'>
                    <StorageDetailedContainer userInfo={this.props.userInfo}/>
                </Route>
                <Route path='/storages' component={StoragesContainer}/>
                <Route path='/login'>
                    <Login setUserInfo={this.props.setUserInfo}/>
                </Route>
                <Route path='/register' component={Register}/>
                <Route path='/profile' component={Profile}/>
                <Route path='/additem' component={AddItemForm}/>
                <Route path='/addstorage' component={AddStoreForm}/>
            </Switch>
        );
    }
}

export default Main;