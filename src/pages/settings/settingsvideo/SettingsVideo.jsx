import React from 'react'
import TextShakingShadow from '../../../components/shared/TextShakingShadow'
import OptionThinCheckbox from '../../../components/options_thin/option_thin_checkbox/OptionThinCheckbox'


const SettingsVideo = () => {
  return (
    <div>
      <TextShakingShadow title="VIDEO"></TextShakingShadow>
      <OptionThinCheckbox name="Lighting"></OptionThinCheckbox>
      <OptionThinCheckbox name="Particles"></OptionThinCheckbox>
      <OptionThinCheckbox name="PSX Style Screen"></OptionThinCheckbox>
    </div>
  )
}

export default SettingsVideo
