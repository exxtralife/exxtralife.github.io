import { Link } from "react-router-dom";


import image1Url from '../../assets/posters/anniversary/1.png'
import image2Url from '../../assets/posters/anniversary/2.png'
import never from '../../assets/posters/anniversary/never.png'

import loop from "../../assets/posters/loop/ticket.png"
import looppic from "../../assets/posters/loop/pic.png"

import three from "../../assets/posters/three/three.png"
import lite from "../../assets/posters/liteone/ticket.png"
import litetwo from "../../assets/posters/litetwo/litetwo.png"

import Navigation from '../../components/Navbar/Navbar';
import SideBySideCards from '../../components/SideBySideCards/SideBySideCards';
import SingleTicket from '../../components/SideBySideCards/SingleTicket';
import './World.css';


function World() {


  document.body.style = 'background: white;';

  return (
    <div className="displayPane">
      <div className="world-page">

        <Link to= "/instruction">
          <SideBySideCards url1={image1Url}
            url2={image2Url}/>
        </Link>

        <SingleTicket url1={never}/>

          <a href = "https://s3.us-east-1.amazonaws.com/media.exxtralife.com/exxtraplus/liteloop.mov">
            <SingleTicket url1={loop}/>
          </a>

           <a href = "https://exxtralife.github.io/old-site/exxtramail/litepage.html">
            <SingleTicket url1={litetwo}/>
          </a>
    
          <a href = "https://exxtralife.github.io/old-site/Desktop/Desktop.html">
            <SingleTicket url1={three}/>
          </a>

          <a href = "https://exxtralife.github.io/old-site/Desktop/product/exxtralife-three.html">
            <SingleTicket url1={lite}/>
          </a>

          <Navigation/>
      </div>

    </div>
  );
}



export default World;