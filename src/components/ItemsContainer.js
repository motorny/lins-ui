/*

This container holds all elements on Items page:
- Search bar
- List of items
 */

import React, {Component} from "react";
import {getItems} from "../Api";
import ItemsList from "./ItemsList";
import SearchBar from "./SearchBar";


class ItemsContainer extends Component {
    /*
    Draws a search bar and a list of items
    Tries to init filter value from URL query parameters
     */
    state = {
        filter: null,
    };

    filterChanged = (filterValue, enterHit) => {
        if (enterHit) {
            this.props.history.push({
                search: '?filter=' + filterValue,
            });
        } else {
            this.setState({filter: filterValue});
        }

    };

    getItemsLoader(filter) {
       return async (offset, limit) => getItems(filter, offset, limit);
    }

    componentDidMount() {
        const params = new URLSearchParams(this.props.location.search);
        this.setState({filter: params.get("filter")});
    }

    render() {
        return (
            <div>
                <SearchBar onSearchChange={this.filterChanged}/>
                <ItemsList loader={this.getItemsLoader(this.state.filter)}/>
            </div>
        );
    }
}

export default ItemsContainer;