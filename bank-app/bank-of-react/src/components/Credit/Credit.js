import React, {Component} from 'react';
import { Redirect } from 'react-router-dom'
import {Link} from 'react-router-dom';
import "./Credit.css";

class Credit extends Component {
    render () {
        return (
            <div>
                <Link to ="/home">Home</Link>
                <div><h1>Total Credit:</h1></div>
            </div>
            
        );
    }
}

export default Credit;