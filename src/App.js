import React, { useState } from 'react';
import './App.css';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';

function App() {
  // HOOKS
  const [newTodo, setNewTodo] = useState({ 'content': '', 'isComplete': false })
  const [todoList, setTodoList] = useState([])
  const [viewStatus, setViewStatus] = useState('To Do')

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
    currentTodo.isComplete = !currentTodo.isComplete
    setTodoList(prevState => {
      return [ ...prevState ]
    })
  }

  const toggleViewStatus = () => {
    if (viewStatus === 'To Do') {
      setViewStatus('Completed');
    } else {
      setViewStatus('To Do')
    }    
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
        handleToggleComplete={handleToggleComplete}
        viewStatus={viewStatus}
        toggleViewStatus={toggleViewStatus}
        />
    </div>
  );
}

export default App;