import React from 'react'
import classes from './ReadMe.module.css'
import { motion } from 'framer-motion'
import OptionBig from '../../components/option_big/OptionBig'
import WhiteLine from '../../components/shared/WhiteLine'

const ReadMe = () => {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
    }}>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%'
        }}>
            <h2>Made by using React, Three.js (not yet) for educational purposes</h2>
            <br></br>
            <h2>DOOM made by id Software, owned by Bethesda</h2>
            <h3>made by ikdfa if anyone cares bruh</h3>
        </div>
        <WhiteLine />
        <div className={classes.buttonMover}>
        <OptionBig link='/menu'>BACK TO MENU</OptionBig>
        </div>
        <br></br>
    </motion.div>
  )
}

export default ReadMe
