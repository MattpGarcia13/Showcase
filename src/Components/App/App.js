import './App.css';

import Navbar from '../Navbar/Navbar'
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/planningHunt'  */}
      </Routes>
    </div>


  );

}

export default App;
