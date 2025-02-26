import './App.css';
import { useState } from "react"
import Project from './projectDisplay';

import timeline from "./assets/timelineDark.png"
import retro from "./assets/retro1.png"
import VRF from "./assets/conveyors.png"
import slime from "./assets/Slime.png"
import procedural from "./assets/procedural.png"


function App() {
  const [curProj,setCurProj] = useState("software")

  return (
    <div id="siteContainer">
      <div id="header">
        <h1 id="mainTitle">Thomas Kenyon</h1>
      </div>
      <div id="headerGradient" />

      <div id="aboutMe">
        <svg height="600" width="600">
          <polygon points="0,0 600,0 400,600 0,600" style={{fill: "white"}}/>
        </svg>
      </div>
      <div id="counterGradient" />
      <div id="aboutText">
        <h2 id="aboutTitle">Software and Game Developer</h2>
        <p id="aboutDeets">all about me and what I do</p>
      </div>

      <div id="timelineSection">
        <h2 id="timelineTitle">Timeline of My Past 5 Years</h2>
        <img src={timeline} id="timelineImg" alt="timeline of the courses I have completed and jobs I've had"/>
      </div>

      <div id="projectSection">
        <div id="projectHeader">
          <h2 id="projectTitle">Projects</h2>
          <div id="projectButtons">
            <div className="button" onClick={()=> {setCurProj("software")}}>Software Development</div>
            <div className="button" onClick={()=> {setCurProj("game")}}>Game Development</div>
          </div>
        </div>
        <div id="projects">
          {curProj == "software" ?
        "software" :
        gameProjects.map((element) => <Project key= {Math.random()} name={element[0]} description={element[1]} image={element[2]} />)  
        }
        </div>
      </div>

      <div id="footer">
        <p id="footerText">Email: tomkenyon2003@gmail.com</p>
        <div id="footerBottom">
          <p id="copyright">© 2025 Thomas Kenyon</p>
        </div>
      </div>
    </div>
  )
}

const gameProjects = [
  ["R.E.T.R.O", "A small retro themed platformer built during a 6 day game jam", retro],
  ["VR Factory", "I led a small team in creating a VR factory building simulator for an industry leading company", VRF],
  ["Slime Adventure", "I used to work on a small game in my free time to improve my skills", slime],
  ["Wiggler", "I am teaching myself procedural animation for future projects I want to work on", procedural]
]

export default App;
