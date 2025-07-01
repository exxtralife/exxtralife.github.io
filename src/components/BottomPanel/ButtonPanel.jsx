import './BottomPanel.css';
import { useState, useEffect } from "react";


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


const ButtonPanel = ({text}) => 
{

    var script = useTypewriter(text, 20);
      return (
         <>
         <div class="button-panel-root"> 
            {script}
         </div>
         </>
      )
}
export default ButtonPanel;