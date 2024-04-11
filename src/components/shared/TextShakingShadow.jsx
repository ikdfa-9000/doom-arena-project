import React from 'react'
import { motion } from 'framer-motion'
import classes from './TextShakingShadow.module.css'

const TextShakingShadow = ({title}) => {
  return (
    <div className={classes.textContainer}>
        <motion.h1 
          className={classes.textShadow}
          animate={{left: [-2, 2, 1, -1, 0, 3, 3, -2, -3, -2], top: [2, 2, 1, -1, 0, 3, 3, -2, 3, -2]}}
          transition={{duration: 0.65, repeat: Infinity}}
        >{title}</motion.h1>
        <h1 className={classes.textFront}>{title}</h1>
    </div>
  )
}

export default TextShakingShadow
