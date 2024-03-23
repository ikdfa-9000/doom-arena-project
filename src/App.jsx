import React, {useEffect} from 'react'
import {BrowserRouter, Routes, Route, } from 'react-router-dom' 
import { AnimatePresence } from 'framer-motion';
import backgroundvideoselected from './assets/vids/menu_selected.mp4'
import MainMenuWelcome from './components/main_menu/MainMenuWelcome.jsx'
import MainMenuContent from './components/main_menu/MainMenuContent.jsx'
import ReadMe from './components/readme/ReadMe.jsx';
import PlayMenu from './components/play_menu/PlayMenu.jsx';
import backgroundMus from './assets/audio/menu_music.ogg'

const App = () => {
  return (
    <div className='screen'>
      <video className='backgroundVideo backgroundMain' autoPlay loop muted>
        <source src={backgroundvideoselected} type='video/mp4' />
      </video>
      <AnimatePresence mode="wait">
        <BrowserRouter>
          <Routes>
            <Route path='readme' element={<ReadMe/>} />
            <Route path='playmenu' element={<PlayMenu/>} />
            <Route path='menu' element={<MainMenuContent/>} />
            <Route path='welcome' element={<MainMenuWelcome/>} />
            <Route path='*' element={<MainMenuWelcome/>} />
          </Routes>
        </BrowserRouter>
      </AnimatePresence>
    </div>
  )
}

export default App