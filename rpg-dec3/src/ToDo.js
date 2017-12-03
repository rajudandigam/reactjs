import React from 'react';
import ToDoList from './ToDoList'

class ToDo extends React.Component {
	render() {
		return(
			<div className="todo-container">
				<h4> 
					This is To Do Component
				</h4>
				<p>Please enter to do task</p>
				<ToDoList/>
			</div>
			);
	}
}

export default ToDo;