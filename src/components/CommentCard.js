import React, {Component} from "react";
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText, MDBBtn,
} from "mdbreact";
import {toast} from "react-toastify";
import {deleteComment} from "../Api";

class CommentCard extends Component {

    deleteComment = async () => {
        const resp = await deleteComment(this.props.comment.id);
        if (resp) {
            toast.success(`Comment deleted`);
        }
    };

    render() {
        const comment = this.props.comment;
        return (
            <MDBCard className="d-flex flex-row flex-wrap my-3">
                <MDBCardBody>
                    <MDBCardTitle >
                        {comment.title || 'No title, kek...'}
                    </MDBCardTitle>
                    <MDBCardText>
                        {comment.comment || 'No comment yet...'}
                    </MDBCardText>
                    {this.props.comment.user_id === this.props.user_id &&
                    <MDBBtn onClick={this.deleteComment} outline color="danger">
                        Delete
                    </MDBBtn>}
                </MDBCardBody>
            </MDBCard>
        );
    }
}

export default CommentCard;