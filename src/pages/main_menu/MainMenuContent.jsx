import React from 'react'
import { motion } from 'framer-motion'
import OptionImage from '../../components/option_image/OptionImage'
import smallIcon from '../../assets/logo/doomlogo_small.png'
import playImage from '../../assets/misc/mainmenu/play_img.png'
import creditsImage from '../../assets/misc/mainmenu/credits_img.png'
import settingsImage from '../../assets/misc/mainmenu/settings_img.png'
import classes from './MainMenuContent.module.css'
import backgroundvideomain from '../../assets/vids/menu_main.mp4'

const MainMenuContent = () => {
    function onStart() {
        console.log("Animation started")
      }
      
  return (
    <motion.div 
        className={classes.mainMenuContent}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        onAnimationStart={onStart}
    >
        <video className='backgroundVideo backgroundMain' autoPlay loop muted>
            <source src={backgroundvideomain} type='video/mp4' />
        </video>
        <img src={smallIcon} className={classes.smallLogo} />
        <div className={classes.redLine}></div>
        <div className={classes.menuBigOptionsDiv}>
            <OptionImage background={creditsImage} text='README' link='/readme'></OptionImage>
            <OptionImage background={playImage} text='PLAY' link='/playmenu'></OptionImage>
            <OptionImage background={settingsImage} text='SETTINGS' link='/settings'></OptionImage>
        </div>
        <div className={classes.redLine}></div>
    </motion.div>
  )
}

export default MainMenuContent
