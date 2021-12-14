import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import RegionalWorkouts from './components/pages/RegionalWorkouts';
import Programs from './components/pages/Programs';
import FoodCourt from './components/pages/FoodCourt';
import SignUp from './components/pages/SignUp';


// every route must be inside <Routes></Routes>
function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes> 
          <Route path='/' exact element={<Home />}/> 
          <Route path='/regional-workouts' exact element={<RegionalWorkouts/>}/>
          <Route path='/food-court' exact element={<FoodCourt/>}/>
          <Route path='/programs' exact element={<Programs/>}/>
          <Route path='/sign-up' exact element={<SignUp/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
