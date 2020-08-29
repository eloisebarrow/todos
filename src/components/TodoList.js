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
      <div className={ viewStatus === 'To Do' ? 'all-todos-container focus-todos-container' : 'all-todos-container' }>
        <h3 onClick={() => toggleViewStatus()}>To Do</h3>
        <ul className="todo-list">
          { viewStatus === 'To Do' ? incompleteTodos : null }
        </ul>
      </div>
      <div className={ viewStatus === 'Completed' ? 'all-todos-container focus-completed-container' : 'all-todos-container' }>
        <h3 onClick={() => toggleViewStatus()}>Completed</h3>
        <ul className="todo-list">
          { viewStatus === 'Completed' ? completedTodos : null }
        </ul>
      </div>  
    </div>
  )
}