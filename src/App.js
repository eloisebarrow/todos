import React, { useState } from 'react';
import './App.css';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';

function App() {
  // HOOKS
  const [newTodo, setNewTodo] = useState('')
  const [isTodoComplete, setIsTodoComplete] = useState(false)
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

  const handleMarkComplete = (currentTodo) => {
    toggleComplete()
    setTodoList(prevState => {
      return [ ...prevState.filter(todo => todo !== currentTodo) ]
    })
  }

  const toggleComplete = () => {
    setIsTodoComplete(!isTodoComplete)
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
        handleMarkComplete={handleMarkComplete}
        isTodoComplete={isTodoComplete} />
    </div>
  );
}

export default App;