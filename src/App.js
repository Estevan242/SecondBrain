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
      
          <Route path='/' exact component={Home} />
          <Route path='/day' component={Day} />
          <Route path='/habits' component={Habits} />
          <Route path='/notes' component={Notes} />
          <Route path='/workout' component={Workout} />

          </Routes>    
      </Router>
    </>
  );
}

export default App;