import React from 'react'
import '../App.css'

export default function Todo({ todoList, handleToggleComplete }) {
  return (
    <div className="todo-list-container">
      <div>
        <h3>Here's what's left to do:</h3>
        <ul className="todo-list">
          { todoList && todoList.map((todo, i) => {
            if (!todo.isComplete) {
            return (
              <li key={i}
                  onClick={() => handleToggleComplete(todo)}>{todo.content}</li>
            )
            }
          })}
        </ul>
      </div>

      <div>
        <h3>Completed</h3>
        <ul className="todo-list">
          { todoList && todoList.map((todo, i) => {
            if (todo.isComplete) {
              return (
                <li key={i}
                    onClick={() => handleToggleComplete(todo)}>{todo.content}</li>
              )
            }
          })}
        </ul>
      </div>
    </div>
  )
}