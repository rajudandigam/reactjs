import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './index.css';
import Home from './Home';
import DynamicTable from './DynamicTable';
import ToDo from './ToDo';

class Header extends React.Component {
	render() {
		return(
			<Router>
				<div>
					<nav className="navbar">
						<Link to="/" className="active"> Home </Link>
						<Link to="/dynamictable"> Dynamic Table </Link>
						<Link to="/todo"> To Do </Link>
					</nav>

					<Route exact path="/" component={Home} />
					<Route path="/dynamictable" component={DynamicTable} />
					<Route path="/todo" component={ToDo} />
				</div>
			</Router>
		);
	}
}

export default Header;