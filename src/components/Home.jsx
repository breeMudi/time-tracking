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
      <Folder color={"#ff8c66"} source={iconwork}/>
      <Folder color={"#56c2e6"} source={iconplay}/>
      <Folder color={"#ff5c7c"} source={iconstudy}/>
      <Folder color={"#4acf81"} source={iconexercise}/>
      <Folder color={"#7536d3"} source={iconsocial}/>
      <Folder color={"#f1c65b"} source={iconsc}/>
      </div>
    </div>
  )
}
