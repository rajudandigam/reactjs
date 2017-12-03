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
						<h4>Dynamic Table</h4>
					</li>
					<li>
						<h4>To Do</h4>
					</li>
				</ul>
			</div>
			);
	}
}

export default Home;