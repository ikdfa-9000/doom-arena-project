import React from 'react'
import TextShakingShadow from '../../../components/shared/TextShakingShadow'
import OptionThinSlider from '../../../components/options_thin/option_thin_slider/OptionThinSlider'

const SettingsAudio = () => {
  return (
    <div>
      <TextShakingShadow title="AUDIO"></TextShakingShadow>
      <OptionThinSlider name='Music' val='1.0' min='0' max='1.0' step='0.1'></OptionThinSlider>
      <OptionThinSlider name='Game Sounds' val='1.0' min='0' max='1.0' step='0.1'></OptionThinSlider>
      <OptionThinSlider name='Menu Sounds' val='1.0' min='0' max='1.0' step='0.1'></OptionThinSlider>
    </div>
  )
}

export default SettingsAudio