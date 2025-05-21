import { useState } from 'react'
import Home from './componenets/Home'


import { Routes, Route } from 'react-router-dom';
import Maps from './componenets/maps';
// import Analytics from './component/Analytics';

function App() {
 

  return (
    <Routes>

      <Route path='/' element={<Home/>} />
      
      <Route path = 'maps' element = {<Maps/>} />

    </Routes>
  )
}

export default App
