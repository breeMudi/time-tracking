import imagejeremy from "../assets/imagejeremy.png"

const HeroFolder = () => {
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
          <div className="hero-time">
            <span>Daily</span>
            <span>Weekly</span>
            <span>Monthly</span>
          </div>
      </div>
    )
  }
  
  export default HeroFolder
  