import image1Url from '../../assets/posters/anniversary/1.png'
import image2Url from '../../assets/posters/anniversary/2.png'
import SideBySideCards from '../../components/SideBySideCards/SideBySideCards';

import './World.css';


function World() {

  return (
    <div className="world-page">
       <SideBySideCards url1={image1Url}
        url2={image2Url}/>
    </div>
  );
}



export default World;