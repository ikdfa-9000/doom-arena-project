import React, { useState } from 'react'
import { motion } from 'framer-motion'
import OptionMedium from '../option_medium/OptionMedium'
import classes from './PlayMenu.module.css'
import { Link } from 'react-router-dom'

const PlayMenu = () => {
  const [isOptionContentVisible, changeOptionContentVisible] = useState(false)
  const [optionDescription, changeOptionDescription] = useState("Choose an option")
  return (
    <motion.div 
      className={classes.playDiv}
      initial={{ opacity: 0, marginLeft: -0 }}
      animate={{ opacity: 1, marginLeft: 100  }}
      transition={{ duration: 0.35 }}
      >
      <div className={classes.optionsSection}>
        <div className={classes.optionList}>
          <OptionMedium actionhover={() => {
          changeOptionDescription("Fight demons in UAC Mars Facility")
          }}>UAC LABS</OptionMedium>
          <OptionMedium actionhover={
          () => {
            changeOptionDescription("Fight demons in Soul Chamber, where all the demons are being created")
          }}>SOUL CHAMBER</OptionMedium>
          <OptionMedium actionhover={
          () => {
              changeOptionDescription("Fight demons in Urdak, a dying Heaven")
          }}>URDAK</OptionMedium>
          <OptionMedium actionhover={
          () => {
          changeOptionDescription("Fight demons on Earth, all corrupted by hell's forces")
          }}>HELL ON EARTH</OptionMedium>
        </div>
        <div className={classes.lowerMenu}>
          <p style={{
            paddingLeft: 12
          }}>{optionDescription}</p>
          <Link to='/menu' className='linkButton'>
            <OptionMedium>BACK TO MENU</OptionMedium>
          </Link>
        </div>
      </div>
      <div className={classes.optionContent}>
        <div ></div>
      </div>
    </motion.div>
  )
}

export default PlayMenu
