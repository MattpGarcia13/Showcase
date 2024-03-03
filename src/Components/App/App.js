import './App.css';
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home'
import PlanningHunt from '../Pages/PlanningHunt';
import AboutUs from '../AboutUs/AboutUs';
import SignUp from '../SignUp/SignUp';
import PlannedHunt from '../PlannedHunt/PlannedHunt';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/planningHunt' element={<PlanningHunt />} /> 
        <Route path='/aboutUs' element={<AboutUs />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/plannedHunt' element={<PlannedHunt />} />
        {/* <Route path='*' element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </div>


  );

}

export default App;
