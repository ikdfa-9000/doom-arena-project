import React from 'react'
import TextShakingShadow from '../../../components/shared/TextShakingShadow'
import OptionThinCheckbox from '../../../components/options_thin/option_thin_checkbox/OptionThinCheckbox'
import OptionThinSlider from '../../../components/options_thin/option_thin_slider/OptionThinSlider'

const SettingsGame = () => {
  return (
    <div>
      <TextShakingShadow title="GAME"></TextShakingShadow>
      <OptionThinCheckbox name="Classic DOOM Weapon Pose"></OptionThinCheckbox>
      <OptionThinSlider name='Field of View' val='90' min='90' max='120' step='1'></OptionThinSlider>
    </div>
  )
}

export default SettingsGame
