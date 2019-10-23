import React, { Component } from 'react'

class TodoBanner extends Component {
    
  render = () => 
  <h4 className="bg-primary text-white- text-center p2">
    {this.props.userName}'s Todo List'
    ({this.props.todoItems.filter(items => !items.done).length} items to do)
     
  </h4> 
}

export default TodoBanner
