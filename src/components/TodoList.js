import React from 'react'
import '../App.css'

export default function Todo({ todoList, handleMarkComplete, isTodoComplete }) {
  return (
    <div className="todo-list-container">
      <div>
        <h3>Here's what's left to do:</h3>
        <ul className="todo-list">
          { todoList && !isTodoComplete && todoList.map((todo, i) => {
            return (
              <li key={i}
                  onClick={() => handleMarkComplete(todo)}>{todo}</li>
            )
          })}
        </ul>
      </div>

      <div>
        <h3>Completed</h3>
        <ul className="todo-list">
          { todoList && isTodoComplete && todoList.map((todo, i) => {
            return (
              <li key={i}
                  onClick={() => handleMarkComplete(todo)}>{todo}</li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}