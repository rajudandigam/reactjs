import React from 'react';
import TableOutput from './TableOutput'

class TableInputs extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			rowsCount: [],
			colsCount: [],
			table: {
				headers: [],
				rows: []
			}
		}

		this.createTable = this.createTable.bind(this);
	}
	createTable(event) {
		let rCount = this._rowsInput.value;
		let cCount = this._colsInput.value;
		let tableObj = { headers : [], rows: []};

		if(isNaN(rCount) || isNaN(cCount)) {
			this.setState({
				table: tableObj
			});
			return;
		}

		for(let i = 0; i<cCount; i++) {
			let headerObj = {
				name: "Header" + i
			}
			tableObj.headers.push(headerObj);
			tableObj.rows.push({cells: []});
			for(let j = 0; j<rCount; j++) {
				let cellObj = {
					name: "Cell " + i + j
				};
				tableObj.rows[i].cells.push(cellObj);
			}
		}
		this.setState({
			table: tableObj
		});
		event.preventDefault();
	}
	render() {
		return(
			<div className="table-inputs">
				<form onSubmit={this.createTable}>
					<div className="inputs">
						<input placeholder="Enter Rows Count" ref={(ip) => this._rowsInput = ip}></input>
						<input placeholder="Enter Coulmns Count" ref={(ip) => this._colsInput = ip}></input>
					</div>
					<button>Create Table</button>
				</form>
				<div className="table-output">
					<TableOutput table={this.state.table}/>
				</div>
			</div>
			);
	}
}

export default TableInputs;