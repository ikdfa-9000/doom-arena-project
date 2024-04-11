import React from 'react'
import { motion } from "framer-motion"
import bigIcon from '../../assets/logo/doomlogo_big.png'
import classes from './MainMenuWelcome.module.css'
import OptionBig from '../../components/option_big/OptionBig.jsx'
import { Link } from 'react-router-dom'
import backgroundvideomain from '../../assets/vids/menu_main.mp4'

const MainMenuWelcome = () => {
  return ( 
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0 }}
        className={classes.mainMenuWelcome}
        >
        <video className='backgroundVideo backgroundMain' autoPlay loop muted>
            <source src={backgroundvideomain} type='video/mp4' />
        </video>
        <img src={bigIcon} className={classes.bigLogo} />
        <div className={classes.buttonWelcomeDiv}>
        <OptionBig link='/menu'>CLICK HERE TO ENTER MENU</OptionBig>
        </div>
      </motion.div>
  )
}

export default MainMenuWelcome
