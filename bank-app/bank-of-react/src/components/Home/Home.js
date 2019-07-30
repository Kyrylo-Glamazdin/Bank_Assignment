import React, {Component} from 'react';
import AccountBalance from "../AccountBalance/AccountBalance";
import {Link} from 'react-router-dom';
import "./Home.css";

class Home extends Component {
    render () {
        return (
            <div className = "home">
              <h1>Bank of Narnia</h1>
              
              <Link to ="/userProfile">User Profile</Link>
              <AccountBalance accountBalance = {this.props.accountBalance} debitTotal = {this.props.debitTotal}/>
              <strong>Debit Total: {this.props.debitTotal}</strong><br></br>
              <Link to ="/debit">Debit</Link><br></br>
              <Link to ="/credit">Credit</Link>
            </div>
        );
    }
}

export default Home;