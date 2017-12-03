import React from 'react';
import TodoItem from './TodoItem';

class ToDoList extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			items: []
		}

		this.addItem = this.addItem.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
	}
	deleteItem(key) {
		console.log("Deleting from list", key);
		var filteredItems = this.state.items.filter((item) => item.key !== key);

		this.setState({
			items: filteredItems
		})

	}
	addItem(e) {
		var itemArray = this.state.items;
		console.log(this._inputElement.__proto__)

		if(this._inputElement.value !== '') {
			itemArray.unshift(
				{
					text: this._inputElement.value,
					key: Date.now() 
				}
			);
		}

		this.setState({
			items: itemArray
		});

		this._inputElement.value = '';

		console.log('Added Item into state ', itemArray);

		e.preventDefault();
	}
	render() {
		return (
			<div className="todoListMain">
				<div className="header">
					<h2>To Do</h2>
					<form onSubmit={this.addItem}>
						<input ref={(a) => this._inputElement = a} placeholder="enter task">
						</input>
						<button type="submit">Add</button>
					</form>
					<TodoItem entries={this.state.items} deleteLi={this.deleteItem}/>
				</div>
			</div>
		);
	}
};

export default ToDoList;