import React from 'react'

export default function AddTodoForm({ newTodo, setNewTodo, handleChange }) {
  return (
    <div>
      <form>
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
