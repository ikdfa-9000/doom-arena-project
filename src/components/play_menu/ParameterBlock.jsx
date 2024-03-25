import React from 'react'
import WhiteLine from '../shared/WhiteLine'
import classes from './ParameterBlock.module.css'

const ParameterBlock = ({ text, number }) => {
  return (
    <div className={classes.parameterDiv}>
      <WhiteLine></WhiteLine>
      <div className={classes.stat}>
        <p style={{margin: 10}}>{text}</p>
        <p style={{margin: 10}}>{number}</p>
      </div>
    </div>
  )
}

export default ParameterBlock
