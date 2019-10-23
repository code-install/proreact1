import React, { Component } from 'react'

// input div 
// set the state by defining empty string 
// does not have to be the same as the main array 

class TodoCreator extends Component {
    constructor(props) {
        super(props)
        this.state = { newTextItem: ""}
    }

    updateNewTextValue = (event) => {
        this.setState({
           newTextItem: event.target.value
        })
    } 

    createNewTodo = () => {
        this.props.callback(this.state.newTextItem)
        this.setState({ newTextItem: "" })
    }
    render = () => 
    <div className="my-1">
        <input className="form-control" value={this.state.newTextItem} 
        onChange={this.updateNewTextValue}
        />
        <button className="btn btn-primary my-1"
        onClick={this.createNewTodo} >
        Add
        </button>
    </div>
}

export default TodoCreator
