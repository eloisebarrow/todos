import React from 'react'
import '../App.css'

export default function Todo({ todoList, handleToggleComplete, viewStatus, toggleViewStatus }) {
  const completedTodos = todoList.filter(todo => todo.isComplete).map((todo, i) => {
    return (
      <li key={i}
          onClick={() => handleToggleComplete(todo)}>{todo.content}</li>
    )
  })

  const incompleteTodos = todoList.filter(todo => !todo.isComplete).map((todo, i) => {
    return (
      <li key={i}
          onClick={() => handleToggleComplete(todo)}>{todo.content}</li>
    )
  })

  return (
    <div className="todo-list-container">
      
      <div>
        <h3 onClick={() => toggleViewStatus()}>{viewStatus}</h3>
        <ul className="todo-list">
          { viewStatus === 'To Do' ? incompleteTodos : completedTodos }
        </ul>
      </div>      
    </div>
  )
}