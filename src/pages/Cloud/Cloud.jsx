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
        <DragPanel label = "hey you →" position = {random_pos}/>
        <DragPanel label = "exxtra:kei is a ..." position = {random_pos}/>
        <DragPanel label = "there's something this way [...]" position = {random_pos}/>
        <DragPanel label = "send h!#&" position = {random_pos}/>
        <DragPanel label = "does it look like we were left off bad and boujee" position = {random_pos}/>

        <DragPanel label = "we have an annoucement" position = {random_pos}/>
        <DragPanel label = "what is a multiplayer event anyways?" position = {random_pos}/>
        <DragPanel label = "⟶ cryptic-lancer" position = {random_pos}/>
        <DragPanel label = "cryptic-lancer" position = {random_pos}/>
        <DragPanel label = "powered by exxtralife + cl♣︎b:kei" position = {random_pos}/>
        <DragPanel label = "apologies for the in-directness" position = {random_pos}/>
        <DragPanel label = "powered by cl♣︎b:kei + exxtralife" position = {random_pos}/>
        <DragPanel label = "you're getting closer" position = {random_pos}/>
        <DragPanel label = "#music shout out music" position = {random_pos}/>
        <DragPanel label = "#music shout out music" position = {random_pos}/>

        <div className="cent-image">
            <Link to="/sky">
                <img src = {kei}></img>
            </Link>
        </div>
    </>
    )
    
}

export default Cloud;