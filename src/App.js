import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Notes from './pages/Notes';
import Day from './pages/Day';
import Workout from './pages/Workout';
import Habits from './pages/Habits';

function App() {
  return (
    
    <>
   
        <Router>
        <Navbar />
          <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/day' element={<Day/>} />
          <Route path='/habits' element={<Habits/>} />
          <Route path='/notes' element={<Notes/>} />
          <Route path='/workout' element={<Workout/>} />
          </Routes>

          </Router>
     
   </>
  );
}

export default App;