import React from 'react';

class Home extends React.Component {
	render() {
		return(
			<div>
				<h2> 
					Welcome to My React Play Ground
				</h2>
				<hr />
				<p> Currently it has two components</p>
				<ul>
					<li>
						<a href="/dynamictable">Dynamic Table</a>
					</li>
					<li>
						<a href="/todo">To Do</a>
					</li>
				</ul>
			</div>
			);
	}
}

export default Home;