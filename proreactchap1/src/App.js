import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// import
import TodoBanner from './components/TodoBanner.jsx';
import TodoRow from './components/TodoRow.jsx';
import TodoCreator from './components/TodoCreator.jsx';
import VisibilityControl from './components/VisibilityControl.jsx'

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userName: 'Jayant',
			todoItems: [
				{ actions: 'Buy Flowers', done: false },
				{ actions: 'Get Shoes', done: false },
				{ actions: 'Collect Tickets', done: false },
				{ actions: 'Get Coffee', done: true }
			], 
      showCompleted: true
			// empty variable to store user value
			// newTextItem: ''
		};
	}
	// displaying dynamic contents
	// change state data
	// changeStateData = () => {
	//   this.setState({
	//     userName: this.state.userName === "Jayant" ? "Kalpana" : "Jayant"
	//   })

	// }

	// method to grab the user value event.target and storing in a variable
	updateNewTextValue = (event) => {
		this.setState({
			newTextItem: event.target.value
		});
	};

	// method to creat a new post in an existing array and clearing the input field
	createNewTodo = (task) => {
		this.setState({
			todoItems: [ ...this.state.todoItems, { actions: task, done: false } ]
		});
	};

	// method to display value in the table by using map method and creating completed handler function. Checked is a prop
	todoTableRows = () => this.state.todoItems.map((item => <TodoRow key={item.actions} item={item} callback={this.toggleTodo} />));

	// Checkbox button call to check completed todos and set it true or else return existing todos
	toggleTodo = (todo) =>
		this.setState({
			todoItems: this.state.todoItems.map(
				(item) => (item.actions === todo.actions ? { ...item, done: !item.done } : item)
			)
		});

	// // render = () => (
	// // 	<div>
	// 		{/* <h4 className="bg-primary text-white text-center p-2">
	// 			{this.state.userName}'s Todo List */}
	// 		{/* filter method to update remaining todos
	// 			({this.state.todoItems.filter((t) => !t.done).length} items to do)
	// 		</h4> */}

	// 		{/* <div className="container-fluid">
	// 			<div className="my-1">
	// 				<input className="form-control" value={this.state.newTextItem} onChange={this.updateNewTextValue} />
	// 				<button className="btn btn-primary mt-1" onClick={this.createNewTodo}>
	// 					Add
	// 				</button>
	// 			</div>
	// 			<table className="table table-striped table-bordered">
	// 				<thead>
	// 					<tr>
	// 						<th>Description</th>
	// 						<th>Done</th>
	// 					</tr>
	// 				</thead>
	// 				{/* displaying the todo items function */}
	// // 				<tbody>{this.todoTableRows()}</tbody>
	// // 			</table>
	// // 		</div>
	// // 	</div>
	// // ); */}

	render = () => (
		<div>
			{/* pass the props */}
			<TodoBanner userName={this.state.userName} todoItems={this.state.todoItems} />
			<div className="container-fluid">
				<TodoCreator callback={this.createNewTodo} />
				<table className="table table-striped table bordered">
					<thead>
						<tr>
							<th>Description</th>
							<th>Done</th>
						</tr>
					</thead>
					<tbody>{this.todoTableRows()}</tbody>
				</table>
			</div>
		</div>
	);
}




export default App
