import { Link } from "react-router-dom";


import image1Url from '../../assets/posters/anniversary/oneyear-card.png'
import image2Url from '../../assets/posters/anniversary/2.png'
import never from '../../assets/posters/anniversary/never.png'

import loop from "../../assets/posters/loop/ticket.png"
import looppic from "../../assets/posters/loop/pic.png"

import three from "../../assets/posters/three/three.png"
import lite from "../../assets/posters/liteone/ticket.png"
import litetwo from "../../assets/posters/litetwo/litetwo.png"
import kei from "../../assets/posters/kei/keicard.png"
import xxlogo from '../../assets/logos/icon-spread.svg'

import Navigation from '../../components/Navbar/Navbar';
import SideBySideCards from '../../components/SideBySideCards/SideBySideCards';
import SingleTicket from '../../components/SideBySideCards/SingleTicket';

import './World.css';


function World() {


  document.body.style = 'background-color: #FAFAFB;';

  return (
    <div className="displayPane">
      <div className="world-page">

          <Link to = "/cloud">
            <SingleTicket url1={kei}/>
          </Link>


        <Link to= "/instruction">
            <SingleTicket url1={image1Url}/>
        </Link>
        <SingleTicket url1={never}/>

          <Link to = "https://s3.us-east-1.amazonaws.com/media.exxtralife.com/exxtraplus/liteloop.mov">
            <SingleTicket url1={loop}/>
          </Link>

           <a href = "https://exxtralife.github.io/old-site/exxtramail/litepage.html">
            <SingleTicket url1={litetwo}/>
          </a>
    
          <a href = "https://exxtralife.github.io/old-site/Desktop/Desktop.html">
            <SingleTicket url1={three}/>
          </a>

           <a href = "https://exxtralife.github.io/old-site/Desktop/Desktop.html">
            <SingleTicket url1={lite}/>
          </a>

          <a href = "https://exxtralife.github.io/old-site/Desktop/Desktop.html">
            <SingleTicket url1={xxlogo}/>
          </a>
      </div>

    </div>
  );
}



export default World;