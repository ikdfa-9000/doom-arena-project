import React, { useState } from 'react'
import { animate, motion, useAnimate } from 'framer-motion'
import OptionMedium from '../../components/option_medium/OptionMedium.jsx'
import OptionContent from './OptionContent.jsx'
import classes from './PlayMenu.module.css'
import { Link } from 'react-router-dom'
import PlayVideo from '../../assets/vids/playmenu.mp4'
import UACImage from '../../assets/misc/banners/uac_banner.png'
import HellImage from '../../assets/misc/banners/hell_banner.png'
import UrdakImage from '../../assets/misc/banners/urdak_banner.png'
import HellOnEarthImage from '../../assets/misc/banners/hellonearth_banner.png'

const PlayMenu = () => {

  const [optionDescription, changeOptionDescription] = useState("Choose an option")
  const [optionSectionRef, animateOptionSection] = useAnimate()
  const [isButtonVisible, changeButtonVisibility] = useState(false)

  const [stats, changeStats] = useState({
    title: "",
    image: UACImage,
    highscore: "",
    time: "",
    kills: "",
    rounds: ""
  })

  const optionsContents = [
    {
      id: 1,
      title: "UAC LABS",
      image: UACImage,
      highscore: 3200,
      time: "01:00",
      kills: "10",
      rounds: "10",
      message: "Fight demons in UAC Mars Facility"
    }, 
    {
      id: 2,
      title: "SOUL CHAMBER",
      image: HellImage,
      highscore: 1240,
      time: "02:47",
      kills: "18",
      rounds: "5",
      message: "Fight demons in hell's Soul Chamber"
    },
    {
      id: 3,
      title: "URDAK",
      image: UrdakImage,
      highscore: 5405,
      time: "03:58",
      kills: "51",
      rounds: "6",
      message: "Fight demons in Urdak, a dying Heaven"
    },
    {
      id: 4,
      title: "HELL ON EARTH",
      image: HellOnEarthImage,
      highscore: 840,
      time: "00:46",
      kills: "70",
      rounds: "10",
      message: "Fight demons on Earth, all corrupted by hell's forces"
    }
  ]

  return (
    <motion.div 
      className={classes.playDiv}
      initial={{ opacity: 0, marginLeft: -0 }}
      animate={{ opacity: 1, marginLeft: 100 }}
      transition={{ duration: 0.35 }}>
      <div className={classes.optionsSection}>
        <h4 style={{paddingLeft: 12}} className='redText'>PLAY</h4>
        <h1 style={{paddingLeft: 12}} >SELECT THE ARENA</h1>
        <br></br>
        <div className={classes.optionList}>
          {optionsContents.map( (obj) => {
            return <OptionMedium 
            key={obj.id}
            action={() => {
              changeStats({
              title: obj.title, 
              image: obj.image,
              highscore: obj.highscore,
              time: obj.time,
              kills: obj.kills,
              rounds: obj.rounds})
              animateOptionSection(optionSectionRef.current, {opacity: [0, 1], marginLeft: [300, 0]}, { duration: 0.4 })
              changeButtonVisibility(true)
            }}
            actionhover={() => {changeOptionDescription(obj.message)}}>
              {obj.title}
            </OptionMedium>
          } )}
        </div>
        <div className={classes.lowerMenu}>
          { isButtonVisible 
          ? <Link to='/menu' className='linkButton'>
              <OptionMedium>
                <motion.h2
                animate={{opacity: [0, 1]}}
                transition={{duration: 0.25}}
                >PLAY</motion.h2>
              </OptionMedium>
            </Link> 
          : <div></div>}
          <p style={{paddingLeft: 12}}>{optionDescription}</p>
          <Link to='/menu' className='linkButton'>
            <OptionMedium>BACK TO MENU</OptionMedium>
          </Link>
        </div>
      </div>
      <div ref={optionSectionRef} style={{
        width: '50%',
        opacity: 0,
        marginLeft: 300,
        height: '100%',
      }}>
      <OptionContent 
        title={stats.title}
        image={stats.image}
        highscore={stats.highscore}
        time={stats.time}
        kills={stats.kills}
        rounds={stats.rounds}></OptionContent>
      </div>
    </motion.div>
  )
}

export default PlayMenu
