import React, {Component} from 'react';
import { Redirect } from 'react-router-dom'
import {Link} from 'react-router-dom';
import Cards from "./Cards/Cards";
import "./Credit.css";

class Credit extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
        item: "",
        amount: 0,
        }
    }
        
        handleItemChange = (event) => {
            console.log(event.target.value);
            this.setState({
                          item: event.target.value
                          })
        }
        
        handleAmountChange = (event) => {
            console.log(event.target.value);
            this.setState({
                          amount: event.target.value
                          })
        }
        
        handleSubmit = (e) => {
            e.preventDefault()
            this.props.handleAddNewCredit(this.state.item, this.state.amount);
        }
    
    
        render () {
            let credits = [];
            for (let i of this.props.credits){
                credits.push(
                            <Cards description = {i.description} amount = {i.amount} date = {i.date}></Cards>
                            );
            }
            
            return (
                    <div className = "main-credit">
                    <Link to ="/home">Home</Link>
                    <div><h1>Total Credit:</h1></div>
                    
                    <form onSubmit={this.handleSubmit}>
                    <div>
                    <label htmlFor="Credit">Item:</label>
                    <input type="text" onChange={this.handleItemChange}/>
                    </div>
                    <div>
                    <label htmlFor="Amount">Amount:</label>
                    <input type="text" onChange={this.handleAmountChange}/>
                    </div>
                    <button>Add Credit</button>
                    
                    </form>
                    <div className = "cards">
                    {credits}
                    
                    </div>
                    </div>
                    );
        }
}

export default Credit;
