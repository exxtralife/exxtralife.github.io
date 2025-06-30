
import SentenceChain from '../components/TextPanel/TextPanel'
import BottomPanel from '../components/BottomPanel/BottomPanel'
import SideBySideCards from '../components/SideBySideCards/SideBySideCards'

import image1Url from '../assets/posters/anniversary/1.png'
import image2Url from '../assets/posters/anniversary/2.png'

import "./escape.css"

function EscapeWillMakeMe() {

  document.body.style = 'background:#FF006B;';

  return (
    <>
    <div className = "homepage">      
      <SentenceChain/>
    </div>
    </>
  )
}

export default EscapeWillMakeMe;