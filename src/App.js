import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([])

  const getUsers = async () => {
    let response = await fetch('https://randomuser.me/api/?results=10')
    if (response.status < 400) {
      let json = await response.json()
      setData(json.results)
    } else {
      return new Promise.reject(new Error('request failed'))
    }
  }

  useEffect(() => {
    getUsers()
  }, [])

  const handleRemoveUser = (firstName) => {
    const newUsers = data.filter(person => person.name.first !== firstName)
    setData(newUsers)
  }
  
  return (
    <div className="App">
        <h2>Users</h2>
        <ul className="users-list">
          { data && data.map((person, u) => {
            return (
              <li onClick={() => handleRemoveUser(person.name.first)}>{person.name.first} {person.name.last}</li>
            )
          })}
        </ul>
    </div>
  );
}

export default App;