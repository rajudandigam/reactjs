import React from 'react';
import TableInputs from './TableInputs';

class DynamicTable extends React.Component {
	render() {
		return(
			<div className="dynamic-table">
				<h4> 
					This is Dynamic Table Component
				</h4>
				<p>Please enter below inputs</p>
				<TableInputs/>
			</div>
			);
	}
}

export default DynamicTable;