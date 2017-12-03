import React from 'react';

class TableOutput extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.getHeaderRows = this.getHeaderRows.bind(this);
		this.getBodyRows = this.getBodyRows.bind(this);
		this.getTableCells = this.getTableCells.bind(this);
	}
	getHeaderRows(header) {
		return(
			<th key={Math.ceil(Math.random() * 1000)}>
				{header.name}
			</th>
			);
	}
	getBodyRows(tableRow) {
		return(
			<tr key={Math.ceil(Math.random() * 1000)}>
				{tableRow.cells.map(this.getTableCells)}
			</tr>
		)
	}
	getTableCells(cellObj) {
		return(
			<td key={Math.ceil(Math.random() * 1000)}>
				{cellObj.name}
			</td>
		)
	}
	render() {
		if(this.props.table.headers.length === 0) {
			return(
				<div>Please enter valid rows count and columns count</div>
			);
		}
		return(
				<table>
					<thead><tr>{this.props.table.headers.map(this.getHeaderRows)}</tr></thead>
					<tbody>{this.props.table.rows.map(this.getBodyRows)}</tbody>
				</table>
			);
	}
}

export default TableOutput;