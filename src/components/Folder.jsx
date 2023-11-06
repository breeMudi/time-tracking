// import iconwork from "../assets/icon-work.svg"
import { useState } from "react";



const Folder = ({ color, source }) => {
  return (
    <div className="folder content" style={{backgroundColor: color}}>
      <img className="eventIcon" src={source} alt="" />
      <div className="folder-flap">
        <div className="event">
          <div className="left event-type">Work</div>
          <div className="right dots">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="event eventdesktop">
          <span className="left event-hours">32hrs</span>
          <span className="right event-span">Last Week - <span className="past-hours">36</span> hrs</span>
        </div>
      </div>
    </div>
  )
}

Folder.propTypes = String

export default Folder
