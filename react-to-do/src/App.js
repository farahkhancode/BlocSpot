import React, { Component } from 'react';
import './App.css';
 import ToDo from './components/ToDo.js';

class App extends Component {
  constructor(props) {
   super(props);
   this.state = {
  todos: [
    { description: 'Make dinner', isCompleted: true },
    { description: 'Help kids with homework', isCompleted: false },
    { description: 'Work on Bloc', isCompleted: false }
  ]
};
 }

  render() {
    return (
      <div className="App">
      <ul>
      { this.state.todos.map( (todo, index) =>
        <ToDo key={ index } description={ todo.description } isCompleted={ todo.isCompleted } />
      )}
    </ul>
  </div>

    );
  }
}

export default App;
