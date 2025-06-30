import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useId } from 'react';
import "./TextPanel.css"
const TextPanel = ({panelID, index, max}) => 
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
        //thisTP.innerHTML = " ";
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
                const textBox = document.getElementById(textPanelID);
                const form = document.getElementById(formID);
                form.innerHTML = text + " " + deus;
                textBox.remove();

                if(currentID < max)
                {
                    var nextID = "panel" + (currentID + 1).toString();
                    console.log(nextID);
                    var nextBox = document.getElementById(nextID);
                    nextBox.style.display = "block";
                    nextBox.scrollIntoView({behavior: "smooth", block: 'center',inline: 'center'});
                }

                if(currentID == max)
                {
                    navigate("/TerminalOne");
                }
            }
        }

    return (
    <>
        <div>
        <div class = "textPanel" id = {panelID}>
            <form id={formID} onSubmit = {e => deusCheck(e)}>
            {text} <input id={textPanelID} onChange={(e) => setDeus(e.target.value)}  value = {deus} type="text"></input>
            </form>
        </div>
        </div>
    </>
    )
}
//export default TextPanel

const SentenceChain = ({amount = 4, next}) =>
{
    const [steps, setSteps] = useState([0]);

    const addStep = () => {
        console.log("correct!");
        if(steps.length() > amount)
        {
            next();
        }

        setSteps((prev) => [...prev, prev.length]);
        const id = steps.length;
    }

    const numbers = ["1","2","3","4","5",];

    return (
    <>
        <div class = "sentenceChain">

           {numbers.map((number) => 
            (
                <TextPanel panelID ={"panel" + number} index = {number} max = {5}/>
            ))}

        </div>

    </>
    )
}


export default SentenceChain

