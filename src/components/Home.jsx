import Folder from './Folder';
import { useGlobalState } from "./HeroFolder"

import HeroFolder from './HeroFolder';

import iconwork from "../assets/icon-work.svg"
import iconplay from "../assets/icon-play.svg"
import iconsc from "../assets/icon-self-care.svg"
import iconsocial from "../assets/icon-social.svg"
import iconstudy from "../assets/icon-study.svg"
import iconexercise from "../assets/icon-exercise.svg"



export default function Home() {
  const possible = ['daily', 'weekly', 'monthly']
  const needed = useGlobalState("duration")
  // console.log('needed is: ', typeof(needed[0]), possible.indexOf(needed[0]))

  const heroValues = {
    daily:{work:[5, 7], play:[1, 2], study:[0, 1], exercise:[1, 1], social:[1,3], selfCare:[0,1]},
    weekly:{work:[32, 36], play:[10, 8], study:[4, 7], exercise:[4, 5], social:[5, 10], selfCare:[2, 2]},
    monthly:{work:[103, 128], play:[23, 29], study:[13, 19], exercise:[11, 18], social:[21, 23], selfCare:[7, 11]}
  }

  let forDay = heroValues[Object.keys(heroValues)[possible.indexOf(needed[0])]]
  // console.log(forDay.work)
  return (
    <div className="wrapper">
      <HeroFolder />
      <div className='wrapper2'>
      <Folder color={"#ff8c66"} eventType={'Work'} source={iconwork} hours={forDay.work[0]} duration={forDay.work[1]}/>
      <Folder color={"#56c2e6"} eventType={'Play'} source={iconplay} hours={forDay.play[0]} duration={forDay.play[1]}/>
      <Folder color={"#ff5c7c"} eventType={'Study'} source={iconstudy} hours={forDay.study[0]} duration={forDay.study[1]}/>
      <Folder color={"#4acf81"} eventType={'Exercise'} source={iconexercise} hours={forDay.exercise[0]} duration={forDay.exercise[1]}/>
      <Folder color={"#7536d3"} eventType={'Social'} source={iconsocial} hours={forDay.social[0]} duration={forDay.social[1]}/>
      <Folder color={"#f1c65b"} eventType={'Self Care'} source={iconsc} hours={forDay.selfCare[0]} duration={forDay.selfCare[1]}/>
      </div>
    </div>
  )
}
