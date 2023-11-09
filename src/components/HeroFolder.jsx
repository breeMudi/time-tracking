import { useEffect, useRef, useState } from "react"
import imagejeremy from "../assets/imagejeremy.png"
import { createGlobalState } from "react-hooks-global-state"

const initialState = { duration: 'daily' }
const { setGlobalState , useGlobalState } = createGlobalState(initialState)

const HeroFolder = () => {
  // const access = useRef('null')
    const [necesary] = useGlobalState("duration")
    // const [toggle, isToggle] = useState(false)
    // useEffect(()=>{setColor(selections[(Math.random()* 3).toFixed(0)]); console.log(colors)}, [colors, necesary])
    useEffect(()=>{console.log(necesary)}, [necesary])


    return (
      <div className="folder hero">
          <div className="folder-flap">
              <div className="hero-profile">
                <img className="hero-icon" src={imagejeremy} alt="Image of Jeremy" />
                <div className="hero-profile-content">
                  <span>Report for</span>
                  <span className="user-name">Jeremy Robson</span>
                </div>
              </div>
          </div>
          <div className="hero-time" >
            <span id="daily" onClick={()=> {setGlobalState("duration",'daily'); }} className="times">Daily</span>
            <span id="weekly" onClick={()=> {setGlobalState("duration",'weekly');}} className="times">Weekly</span>
            <span id="monthly" onClick={()=> {setGlobalState("duration",'monthly');}} className="times">Monthly</span>
          </div>
      </div>
    )
  }
  
  // HeroFolder.propTypes = String

  // eslint-disable-next-line react-refresh/only-export-components
  export { setGlobalState , useGlobalState }
  export default HeroFolder
  