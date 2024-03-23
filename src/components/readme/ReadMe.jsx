import React from 'react'
import classes from './ReadMe.module.css'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import OptionBig from '../option_big/OptionBig'

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
        <div className={classes.whiteLine}></div>
        <div className={classes.buttonMover}>
        <OptionBig link='/menu'>BACK TO MENU</OptionBig>
        </div>
        <br></br>
    </motion.div>
  )
}

export default ReadMe
