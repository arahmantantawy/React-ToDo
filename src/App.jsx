import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect, useMemo, useState } from "react"


function App() {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState("")

  function addTodo() {
    if (text.trim() === "") return

    setTodos([
      ...todos,
      {
        text: text,
        completed: false,
      },
    ])
    setText("")
  }

  function toggleTodo(index) {
    const newTodos = [...todos]
    newTodos[index].completed = !newTodos[index].completed
    setTodos(newTodos)
  }

  function deleteTodo(index) {
    const newTodos = todos.filter((_, i) => i !== index)
    setTodos(newTodos)
  }

  function clearCompleted() {
    const newTodos = todos.filter((todo) => !todo.completed)
    setTodos(newTodos)
  }

  const remaining = todos.filter((todo) => !todo.completed).length

  return (
    <div className="page">
      <h1>Simple To Do List</h1>
      <p className="subtitle">
        {remaining} task{remaining !== 1 ? "s" : ""} remaining
      </p>

      <div className="input-row">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task..."
          onKeyDown={(e) => e.key === "Enter" && addTodo()}
        />
        <button onClick={addTodo}>Add</button>
      </div>

      <ul>
        {todos.map((todo, index) => (
          <li key={index} className={todo.completed ? "done" : ""}>
            <span onClick={() => toggleTodo(index)}>{todo.text}</span>
            <button onClick={() => deleteTodo(index)}>✕</button>
          </li>
        ))}
      </ul>

      {todos.length > 0 && (
        <button className="clear" onClick={clearCompleted}>
          Clear completed
        </button>
      )}
    </div>
  )
}

export default App