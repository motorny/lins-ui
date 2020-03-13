import React, {Component} from "react";
import ItemCard from "./ItemCard";
import {getItems} from "../Api";
import PaginationContainer from "./PaginationContainer";

class ItemsListContainer extends Component {
    state = {
        data: null,
        perPage: 2,
        offset: 0,
    };

    getData = async (filter) => {
        const data = await getItems(filter, this.state.offset, this.state.perPage);
        this.setState({data});
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.filter !== this.props.filter ||
            prevState.offset !== this.state.offset ||
            prevState.perPage !== this.state.perPage) {
            this.getData(this.props.filter);
        }
        if (prevProps.filter !== this.props.filter){
            this.setState({offset:0});
        }

    }

    componentDidMount() {
        this.getData(this.props.filter);
    }

    paginate = (page) => {
        const offset = (page - 1) * this.state.perPage;
        this.setState({offset});
    };


    render() {
        const itemsData = this.state.data || {items:[], totalCnt:0};
        const pagesCnt = Math.max(1,Math.ceil(itemsData.totalCnt / this.state.perPage));
        return (
            <div>
                <div>
                    {itemsData.items.map(function (item, i) {
                        return <ItemCard item={item} key={i}/>;
                    })}
                </div>
                <PaginationContainer total={pagesCnt} paginate={this.paginate}/>
            </div>
        );
    }
}

export default ItemsListContainer;