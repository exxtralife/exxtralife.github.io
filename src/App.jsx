import { useState } from "react";

import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import "./App.css";
import EscapeWillMakeMe from "./pages/escape";
import { ImagePixelated, ElementPixelated } from "react-pixelate";
import TerminalOne from "./pages/Terminal/TerminalOne";
import Instructions from "./pages/Terminal/Instructions";
import World from "./pages/World/World";
import Cloud from "./pages/Cloud/Cloud";
import { UniWidget } from "./components/UniWidget/UniWidget";
import Sky from "./pages/Cloud/Sky";
import Wind from "./pages/Cloud/Wind";

function AnimatedRoutes() {
  // forces react to remounet the div on every route change so animation is reapplied
  const location = useLocation();
  return (
    <>
      <svg width="0" height="0">
        <filter id="pixelate"
          x="-50%"
          y="-50%"
          width="200%"
          height="200%">
          <feFlood x="4" y="4" height="2" width="2" />
          <feComposite width="4" height="4" />
          <feTile />
          <feComposite in="SourceGraphic" operator="in" />
        </filter>
      </svg>

      <div className="fade-in" key={location.pathname}>
        <UniWidget />
        <Routes location={location}>
          <Route exact path="/" Component={World} />
          <Route exact path="/world" Component={World} />

          <Route exact path="/escape" Component={EscapeWillMakeMe} />
          <Route exact path="/terminal" Component={TerminalOne} />
          <Route exact path="/instruction" Component={Instructions} />
          <Route exact path="/cloud" Component={Cloud} />
          <Route exact path="/sky" Component={Sky} />
          <Route exact path="/wind" Component={Wind} />


        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <HashRouter>
      <AnimatedRoutes />
    </HashRouter>
  );
}
export default App;
