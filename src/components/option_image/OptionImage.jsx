import React from 'react'
import classes from './OptionImage.module.css'
import { useAnimate } from "framer-motion"
import { Link } from 'react-router-dom'
import useSound from 'use-sound'
import clickSound from '../../assets/audio/select.ogg'

const OptionImage = ({action, background, text, link}) => {
  const [playClickSound] = useSound(clickSound)
  const [optionScope, optionAnimate] = useAnimate()
  
  return (
    <Link className='linkButton' to={link}>
        <div ref={optionScope} 
        onMouseOver={() => {
            optionAnimate(optionScope.current, {width: '425px', height: '260px', duration: 0.75})
        }}
        onMouseLeave={() => optionAnimate(optionScope.current, {width: '400px', height: '250px', duration: 0.75})}
        onClick={() => {
            playClickSound()
            action
        }}
        style={
            {
                width: "400px",
                height: "250px",
                margin: "5px",
                border: "solid grey 1px",
                backgroundPosition: 'center center',
                backgroundImage: `url(${background})`,
                objectFit: "cover",
                cursor: 'url("./src/assets/cursor/cursor_press.png"), auto',
                position: 'relative'
            }
        }>
            <div className={classes.textContainer}>
                <p>{text}</p>
                <div style={{
                    width: "100%",
                    position: 'relative'
                }}>
                    <div className={classes.simpleLine}></div>
                    <div className={classes.boldLine}></div>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default OptionImage
