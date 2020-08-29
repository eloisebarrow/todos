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

  const handleSubmit = (e) => {
    e.preventDefault()
    setTodoList(prevState => {
      return [ ...prevState, newTodo ]
    })
    setNewTodo('')
  }

  return (
    <div className="App">
      <h1>To Dos</h1>
      <AddTodoForm 
        newTodo={newTodo} 
        handleChange={handleChange}
        handleSubmit={handleSubmit} />
      <TodoList 
        newTodo={newTodo}
        todoStatus={todoStatus}
        setTodoStatus={setTodoStatus}
        todoList={todoList} />
    </div>
  );
}

export default App;