
import SentenceChain from '../components/TextPanel/TextPanel'
import BottomPanel from '../components/BottomPanel/BottomPanel'
import SideBySideCards from '../components/SideBySideCards/SideBySideCards'

import image1Url from '../assets/posters/anniversary/1.png'
import image2Url from '../assets/posters/anniversary/2.png'



function EscapeWillMakeMe() {
  return (
    <>
    <div className = "homepage">      
      <SentenceChain/>
      <SideBySideCards url1={image1Url}
        url2={image2Url}/>
    </div>
    </>
  )
}

export default EscapeWillMakeMe;