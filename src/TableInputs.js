import React from 'react';

class TableInputs extends React.Component {
	render() {
		return(
			<div className="table-inputs">
				<form>
					<div className="inputs">
						<input placeholder="Enter Rows Count"></input>
						<input placeholder="Enter Coulmns Count"></input>
					</div>
					<button>Create Table</button>
				</form>
			</div>
			);
	}
}

export default TableInputs;