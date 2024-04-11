import React from 'react'
import TextShakingShadow from '../../../components/shared/TextShakingShadow'
import OptionThinButton from '../../../components/options_thin/option_thin_button/OptionThinButton'
import OptionThinSlider from '../../../components/options_thin/option_thin_slider/OptionThinSlider'

const SettingsControls = () => {
  return (
    <div>
      <TextShakingShadow title="CONTROLS"></TextShakingShadow>
      <h3>Movement</h3>
      <OptionThinSlider name="Mouse Sensitivity" min='0' max='1' step='0.05' val="1"></OptionThinSlider>
      <OptionThinButton name="Go Forward" val="w"></OptionThinButton>
      <OptionThinButton name="Go Left" val="a"></OptionThinButton>
      <OptionThinButton name="Go Backwards" val="s"></OptionThinButton>
      <OptionThinButton name="Go Right" val="d"></OptionThinButton>
      <OptionThinButton name="Jump" val="Space"></OptionThinButton>
      <OptionThinButton name="Dash" val="Shift"></OptionThinButton>
      <p>and all that stuff</p>
    </div>
  )
}

export default SettingsControls
