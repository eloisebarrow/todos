import React from 'react'

export default function AddTodoForm({ newTodo, handleChange, handleSubmit }) {
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input 
          placeholder="Add new todo"
          value={newTodo}
          onChange={(e) => handleChange(e)}
        />
        <button>Add</button>
      </form>
    </div>
  )
}
