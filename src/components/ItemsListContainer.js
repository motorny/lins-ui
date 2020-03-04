import React, {Component} from "react";
import ItemCard from "./ItemCard";
import {getItems} from "../Api";

class ItemsListContainer extends Component {
    state = {
        data: null,
    };

    getData = async () => {
        const items = await getItems();
        this.setState({ data: items.data.items });
    };

    componentDidMount() {
        this.getData();
    }

    render() {
        const itemsArr = this.state.data || [];
        return (
            <div>
            { itemsArr.map(function(item, i){
                    return <ItemCard data={item} key={i}/>;
                })}
            </div>
            );
    }
}

export default ItemsListContainer;