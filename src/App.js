import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import api from './project/ApiClient.ts';

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    api.get('/furniture')
      .then(res => setMessage(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <ul>
        {message}
      </ul>
    </div>
  );
}

export default App;
