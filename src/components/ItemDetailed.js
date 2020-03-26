import React, {Component} from "react";
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBView,
    MDBCard,
    MDBTable,
    MDBTableBody,
    MDBCardBody,
    MDBCardTitle,
    MDBBadge,
    MDBCardText,
} from 'mdbreact';
import './ItemDetailed.css'
import ProfileHover from "./ProfileHover";

class ItemDetailed extends Component {


    render() {
        if (!this.props.item)
            return (<span>Loading...</span>);
        console.log(this.props.item);
        return (
            <MDBCard>
                <MDBRow>
                    <MDBCol sm="4" className="d-flex">
                        <MDBView hover zoom rounded className="w-100">
                            <img src={`http://127.0.0.1:9000${this.props.item.image_url}`} className="img-fluid"
                                 alt="" style={{width: "100%"}}/>
                        </MDBView>
                    </MDBCol>
                    <MDBCol>
                        <MDBCardBody className="px-sm-0">
                            <MDBCardTitle style={{fontSize: "2em"}}>{this.props.item.name}</MDBCardTitle>
                            <MDBContainer className="mx-0 px-0">
                                <MDBTable responsiveMd borderless className="right-details">
                                    <MDBTableBody>
                                        <tr>
                                            <td className="field-name align-text-bottom">Belongs to</td>
                                            <td><ProfileHover user={this.props.item.owner}/></td>
                                        </tr>
                                        <tr>
                                            <td className="field-name">Located in</td>
                                            <td>{this.props.item.location}</td>
                                        </tr>
                                        <tr>
                                            <td className="field-name">Status</td>
                                            <td>{this.props.item.status === 'free' ?
                                                <MDBBadge color="success">Free</MDBBadge>
                                                : <MDBBadge color="danger">Occupied</MDBBadge>}</td>
                                        </tr>
                                    </MDBTableBody>
                                </MDBTable>
                            </MDBContainer>
                        </MDBCardBody>

                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol>
                        <MDBCardBody>
                            <MDBCardText>

                                {this.props.item.description}
                            </MDBCardText>
                        </MDBCardBody>

                    </MDBCol>
                </MDBRow>
            </MDBCard>

        );
    }
}

export default ItemDetailed;