import { Link } from "react-router-dom";
import BottomPanel from "../../components/BottomPanel/BottomPanel";
import "./Terminal.css"
import TerminalText from "./Texts/one.txt";
import { useState, useEffect, useRef } from "react";
import ButtonPanel from "../../components/BottomPanel/ButtonPanel";
function TerminalOne({url}) {

  document.body.style = 'background:#FF006B;';
  document.documentElement.style.setProperty('background', '#FF006B');

  const endTerminal = useRef(null);
  const parentRef = useRef(null);
  const [height, setHeight] = useState();
  const [scroll, setScroll] = useState(false); //optional
  const [outputText, setOutputText] = useState("");
  
  useEffect(() => setHeight(parentRef.current.clientHeight));

  function timeout(delay) {
    return new Promise( res => setTimeout(res, delay) );
  }

  async function scrollToBottom() {


    await timeout(2000);

    for (let index = 0; index < 20; index++) {
        await timeout(1000);
        endTerminal.current.scrollIntoView({ behavior: "smooth", block: "end" });      
    }
  };

  useEffect(() => {
    scrollToBottom();
    }, [scroll, height]);
    
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
        <div className = "terminalPage" onLoad={scrollToBottom} ref = {parentRef}>  

          <BottomPanel text={outputText}/>

          <br/>
          <br/>
          <Link to= "/world">

          <ButtonPanel text="next"/>
          </Link>
          <span ref = {endTerminal}/>
        </div>
    </>
  )
}

export default TerminalOne