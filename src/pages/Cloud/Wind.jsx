import React from "react";
import "./Cloud.css"
import DragPanel from "../../components/DragPanel/DragPanel";
import kei from "../../assets/posters/kei/cloud/final.png"
import { Link } from "react-router-dom";



export function Wind()
{
    const random_pos = () => 
    {
        return {x : 10 + (Math.random() * window.innerWidth)/4, y :10 + (Math.random() * window.innerHeight)/4 }
    }
    return(
    <>
        <DragPanel label = "congrats" position = {random_pos}/>
        <DragPanel label = "now u know" position = {random_pos}/>
        <DragPanel label = "send" position = {random_pos}/>
        <DragPanel label = "us" position = {random_pos}/>
        <DragPanel label = "a" position = {random_pos}/>
        <DragPanel label = "screenshot" position = {random_pos}/>
        <DragPanel label = "on" position = {random_pos}/>
        <DragPanel label = "instagram" position = {random_pos}/>


        <div className="cent-image">

            <Link to="/">
                <img src = {kei}></img>
            </Link>
        </div>
    </>
    )
    
}

export default Wind;