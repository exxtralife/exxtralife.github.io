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
        <DragPanel label = "this is a training exercise" position = {random_pos}/>
        <DragPanel label = "exxtralife is a cultural institution" position = {random_pos}/>
        <DragPanel label = "today we gather... " position = {random_pos}/>
        <DragPanel label = "here's your formal welcome to spring" position = {random_pos}/>
        <DragPanel label = "almost" position = {random_pos}/>


        <div className="cent-image">

            <Link to="/wind">
                <img src = {kei}></img>
            </Link>
        </div>
    </>
    )
    
}

export default Sky;