import './App.css';
import React, { useState } from 'react';
import AddTodo from './components/AddTodo';
import List from './components/List'

function App() {
  const [todos, setTodos] = useState([])

  let updateTodos = (newTodo) => {
    const newList = [...todos, newTodo]
    setTodos(newList)
  }

  return (
    <div className="App">
      <AddTodo updateTodos={updateTodos} />
      <List currentTodos={todos} />

    </div>
  );
}

export default App;
