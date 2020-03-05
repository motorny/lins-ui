import React, {Component} from "react";

class Profile extends Component {

    constructor(props) {
        super(props);
        let token = 'Go login first you silly goose';
        if(props.location.state) {
            this.state = {
                token: props.location.state.token
            };
        }
        else this.state = {
            token: token
        };
    }

    render() {
        return (
            <h1> {this.state.token}</h1>
        );
    }
}

export default Profile;