import React, { useState } from 'react';
import './App.css';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';

function App() {
  // HOOKS
  const [newTodo, setNewTodo] = useState('')
  const [todoStatus, setTodoStatus] = useState('Incomplete')
  const [todoList, setTodoList] = useState([])

  const handleChange = (e) => {
    e.preventDefault()
    setNewTodo(e.target.value)
  }

  return (
    <div className="App">
      <h1>To Dos</h1>
      <AddTodoForm 
        newTodo={newTodo} 
        setNewTodo={setNewTodo}
        handleChange={handleChange} />
      <TodoList 
        newTodo={newTodo}
        todoStatus={todoStatus}
        setTodoStatus={setTodoStatus} />
    </div>
  );
}

export default App;
