import React, { useState } from 'react'
import OptionMedium from '../../components/option_medium/OptionMedium'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import classes from './Settings.module.css'
import SettingsVideo from './settingsvideo/SettingsVideo'
import SettingsAudio from './settingsaudio/SettingsAudio'
import SettingsControls from './settingscontrols/SettingsControls'
import SettingsGame from './settingsgame/SettingsGame'

const id_nothing = 0
const id_game = 1
const id_controls = 2
const id_audio = 3
const id_video = 4

const Settings = () => {
  let [setting_id, changeSetting] = useState(id_video)
  function returnSetting()
  {
    switch (setting_id) {
      case id_game:
        return <SettingsGame />
      case id_controls:
        return <SettingsControls />
      case id_audio:
        return <SettingsAudio />
      case id_video:
        return <SettingsVideo />
      default:
        return <div></div>
    } 
  } 
  const [settingDescription, changeSettingDescription] = useState("Choose an option")  
  const settings = [
    {
        title: 'GAME',
        description: 'Customise difficulty and HUD settings',
        clickaction: () => changeSetting(id_game),
    },
    {
        title: 'CONTROLS',
        description: 'Customise your controls layout',
        clickaction: () => changeSetting(id_controls),
    },
    {
        title: 'AUDIO',
        description: 'Control music, sounds, menu volume',
        clickaction: () => changeSetting(id_audio),
    },
    {
        title: 'VIDEO',
        description: 'Customise your video settings',
        clickaction: () => changeSetting(id_video),
    }
  ]

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={classes.settingsDiv}
    >
      <div className={classes.settingsListContainer}>
        <div className={classes.upperMenu}>
        <h1>SETTINGS</h1>
            <div className={classes.settingsList}>
                {settings.map( (obj) => {
                    return <OptionMedium
                    actionhover={() => changeSettingDescription(obj.description)}
                    action={() => obj.clickaction()}
                    >{obj.title}</OptionMedium>
                } )}
            </div>
        </div>
        <div className={classes.lowerMenu}>
            <p>{settingDescription}</p>
            <Link className='linkButton' to='/menu'>
                <OptionMedium>BACK TO MENU</OptionMedium>
            </Link>
        </div>
      </div>
      <div className={classes.settingsContentContainer}>
        {returnSetting(setting_id)}
      </div>
    </motion.div>
  )
}

export default Settings
