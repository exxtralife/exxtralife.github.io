
import { Link } from "react-router-dom";

import logoUrl from '../../assets/logos/exxtralife.svg'
import "./Home.css"
import "../../index.css";

function Home() {

  return (
    <>
      <div class = "logo">      

        <Link to= "/world">
          <img src = {logoUrl} width= "300vw"/>
        </Link>
      </div>
    </>
  )
}

export default Home;