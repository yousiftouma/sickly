import React, { useState, useEffect } from 'react';
import { get } from './services/ApiClient/ApiClient'
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await get('test');
      if (response) {
        setData(response);
      };
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      {data.length > 0 && 
        <div>{data[0]}</div>
      }
    </div>
  );
}

export default App;
