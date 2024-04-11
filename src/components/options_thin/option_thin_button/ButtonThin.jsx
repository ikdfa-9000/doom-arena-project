import React, { useState } from 'react'
import classes from './ButtonThin.module.css'

const ButtonThin = ({val}) => {
  return (
    <p className={classes.buttonText}>{val}</p>
  )
}

export default ButtonThin