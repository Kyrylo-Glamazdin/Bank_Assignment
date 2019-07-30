import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import {Link} from 'react-router-dom';
import Cards from "./Cards/Cards";
import "./Debit.css";

class Debit extends Component {
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
        this.props.handleAddNewDebit(this.state.item, this.state.amount);
    }
   
    render () {
        let debits = [];
        for (let i of this.props.debits){
            debits.push(
            <Cards description = {i.description} amount = {i.amount} date = {i.date}></Cards>
            );
        }
        
        return (
            <div className = "main-debit">
                <Link to ="/home">Home</Link>
                <div><h1>Total Debit:</h1></div>
                
                <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="Debit">Item:</label>
                    <input type="text" onChange={this.handleItemChange}/>
                </div>
                <div>
                    <label htmlFor="Amount">Amount:</label>
                    <input type="text" onChange={this.handleAmountChange}/>
                </div>
                <button>Add Debit</button>
          
                </form>
                <div className = "cards">
                    {debits}
                   
                </div>
            </div>
        );
    }
}



export default Debit;