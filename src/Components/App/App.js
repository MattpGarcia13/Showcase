import './App.css';
import { useEffect } from 'react';
import Navbar from '../Navbar/Navbar'
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home'

function App() {

  useEffect(() => {
    fetch('http://localhost:3001/dino')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error))



  }, [])

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' exact element={Home} />
      </Routes>
    </div>


  );

}

export default App;
