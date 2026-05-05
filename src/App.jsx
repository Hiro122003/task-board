import { useState } from 'react'
import './App.css'

let nextId = 1

export default function App() {
  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState('')

  function addTask() {
    const text = input.trim()
    if (!text) return
    setTasks([...tasks, { id: nextId++, text, done: false }])
    setInput('')
  }

  function toggleTask(id) {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t))
  }

  function deleteTask(id) {
    setTasks(tasks.filter(t => t.id !== id))
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') addTask()
  }

  return (
    <div className="board">
      <h1 className="board__title">タスクボード</h1>

      <div className="board__input-row">
        <input
          className="board__input"
          type="text"
          placeholder="タスクを入力..."
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className="board__add-btn" onClick={addTask}>追加</button>
      </div>

      {tasks.length === 0 ? (
        <p className="board__empty">タスクがありません</p>
      ) : (
        <ul className="task-list">
          {tasks.map(task => (
            <li key={task.id} className={`task-item${task.done ? ' task-item--done' : ''}`}>
              <input
                type="checkbox"
                className="task-item__checkbox"
                checked={task.done}
                onChange={() => toggleTask(task.id)}
              />
              <span className="task-item__text">{task.text}</span>
              <button
                className="task-item__delete-btn"
                onClick={() => deleteTask(task.id)}
                aria-label="削除"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
