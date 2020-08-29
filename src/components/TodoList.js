import React from 'react'
import '../App.css'

export default function Todo({ todoList }) {
  return (
    <div className="todo-list-container">
      <h3>Here's what's left to do:</h3>
      <ul className="todo-list">
        { todoList && todoList.map((todo, i) => {
          return (
            <li key={i}>{todo}</li>
          )
        })}
      </ul>
      {/* <h3>Status</h3> */}
    </div>
  )
}
