import React, { useState } from 'react';
import './App.css';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';

function App() {

  const [newTodo, setNewTodo] = useState('')
  const [todoStatus, setTodoStatus] = useState('Incomplete')

  return (
    <div className="App">
      <h1>To Dos</h1>
      <AddTodoForm 
        newTodo={newTodo} 
        setNewTodo={setNewTodo} />
      <TodoList />
    </div>
  );
}

export default App;
