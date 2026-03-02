import React, { use, useRef } from "react";
import "./UniWidget.css";
import logo from "../../assets/logos/icon-spread.svg";
import { Link } from "react-router-dom";

export function UniWidget() {
  var uniWidget = useRef(null);
  var widgetButton = useRef(null);
  var getTheTime = () => {
    const now = new Date();
    const currentDateTime = now.toLocaleTimeString();
    document.querySelector("#currentTime").textContent = currentDateTime;
  };

  let getWindowSize = () => {
    var w = window.innerWidth;
    var h = window.innerHeight;
    var sizeString = w.toString() + "x" + h.toString();
    document.querySelector("#resolution").textContent = sizeString;
  };

  var isOpen = true;

    const handleClick = () => {
        if (isOpen) {
            sidenav.current.style.width = "0px";
            sidenav.current.style.left = "100%";

            isOpen = false;
        }

        else {
            sidenav.current.style.width = "250px";
            sidenav.current.style.left = "0";

            isOpen = true;
        }
    }

  return (
    <Link to="/">
      <div className="uni-widget" ref={uniWidget}>
        <img ref={widgetButton} src={logo}></img>
      </div>
    </Link>
  );
}

export default UniWidget;
