import BottomPanel from "../../components/BottomPanel/BottomPanel";
import "./Terminal.css"
import TerminalText from "./Texts/one.txt";




function TerminalOne({url}) {

    
    let reader = new FileReader();
    const file = TerminalText;

    reader.onload= (e) => 
    {
        const lines = file.split(/\r\n|\n/);
        textarea.value = lines.join('\n');
            console.log(textarea.value);

    };

    reader.onerror = (e) => {};
    reader.readAsText(file);

    console.log(script);
  return (
    <>
        <div class = "terminalPage">      
        <BottomPanel/>
        </div>
    </>
  )
}

export default TerminalOne