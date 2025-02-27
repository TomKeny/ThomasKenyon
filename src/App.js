import './App.css';
import { useState } from "react"
import Project from './projectDisplay';

import timeline from "./assets/timelineDark.png"
import retro from "./assets/retro1.png"
import VRF from "./assets/conveyors.png"
import slime from "./assets/Slime.png"
import procedural from "./assets/procedural.png"
import tombOfM from "./assets/ToM.png"
import journal from "./assets/journal.png"
import keyCode from "./assets/keyCode.png"
import piano from "./assets/Piano.png"
import toDo from "./assets/ToDo.png"
import pallete from "./assets/ColourPallete.png"
import restaurant from "./assets/restaurant.png"
import portfolioImg from "./assets/portf.png"

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
        softwareProjects.map((element) => <Project key= {Math.random()} name={element[0]} description={element[1]} image={element[2]} />)   :
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
  ["TOmb of Mythralis", "A small text based combat game using ASCII art I made as part of a small group", tombOfM],
  ["Slime Adventure", "I used to work on a small game in my free time to improve my skills", slime],
  ["Wiggler", "I am teaching myself procedural animation for future projects I want to work on", procedural]
]

const softwareProjects = [
  ["Journal App", "I created a journal website to help record all my notes for my software digital skills bootcamp", journal],
  ["Keycode", "Whilst making a soundboard app, I ran into an issue with getting key information, I created this app to help fix this issue", keyCode],
  ["Piano Soundboard", "A small soundboard project involving a single octave of a piano", piano],
  ["TODO list", "I used this basic project as a way to learn database management in react", toDo],
  ["Colour Pallete", "To learn how to use APIs I created a colour pallete generator which I still use to this day", pallete],
  ["Restaurant Full Stack", "To conclude our software digital skills bootcamp we created a full stack mock takeaway site", restaurant],
  ["Portfolio", "This very site which is constantly evolving and expanding after each project", portfolioImg]
]

export default App;
