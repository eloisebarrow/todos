import React from 'react';
import './App.css';
import AddTodoForm from './components/AddTodoForm';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <h1>To Dos</h1>
      <AddTodoForm />
      <Todo />
    </div>
  );
}

export default App;
