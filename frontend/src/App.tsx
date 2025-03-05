import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/v1/books`)
      .then((response) => response.json())
      .then((data) => {
          setBooks(data)
      })
      .catch((error) => console.error('Error fetching books:', error));
  }, [])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <h2>Books fetched from backend</h2>
      <div>
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        {books.map((book: any) => (
          <div key={book.id}>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
