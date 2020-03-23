import React, {Component} from "react";
import {MDBContainer, MDBRow, MDBCol, MDBView, MDBMask} from 'mdbreact';


class ItemDetailed extends Component {


    render() {
        if (!this.props.item)
            return (<span>Loading...</span>);

        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol size="4">
                        <MDBView hover zoom>
                            <img src={`http://127.0.0.1:9000${this.props.item.image_url}`} className="img-fluid"
                                 alt=""/>
                            <MDBMask className="flex-center">
                                <p className="black-text">Zoom effect</p>
                            </MDBMask>
                        </MDBView>
                    </MDBCol>
                    <MDBCol>
                        {this.props.item.name}
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol>

                        {this.props.item.description}
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

        );
    }
}

export default ItemDetailed;