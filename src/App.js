import React, { useState } from 'react';
import './App.css';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';

function App() {
  // HOOKS
  const [newTodo, setNewTodo] = useState({ 'content': '', 'isComplete': false })
  const [todoList, setTodoList] = useState([])

  const handleChange = (e) => {
    e.preventDefault()
    setNewTodo({ content: e.target.value, isComplete: false })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setTodoList(prevState => {
      return [ ...prevState, newTodo ]
    })
    setNewTodo({ content: '', isComplete: false })
  }

  const handleToggleComplete = (currentTodo) => {
    toggleComplete(currentTodo)
    setTodoList(prevState => {
      return [ ...prevState ]
    })
  }

  const toggleComplete = (currentTodo) => {
    currentTodo.isComplete = !currentTodo.isComplete
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
        todoList={todoList}
        handleToggleComplete={handleToggleComplete} />
    </div>
  );
}

export default App;