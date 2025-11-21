import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useUserIdentification } from './hooks/useUserIdentification';

function App() {
  const userId = useUserIdentification();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        {userId && <p>User ID: {userId}</p>}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
