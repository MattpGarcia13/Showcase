import './App.css';
import { useEffect } from 'react'

function App() {

  useEffect(() => {
    fetch('http://localhost:3001/dino')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error))



  }, [])





  return (
    <div className="App">

    </div>
  );
}

export default App;
