import { useEffect } from "react"
import imagejeremy from "../assets/imagejeremy.png"
import { createGlobalState } from "react-hooks-global-state"

const initialState = { duration: 'daily' }
const { setGlobalState , useGlobalState } = createGlobalState(initialState)

const HeroFolder = () => {
    // const [values, setValue] = useGlobalState('duration')
    const [necesary] = useGlobalState("duration")
    useEffect(()=>{console.log('this oo',necesary)}, [necesary])
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
          <div className="hero-time" id={necesary}>
            <span className="daily" onClick={()=> setGlobalState("duration",'daily')}>Daily</span>
            <span className="weekly" onClick={()=> setGlobalState("duration",'weekly')}>Weekly</span>
            <span className="monthly" onClick={()=> setGlobalState("duration",'monthly')}>Monthly</span>
          </div>
      </div>
    )
  }
  
  // HeroFolder.propTypes = String

  // eslint-disable-next-line react-refresh/only-export-components
  export { setGlobalState , useGlobalState }
  export default HeroFolder
  