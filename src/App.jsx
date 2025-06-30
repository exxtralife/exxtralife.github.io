import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import './App.css'
import EscapeWillMakeMe from './pages/escape';
import Home from './pages/Home/Home';
import TerminalOne from './pages/Terminal/TerminalOne';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path = "/" Component={Home}/>
          <Route exact path = "/escape" Component={EscapeWillMakeMe}/>
          <Route exact path = "/terminalone" Component={TerminalOne}/>

        </Routes>
      </Router>
    </>
  )
}
export default App