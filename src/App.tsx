import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [userName, setUserName] = useState<string>('');

  useEffect(
    () => {
      // Test Users Microservice
      fetch('/api/users')
        .then(response => response.json())
        .then(data => setUserName((data as { id: string, name: string }).name));

      // Test Auth Microservice
      fetch('/api/auth/register',
        {
          method: 'POST',
          body: JSON.stringify({ username: 'User530', email: 'top@kek.com', password: 'strongpass' })
        }
      )
        .then(response => response.json())
        .then(data => console.log(data))
    }, []
  );

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Hello world, AC/DC - CI/CD!</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <p>{userName || '#NoName'}</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
