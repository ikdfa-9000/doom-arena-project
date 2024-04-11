import React from 'react'
import classesShared from '../OptionThinShared.module.css'
import ButtonThin from './ButtonThin'
import useSound from 'use-sound'
import hoverSound from '../../../assets/audio/buttonhover.ogg'

const OptionThinButton = ({name, val}) => {
  const [playHoverSound] = useSound(hoverSound)
  return (
    <div className={classesShared.optionContainer}
    onMouseOver={() => playHoverSound()}
    style={{ paddingRight: 10 }}>
      <p className={classesShared.optionName}>{name}</p>
      <ButtonThin val={val}></ButtonThin>
    </div>
  )
}

export default OptionThinButton
