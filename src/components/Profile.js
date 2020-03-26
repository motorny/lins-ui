import React, {Component} from "react";
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import pic from './bg1.jpg';
import ItemsList from "./ItemsList";


class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user_id: 0,
            avatar: 0,
            gradientPic: 0, //TODO
            username: 0,
            location: 0,
            role: 0,
            contact: 0,
            points: 0,
            createdAt: 0,
            items: [],
            perPage: 2,
            offset: 0,
            pagesCnt: 0,
        }
        //Cookie.get('token');
    }


    componentWillReceiveProps(nextProps, nextContext) {
        const user_id = this.props.history.location.pathname.match(/(\d+)/)[0];
        fetch('http://localhost:9000/profile/' + user_id , {
            method: "GET",
            headers: {
                'Content-type': 'application/json'
            },
        })
            .then((result) => result.json())
            .then((info) =>  {
                console.log(info);
                const i_pagesCnt = Math.max(1,Math.ceil(info.items.length / this.state.perPage));
                this.setState({
                    user_id: user_id,
                    avatar: info.user.image_url,
                    gradientPic: pic, //TODO
                    username: info.user.username,
                    location: info.user.location,
                    role: info.user.isAdmin,
                    contact: info.user.contact,
                    points: info.user.points,
                    createdAt: info.user.createdAt,
                    items: info.items,
                    pagesCnt: i_pagesCnt,
                });
            });
    }


    render() {
        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol>
                        <div className="card">
                            <img className="card-img-top h-50" src={pic} alt="Card cap"></img>
                                <div className="card-body">
                                    <MDBRow>
                                        <MDBCol> <img src={pic} className="img-thumbnail" alt="Cinque Terre"></img></MDBCol>
                                        <MDBCol>
                                            {this.state.username}
                                            <p>joined: {this.state.createdAt}</p>
                                        </MDBCol>
                                    </MDBRow>
                                </div>
                                <div className="card-body">
                                    <a href="/" className="card-link">Location: {this.state.location}</a>
                                    <a href="/" className="card-link">Contacts: {this.state.contact}</a>
                                </div>
                        </div>
                    </MDBCol>
                    <MDBCol>
                        <div className="card">
                            <div className="card-header">
                                Items
                            </div>
                            <div className="card-body">
                                <ItemsList pagination={false} data={this.state.items}/>
                            </div>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

        );
    }
}

export default Profile;