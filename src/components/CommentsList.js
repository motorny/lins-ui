import React, {Component} from "react";
import {
    MDBCard
} from 'mdbreact';
import {withRouter} from 'react-router-dom';
import CommentCard from "./CommentCard";
import AddCommentForm from "./AddCommentForm";

class CommentsList extends Component {

    render() {
        const comments = this.props.comments;
        if (!comments)
            return (<span>Loading...</span>);
        return (
            <div>
                <MDBCard>
                    <h1>Comments</h1>
                    {comments.count ? comments.comments.map((comment, i) => {
                        return <CommentCard comment={comment} key={i} user_id = {this.props.user_id}/>;
                    }) : (<span>No comments yet</span>)}
                </MDBCard>
                <MDBCard>
                    <AddCommentForm item_id = {this.props.item_id} user_id = {this.props.user_id}/>
                </MDBCard>
            </div>
        );
    }
}
export default withRouter(CommentsList);