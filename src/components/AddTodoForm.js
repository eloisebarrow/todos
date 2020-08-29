import React from 'react'

export default function AddTodoForm({ newTodo }) {
  return (
    <div>
      <form>
        <input 
          placeholder="Add new todo"
          value={newTodo}
        />
        <button>Add</button>
      </form>
    </div>
  )
}
