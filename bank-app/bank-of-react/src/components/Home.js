import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

class Home extends Component{
	render(){
		return(
			<div>
				<img src="https://s17026.pcdn.co/wp-content/uploads/sites/9/2018/08/Business-bank-account-e1534519443766.jpeg" alt="bank" />
				<h1>Bank of React </h1>

				<Link to="/userProfile">User Profile </Link>

				<AccountBalance accountBalance={this.props.accountBalance} />
			</div>
			);
	}
}

export default Home;