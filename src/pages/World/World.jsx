import { Link } from "react-router-dom";


import image1Url from '../../assets/posters/anniversary/oneyear-card.png'
import image2Url from '../../assets/posters/anniversary/2.png'
import never from '../../assets/posters/anniversary/never.png'

import loop from "../../assets/posters/loop/ticket.png"
import looppic from "../../assets/posters/loop/pic.png"

import three from "../../assets/posters/three/three.png"
import lite from "../../assets/posters/liteone/ticket.png"
import litetwo from "../../assets/posters/litetwo/litetwo.png"
import kei from "../../assets/posters/kei/censored-ticket.png"
import xxlogo from '../../assets/logos/icon-spread.svg'

import Navigation from '../../components/Navbar/Navbar';
import SideBySideCards from '../../components/SideBySideCards/SideBySideCards';
import SingleTicket from '../../components/SideBySideCards/SingleTicket';

import './World.css';
import DragHandle from "../../components/DragPanel/DragHandle";
import DragPanel from "../../components/DragPanel/DragPanel";
import { createElement, useRef, useState } from "react";
import WebPanel from "../../components/DragPanel/WebPanel";
import VideoPanel from "../../components/DragPanel/VideoPanel";


function World() {

  var portal_text = useRef(null);

  var desktop = useRef(null);
  var webTicket = useRef(null);
  var loopVideo = useRef(null);

  document.body.style = 'background-color: #FAFAFB;';


  let openLoopVideo = (e) => 
  {

    loopVideo.current.style.display = "block";
        console.log(e.clientX, e.clientY);

  }


  let openLiteTicket = (e) => 
  {
 
    webTicket.current.style.display = "block";
        console.log(e.clientX, e.clientY);

  }


  let openThreePage = (e) => 
  {

    desktop.current.style.display = "block";
        console.log(e.clientX, e.clientY);

  }

  return (
    <div className="displayPane">
      <div className="world-page">
          <DragPanel label="[...!?]" position={{x:window.innerWidth/2, y:window.innerHeight/4}}/>
          <WebPanel ref={desktop} src = "https://exxtralife.github.io/old-site/Desktop/Desktop.html" position = {{x: window.innerWidth * 5 ,y: window.innerHeight/4}}/>
          <WebPanel ref={webTicket} src = "https://exxtralife.github.io/old-site/exxtramail/litepage.html" position = {{x: window.innerWidth * 4 ,y: window.innerHeight/4}}/>
          <VideoPanel ref={loopVideo} src = "https://s3.us-east-1.amazonaws.com/media.exxtralife.com/exxtraplus/liteloop.mov" position = {{x: window.innerWidth * 3 ,y: window.innerHeight/4}}/>

          <Link to = "/cloud">
            <SingleTicket url1={kei}/>
          </Link>


        <Link to= "/instruction">
            <SingleTicket url1={image1Url}/>
        </Link>


        <SingleTicket ref={portal_text} url1={never}/>

        <SingleTicket url1={loop} onClick={openLoopVideo}/>

        <SingleTicket url1={litetwo} onClick={openLiteTicket}/>
    
        <SingleTicket url1={three} onClick={openThreePage}/>

        <SingleTicket url1={lite}/>

        <SingleTicket url1={xxlogo}/>
      </div>

    </div>
  );
}



export default World;