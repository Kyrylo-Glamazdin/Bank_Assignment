import React, {Component} from 'react';
import "./Cards.css"

class Cards extends Component {
    render () {
        return (
            <div className = "cards">
                <ul>
                    <li>{this.props.description}</li><br></br>
                    <li>${this.props.amount}</li><br></br>
                    <li>{this.props.date}</li>
                </ul>
                
            </div>
        );
    }
}

export default Cards;