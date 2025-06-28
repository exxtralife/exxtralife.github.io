import React, { useState } from "react";
import "./TextPanel.css"
const TextPanel = () => 
{
    var text = "escape will make me";
    const [deus, setDeus] = useState("");

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
                console.log("succ")
                const textBox = document.getElementById("escapeField");
                const form = document.getElementById("escapeForm");
                form.innerHTML = text + " " + deus;
                textBox.remove();
            }
        }

    return (
    <>
        <div class = "textPanel">
            <form id="escapeForm" onSubmit = {e => deusCheck(e)}>
            {text} <input id="escapeField" onChange={(e) => setDeus(e.target.value)}  value = {deus} type="text"></input>
            </form>
        </div>

    </>
    )
}
export default TextPanel