import React from 'react'
import classes from "./OptionBig.module.css"
import { Link } from 'react-router-dom'
import hoverSound from '../../assets/audio/buttonhover.ogg'
import useSound from 'use-sound'
import clickSound from '../../assets/audio/select.ogg'

const OptionBig = ({children, action, link}) => {
  const [playHoverSound] = useSound(hoverSound)
  const [playClickSound] = useSound(clickSound)
  return (
    <Link className='linkButton' to={link} >
      <button className={classes.bigButton} 
      onMouseOver={() => playHoverSound()}
      onClick={() => {
        playClickSound()
        action
      }} >
          {children}
      </button>
    </Link>
  )
}

export default OptionBig