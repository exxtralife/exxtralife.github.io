import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import TextPanel from './components/TextPanel/TextPanel'
import BottomPanel from './components/BottomPanel/BottomPanel'
import SideBySideCards from './components/SideBySideCards/SideBySideCards'

import image1Url from './assets/posters/anniversary/1.png'
import image2Url from './assets/posters/anniversary/2.png'

function App() {
  return (
    <>
    <div>      
      <TextPanel/>
      <SideBySideCards url1={image1Url}
        url2={image2Url}/>
      <BottomPanel/>
    </div>
    </>
  )
}
export default App