import React from 'react'
import classesShared from '../OptionThinShared.module.css'
import SliderThin from './SliderThin'
import useSound from 'use-sound'
import hoverSound from '../../../assets/audio/buttonhover.ogg'

const OptionThinSlider = ({name, val, min, max, step}) => {
  const [playHoverSound] = useSound(hoverSound)
  return (
    <div className={classesShared.optionContainer} onMouseOver={() => playHoverSound()}>
      <p className={classesShared.optionName}>{name}</p>
      <SliderThin name={name} val={val} min={min} max={max} step={step}></SliderThin>
    </div>
  )
}

export default OptionThinSlider