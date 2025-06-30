import { Link } from "react-router-dom";


import image1Url from '../../assets/posters/anniversary/1.png'
import image2Url from '../../assets/posters/anniversary/2.png'

import loop from "../../assets/posters/loop/ticket.png"
import three from "../../assets/posters/three/three.png"
import lite from "../../assets/posters/liteone/ticket.png"
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

          <SingleTicket url1={loop}/>
          

          <a href = "../../../old/Desktop/Desktop.html">
            <SingleTicket url1={three}/>
          </a>
          <SingleTicket url1={lite}/>

          <Navigation/>
      </div>

    </div>
  );
}



export default World;