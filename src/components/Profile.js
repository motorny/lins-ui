import React, {Component} from "react";
import Cookie from 'js-cookie';

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            token: 'not signed in',
        };
    }

    render() {
        return (
            <h1> Token that is saved in cookies: {Cookie.get('token')}</h1>
        );
    }
}

export default Profile;