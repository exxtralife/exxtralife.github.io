import { Link } from "react-router-dom";
import InstructionPanel from "../../components/BottomPanel/InstructionPanel";
import "./Broadcast.css"
import TerminalInstructions from "./Texts/instructions.txt";
import { useState, useEffect } from "react";




function Instructions({url}) {

  document.body.style = 'background:white;';
  document.documentElement.style.setProperty('background', 'white');
  const [outputText, setOutputText] = useState("");

  useEffect(() => {
      fetch(TerminalInstructions)
          .then((res) => res.text())
          .then((text) => {
              setOutputText(text);
          })
          .catch((e) => console.error(e));
  }, []);

  return (
    <>
        <div className = "terminalPagei">  

        <InstructionPanel text={outputText}/>


          <br/>
          <br/>
          <br/>
            <Link to= "/world">
                <InstructionPanel text=" back"/>
            </Link>
        </div>
    </>
  )
}

export default Instructions