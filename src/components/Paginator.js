import React, {Component} from "react";
import {Pagination} from "react-bootstrap";

class Paginator extends Component {

    render() {
        const items = [];
        for (let number = 1; number <= this.props.total; number++) {
            items.push(
                <Pagination.Item onClick={() => {
                    this.props.paginate(number);
                    this.setState({active: number})
                }} key={number} active={number === this.props.active}>
                    {number}
                </Pagination.Item>,
            );
        }

        return (
            <div>
                <Pagination>{items}</Pagination>
                <br/>
            </div>
        );
    }
}

export default Paginator;