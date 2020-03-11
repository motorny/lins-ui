import React, {Component} from "react";
import ItemCard from "./ItemCard";
import {getItems} from "../Api";


class ItemsListContainer extends Component {
    state = {
        data: null,
    };


    getData = async (filter) => {
        const items = await getItems(filter);
        this.setState({data: items.data.items});
    };

    componentDidUpdate(prevProps) {
        if (prevProps.filter !== this.props.filter) {
            this.getData(this.props.filter);
        }
    }

    componentDidMount() {
        this.getData(this.props.filter);
    }


    render() {
        const itemsArr = this.state.data || [];
        return (

            <div>
                {itemsArr.map(function (item, i) {
                    return <ItemCard data={item} key={i}/>;
                })}
            </div>
        );
    }
}

export default ItemsListContainer;