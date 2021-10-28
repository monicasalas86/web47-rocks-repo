import {useState, useEffect} from 'react'
import './App.css';

function App() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetch('/api/foo')
      .then(res => res.json(message))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <div>{setMessage}</div>
      </header>
    </div>
  );
}

export default App;
