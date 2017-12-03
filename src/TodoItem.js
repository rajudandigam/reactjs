import React from 'react';

class TodoItem extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.createTasks = this.createTasks.bind(this);
		this.deleteLi = this.deleteLi.bind(this);
	}
	deleteLi(key) {
		console.log("going to delete from item");
		this.props.deleteLi(key);
	}
	createTasks(item) {
		return <li key={item.key} onClick={(e) => this.deleteLi(item.key, e)} className="task-item">{item.text}</li>
	}
	render() {
		var todoEntries = this.props.entries;
		var listItems = todoEntries.map(this.createTasks);
		
		return(
			<ul className="list-items">
				{listItems}
			</ul>
		);
	}
};

export default TodoItem;