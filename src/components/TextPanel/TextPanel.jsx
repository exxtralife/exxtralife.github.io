import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./TextPanel.css"
const TextPanel = ({panelID, index, max, fn}) => 
{
    var text = "escape will make me";
    var currentID = Number(index);

    const [deus, setDeus] = useState("");
    
    const textPanelID = panelID + "text";
    const formID = panelID + "form";

    const navigate = useNavigate();

    if(currentID != 1)
    {
        var thisTP = document.getElementById(formID);
    }

    const deusCheck = (e) => 
        {
            e.preventDefault();

           
            if(deus.toUpperCase() != "GOD")
                {
                    console.log(deus);
                    setDeus("");
                }
            
            else
            {
                if(currentID == max)
                {
                    navigate("/TerminalOne");
                }
                else
                {
                    fn();
                }
            }
        }

    console.log("currentID: " + currentID);
    console.log("index: " + index);

    return (
    <>
        <div>
        <div className = "textPanel" id = {panelID}>
            <form id={formID} onSubmit = {e => deusCheck(e)}>
            {text} <input id={textPanelID} onChange={(e) => setDeus(e.target.value)}  value = {deus} type="text"></input>
            </form>
        </div>
        </div>
    </>
    )
}
//export default TextPanel

const SentenceChain = () =>
{
    const numbers = ["1","2","3","4","5"];
    const [panelsSeen, setPanelsSeen] = useState(["1"]);

    const update = () => {
        const last = panelsSeen[panelsSeen.length - 1];
        const nextNum = (parseInt(last) + 1).toString();
        if (numbers.includes(nextNum)) {
            setPanelsSeen([...panelsSeen, nextNum]);
        }
    }

    // Scroll to the latest panel after it appears
    useEffect(() => {
        if (panelsSeen.length > 1) {
            const lastPanel = panelsSeen[panelsSeen.length - 1];
            const el = document.getElementById("panel" + lastPanel);
            if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
            }
        }
    }, [panelsSeen]);


    return (
    <>
        <div className = "sentenceChain">

           {numbers.filter(number => panelsSeen.includes(number)).map((number) => (
                <TextPanel panelID ={"panel" + number} index = {number} max = {5} fn={update}/>
            ))}

        </div>

    </>
    )
}


export default SentenceChain

