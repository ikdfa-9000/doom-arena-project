import React, { useState } from 'react'
import classes from './CheckboxThin.module.css'
import useSound from 'use-sound'
import clickSound from '../../../assets/audio/select.ogg'

const CheckboxThin = ({name}) => {
  const [playClickSound] = useSound(clickSound)
  const [isEnabled, changeIsEnabled] = useState(false)

  return (
    <div className={classes.checkboxContainer} onClick={
        () => {
            isEnabled ? changeIsEnabled(false) : changeIsEnabled(true)
            playClickSound()
        }
    }>
        { isEnabled ? <div className={classes.checkboxInsides}></div> : <div></div>}
    </div>
  )
}

export default CheckboxThin