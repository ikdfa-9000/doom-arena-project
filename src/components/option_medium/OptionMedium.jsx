import React from 'react'
import { Link } from 'react-router-dom'
import classes from './OptionMedium.module.css'
import useSound from 'use-sound'
import hoverSound from '../../assets/audio/buttonhover.ogg'
import clickSound from '../../assets/audio/select.ogg'

const OptionMedium = ({children, action = () => {}, actionhover = () => {}}) => {
  const [playHoverSound] = useSound(hoverSound)
  const [playClickSound] = useSound(clickSound)
  return (
      <button className={classes.mediumButton} 
      onMouseOver={() => {
        playHoverSound()
        actionhover()
      }}
      onClick={() => {
        playClickSound()
        action()
      }} >
          {children}
      </button>
  )
}

export default OptionMedium