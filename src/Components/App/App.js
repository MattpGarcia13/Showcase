import './App.css';
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home'
import PlanningHunt from '../Pages/PlanningHunt';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/planningHunt' element={<PlanningHunt />} /> 
      </Routes>
      <Footer />
    </div>


  );

}

export default App;
