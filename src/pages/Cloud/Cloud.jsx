import React from "react";
import "./Cloud.css"
import DragPanel from "../../components/DragPanel/DragPanel";
import kei from "../../assets/posters/kei/exxtrakei-screen.png"
import { Link } from "react-router-dom";



export function Cloud()
{
    const random_pos = () => 
    {
        return {x : (Math.random() * window.innerWidth) - (window.innerWidth/4), y :(Math.random() * window.innerHeight) - (window.innerHeight/4) }
    }
    return(
    <>
        <DragPanel label = "hey → !!" position = {random_pos}/>
        <DragPanel label = "experiment closed" position = {random_pos}/>
        <DragPanel label = "winners shall recieve a gift" position = {random_pos}/>

        <div className="cent-image">
            <Link to="/">
                <img src = {kei}></img>
            </Link>
        </div>
    </>
    )
    
}

export default Cloud;