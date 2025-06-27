import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import TextPanel from './components/textPanel'
import BottomPanel from './components/BottomPanel/BottomPanel'

function App() {
  return (
    <>
    <div>      
      <TextPanel/>
      <BottomPanel/>
    </div>
    </>
  )
}
export default App