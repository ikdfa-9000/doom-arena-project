import React from 'react'
import classesShared from '../OptionThinShared.module.css'
import CheckboxThin from './CheckboxThin'
import useSound from 'use-sound'
import hoverSound from '../../../assets/audio/buttonhover.ogg'

const OptionThinCheckbox = ({name}) => {
  const [playHoverSound] = useSound(hoverSound)
  return (
    <div className={classesShared.optionContainer}
    onMouseOver={() => playHoverSound()}
    style={{ paddingRight: 10 }}>
      <p className={classesShared.optionName}>{name}</p>
      <CheckboxThin name={name}></CheckboxThin>
    </div>
  )
}

export default OptionThinCheckbox
