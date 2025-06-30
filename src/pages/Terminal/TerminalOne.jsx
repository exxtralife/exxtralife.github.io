import BottomPanel from "../../components/BottomPanel/BottomPanel";
import "./Terminal.css"
import TerminalText from "./Texts/one.txt";
import { useState, useEffect } from "react";




function TerminalOne({url}) {

  const [outputText, setOutputText] = useState("");

  useEffect(() => {
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
        </div>
    </>
  )
}

export default TerminalOne