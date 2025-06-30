import { Link } from "react-router-dom";
import BottomPanel from "../../components/BottomPanel/BottomPanel";
import "./Terminal.css"
import TerminalText from "./Texts/one.txt";
import { useState, useEffect, useRef } from "react";

function TerminalOne({url}) {

  document.body.style = 'background:#FF006B;';
  document.documentElement.style.setProperty('background', '#FF006B');
  const [outputText, setOutputText] = useState("");


  const endTerminal = useRef(null);
  const scrollTobottom = () => {
    endTerminal.current?.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
          scrollTobottom();

      fetch(TerminalText)
          .then((res) => res.text())
          .then((text) => {
              setOutputText(text);
          })
          .catch((e) => console.error(e));

  }, []);



  

  return (
    <>
        <div className = "terminalPage">  

          <BottomPanel text={outputText}/>

          <br/>
          <br/>
          <Link to= "/world">

          <BottomPanel text="next"/>
          </Link>
          <div ref = {endTerminal}/>
        </div>
    </>
  )
}

export default TerminalOne