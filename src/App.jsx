import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import './App.css'
import EscapeWillMakeMe from './pages/escape';
import Home from './pages/Home/Home';
import TerminalOne from './pages/Terminal/TerminalOne';
import Instructions from './pages/Terminal/Instructions';
import World from './pages/World/World';

function AnimatedRoutes() {
  // forces react to remounet the div on every route change so animation is reapplied
  const location = useLocation();
  return (
    <div className="fade-in" key={location.pathname}>
      <Routes location={location}>
        <Route exact path="/" Component={Home}/>
        <Route exact path="/escape" Component={EscapeWillMakeMe}/>
        <Route exact path="/terminal" Component={TerminalOne}/>
        <Route exact path="/instruction" Component={Instructions}/>

        <Route exact path="/world" Component={World}/>
      </Routes>
    </div>
  );
}

function App() {
  return (
      <Router>
         <AnimatedRoutes/>
      </Router>
  )
}
export default App