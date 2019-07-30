import React, {Component} from 'react';
import LogIn from "../LogIn/LogIn";
import {Link} from 'react-router-dom';
import "./UserProfile.css";

class UserProfile extends Component {
    render () {
        return (
            <div className = "user">
                <Link to ="/home">Home</Link>
                <h1>User Profile</h1>
                <div>Username: {this.props.userName}</div>
                <div>Member Since: {this.props.memberSince}</div>

                <Link to ="/">Logout</Link>              
            </div>
        );
    }
}

export default UserProfile;