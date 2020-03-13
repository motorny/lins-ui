import React, {Component} from "react";
import {Pagination} from "react-bootstrap";

class PaginationContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: props.active || 1
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.total !== this.props.total) {
            this.setState({active: 1});
        }
    }

    render() {
        const items = [];
        for (let number = 1; number <= this.props.total; number++) {
            items.push(
                <Pagination.Item onClick={() => {
                    this.props.paginate(number);
                    this.setState({active: number})
                }} key={number}
                                 active={number === this.state.active}>
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

export default PaginationContainer;