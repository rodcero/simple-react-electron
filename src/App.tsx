import React from 'react';

import logo from './logo.svg';
import './App.css';

const electron = window.require('electron');
const ipcRenderer = electron.ipcRenderer;

function App() {
  const click = () => {
    console.log('hello.');
    ipcRenderer.send('start', { data: 'hello' });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={click}>Start</button>
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
