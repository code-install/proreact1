import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// import 

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: "Jayant", 
      todoItems: [{ actions: "Buy Flowers", done: false },
                  { actions: "Get Shoes", done: false },
                  { actions: "Collect Tickets", done: false },
                  { actions: "Get Coffee", done: true }
                ], 
      newTextItem: ""
    }

  }

// change state data
// changeStateData = () => {
//   this.setState({
//     userName: this.state.userName === "Jayant" ? "Kalpana" : "Jayant"
//   })
 
// }

updateNewTextValue = (event) => {
  this.setState({
    newTextItem: event.target.value
  })
}

createNewTodo = () => {
  
    this.setState({
    todoItems: [...this.state.todoItems, 
      {actions: this.state.newTextItem, done: false}], 
      newTextItem: ""
      
  })

  }
  
  
todoTableRows = () => this.state.todoItems.map(item => 
    <tr key={item.actions}>
      <td>{item.actions}</td>
      <td>
        <input type="checkbox" checked={item.done}
        onChange={ () => this.toggleTodo(item)}
        />
      </td>
    </tr>
    
    )

  toggleTodo = (todo) => this.setState({
    todoItems: this.state.todoItems.map(item => item.actions === todo.actions ? 
    { ...item, done: !item.done } : item )
  
    }) 

  render = () =>
    
      <div>
        <h4 className="bg-primary text-white text-center p-2">
          {this.state.userName}'s Todo List
          ({this.state.todoItems.filter(t => !t.done).length} items to do)
        </h4>
        <div className="container-fluid">
          <div className="my-1">
            <input className="form-control"
              value={this.state.newTextItem}
              onChange={this.updateNewTextValue} />
            <button className="btn btn-primary mt-1" 
            onClick={this.createNewTodo}>
            Add
            </button>
          </div>
          <table className="table table-striped table-bordered">
            <thead>
              <tr><th>Description</th>
                  <th>Done</th>
              </tr>
            </thead>
            {/* displaying the todo items */}
            <tbody>{this.todoTableRows()}</tbody>
          </table>
        </div>
      </div>
     
  
}
 
export default App;