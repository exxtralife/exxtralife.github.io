import React, { useState } from "react";


const TextPanel = () => 
{
    const [deus, setDeus] = useState("");

    const deusCheck = (e) => 
        {
            e.preventDefault();

            if(deus.toUpperCase() != "GOD")
                {

                    console.log(deus);
                    setDeus("");
                }
            
        }

    return (
    <>
        <div class = "textPanel">
            <form onSubmit = {e => deusCheck(e)}>
            escape will make me <input id="escapeField" onChange={(e) => setDeus(e.target.value)}  value = {deus} type="text"></input>
            </form>
        </div>
    </>
    )
}
export default TextPanel