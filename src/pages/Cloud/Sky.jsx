import React from "react";
import "./Cloud.css"
import DragPanel from "../../components/DragPanel/DragPanel";
import kei from "../../assets/posters/kei/cloud/newbg.png"
import { Link } from "react-router-dom";



export function Sky()
{
    const random_pos = () => 
    {
        return {x : (Math.random() * window.innerWidth) - (window.innerWidth/4), y :(Math.random() * window.innerHeight) - (window.innerHeight/4) }
    }
    return(
    <>
        <DragPanel label = "hey you →" position = {random_pos}/>
        <DragPanel label = "do you see this coat?" position = {random_pos}/>
        <DragPanel label = "exxtralife is a cultural institution" position = {random_pos}/>
        <DragPanel label = "today we gather... " position = {random_pos}/>
        <DragPanel label = "does it look like we were left off bad and boujee" position = {random_pos}/>

        <div className="cent-image">

            <Link to="/wind">
                <img src = {kei}></img>
            </Link>
        </div>
    </>
    )
    
}

export default Sky;