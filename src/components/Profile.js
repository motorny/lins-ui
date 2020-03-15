import React, {Component} from "react";
import Cookie from 'js-cookie';

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            token: 'not signed in',
        };
    }

    componentDidMount() {
        if(Cookie.get('token')) {
            console.log('token acquired');
            this.setState({
                token: Cookie.get('token')
            });
        }
    }

    render() {
        return (
            <h1> Token that is saved in cookies: {this.state.token}</h1>
        );
    }
}

export default Profile;