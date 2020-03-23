import React, {Component} from "react";

import {withRouter} from 'react-router'
import ItemDetailed from "./ItemDetailed";
import {getItemDetails} from "../Api";


class ItemDetailedContainer extends Component {
    state = {
        item: null,
    };

    componentDidMount() {
        const id = this.props.match.params.id;
        this.fetchData(id);
    }

    fetchData = async (id) => {
        const item = await getItemDetails(id);
        this.setState({item});
    };



    render() {
        return (
            <ItemDetailed item={this.state.item}/>
        );
    }
}

export default withRouter(ItemDetailedContainer);