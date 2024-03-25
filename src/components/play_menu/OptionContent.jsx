import React from 'react'
import { motion } from 'framer-motion'
import classes from './OptionContent.module.css'
import ParameterBlock from './ParameterBlock'

const OptionContent = ({title, image, highscore, time, kills, rounds}) => {
  return (
    <div className={classes.optionContentContainer}>
      <div className={classes.optionContentBanner}>
        <div style={{width: "85%", position: 'relative'}}> 
          <motion.h1 
          style={{zIndex: 3, position: 'absolute', color: 'red', left: 2, top: 2, fontSize: 40}}
          animate={{left: [-2, 2, 1, -1, 0, 3, 3, -2, -3, -2], top: [2, 2, 1, -1, 0, 3, 3, -2, 3, -2]}}
          transition={{duration: 0.65, repeat: Infinity}}
          >{title}</motion.h1>
          <h1 style={{zIndex: 4, position: 'relative'}} className={classes.titleName}>{title}</h1>
        </div>
        <img className={classes.imageBanner} src={image} alt='imade didnt load :c'></img>
      </div>
      <ParameterBlock text='High Score' number={highscore}></ParameterBlock>
      <ParameterBlock text='Survival Time:' number={time}></ParameterBlock>
      <ParameterBlock text='Total Kills:' number={kills}></ParameterBlock>
      <ParameterBlock text='Max Round:' number={rounds}></ParameterBlock>
    </div>
  )
}

export default OptionContent
