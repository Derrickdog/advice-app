import { useState, useEffect } from 'react';

import './App.css';

const API_URL = 'https://api.adviceslip.com/advice'

const App = () => {
  const [advice, setAdvice] = useState([]);

  const fetchAdvice = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();

    setAdvice(data.slip.advice);
  }

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{advice}</h1>
        <button className="button" onClick={() => fetchAdvice()}>
          New Advice
        </button>
      </div>
    </div>
  )
}

export default App;
