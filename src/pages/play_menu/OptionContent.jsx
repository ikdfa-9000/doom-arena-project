import React from 'react'
import { motion } from 'framer-motion'
import classes from './OptionContent.module.css'
import ParameterBlock from './ParameterBlock'
import TextShakingShadow from '../../components/shared/TextShakingShadow'

const OptionContent = ({title, image, highscore, time, kills, rounds}) => {
  return (
    <div className={classes.optionContentContainer}>
      <div className={classes.optionContentBanner}>
        <div style={{width: "85%", position: 'relative'}}> 
          <TextShakingShadow title={title}></TextShakingShadow>
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
