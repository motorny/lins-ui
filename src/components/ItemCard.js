import React, {Component} from "react";
import {
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBCardTitle,
    MDBCardText,
} from "mdbreact";
import {Link} from 'react-router-dom';
import './ItemCard.css';

class ItemCard extends Component {
    image_url;

    render() {
        const item = this.props.item;
        return (
            <MDBCard className="flex-row flex-wrap my-3">
                <Link to={`/items/${this.props.item.id}`}><MDBCardImage className="img-fluid"
                                                                        src={`http://127.0.0.1:9000${item.image_url}`}
                                                                        alt=""/></Link>
                <MDBCardBody>
                    <MDBCardTitle ><Link className="item-card-title" to={`/items/${this.props.item.id}`}>{item.name}</Link></MDBCardTitle>
                    <MDBCardText>
                        {item.description || 'No description so far...'}
                    </MDBCardText>
                    <Link to={`/items/${this.props.item.id}`}><MDBBtn>View it!</MDBBtn></Link>
                </MDBCardBody>
            </MDBCard>
        );
    }
}

export default ItemCard;