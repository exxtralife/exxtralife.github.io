import "./BottomPanel.css";
import { useState, useEffect, useId } from "react";


const useTypewriter = (text, speed = 30) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(prevText => prevText + text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, speed]);

  return displayText;
};



const BottomPanel = ({ text , button}) => {

  var script = useTypewriter(text, 10);
  var uid = useId();
  
  return (
    <>
      <div class="bottom-panel-root" id = {uid}>
        {script}
      </div>
    </>
  );
};
export default BottomPanel;
