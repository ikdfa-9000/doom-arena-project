import React from 'react'
import classes from './SliderThin.module.css'
import { useState } from 'react'

const SliderThin = ({min, max, val, step}) => {
  const [value, setValue] = useState(val)
  const getSliderFillWidth = () => {
    console.log(250 * (value) / max)
    console.log('bro')
    return 250 * (value - min) / (max - min)
  }
  return (
    <div className={classes.sliderContainer}>
      <div
        style={{
          width: getSliderFillWidth(),
          backgroundColor: '#d8d8d880',
          position: 'absolute',
          height: 45,
          paddingRight: 0
        }}>

      </div>
      <div className={classes.centerDivNumber}>
        <div className={classes.centerDivNumberDiv}> {/* вы не поймете */}
          <p className={classes.numberSlider}>{value}</p>
        </div>
      </div>
      <div className={classes.centerDivSlider}>
        <input type="range" min={min} max={max} 
        value={value}
        step={step}
        onChange={e => setValue(e.target.value)}
        className={classes.slider}></input> 
      </div>
    </div>
  )
}

export default SliderThin
