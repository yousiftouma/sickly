import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import { get } from './services/ApiClient/ApiClient';
import { login, logout } from './services/Auth/AuthService';
import './App.css';

function App() {
  const [data, setData] = useState('Pending ...');
  const [endPoint, setEndpoint] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await get(endPoint);
      if (response) {
        console.log('log in component:')
        console.log(response);
        setData(response[0]);
      }
      else {
        setData('Request unathorized')
      }
    };
    if (endPoint) {
      fetchData();
    }
  }, [endPoint]);

  return (
    <div className="App">
      <div>
        <span>Response: </span>
        <span>{data}</span>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
        <Button onClick={() => setEndpoint('test')}>Call protected</Button>
        <Button onClick={() => setEndpoint('testAgain')}>Call unprotected</Button>
        <Button onClick={() => login()}>Sign in</Button>
        <Button onClick={() => logout()}>Sign out</Button>
      </div>
    </div>
  );
}

export default App;
