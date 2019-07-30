import React, {Component} from 'react';
import "./AccountBalance.css";


class AccountBalance extends Component {
    render () {
        return (
            <div>
                Balance: {this.props.accountBalance}<br></br>
                Debits: {this.props.debitTotal} <br></br>
            </div>
        );
    }
}

export default AccountBalance;