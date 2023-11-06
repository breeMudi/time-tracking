import Folder from './Folder';
import HeroFolder from './HeroFolder';

import iconwork from "../assets/icon-work.svg"
import iconplay from "../assets/icon-play.svg"
import iconsc from "../assets/icon-self-care.svg"
import iconsocial from "../assets/icon-social.svg"
import iconstudy from "../assets/icon-study.svg"
import iconexercise from "../assets/icon-exercise.svg"


export default function Home() {
  return (
    <div className="wrapper">
      <HeroFolder />
      <div className='wrapper2'>
      <Folder color={"#ff8c66"} source={iconwork} hours={32} duration={36}/>
      <Folder color={"#56c2e6"} source={iconplay} hours={10} duration={8}/>
      <Folder color={"#ff5c7c"} source={iconstudy} hours={4} duration={7}/>
      <Folder color={"#4acf81"} source={iconexercise} hours={4} duration={5}/>
      <Folder color={"#7536d3"} source={iconsocial} hours={5} duration={10}/>
      <Folder color={"#f1c65b"} source={iconsc} hours={2} duration={2}/>
      </div>
    </div>
  )
}
