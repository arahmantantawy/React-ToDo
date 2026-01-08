import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect, useMemo, useState } from "react"


function App() {
  // this stores all todos
  const [todos, setTodos] = useState([])

  // this stores what the user types
  const [text, setText] = useState("")

  function addTodo() {
    if (text === "") return

    setTodos([...todos, text])
    setText("")
  }

  function deleteTodo(index) {
    const newTodos = todos.filter((_, i) => i !== index)
    setTodos(newTodos)
  }

  return (
    <div className="page">
      <h1>Simple To Do List</h1>

      <div className="input-row">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type a task..."
        />
        <button onClick={addTodo}>Add</button>
      </div>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => deleteTodo(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App