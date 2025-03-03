import { useState } from "react"
import Project from '../projectDisplay'

import timeline from "../assets/timelineDark.png"
import retro from "../assets/retro1.png"
import VRF from "../assets/conveyors.png"
import slime from "../assets/Slime.png"
import procedural from "../assets/procedural.png"
import tombOfM from "../assets/ToM.png"
import journal from "../assets/journal.png"
import keyCode from "../assets/keyCode.png"
import piano from "../assets/Piano.png"
import toDo from "../assets/ToDo.png"
import pallete from "../assets/ColourPallete.png"
import restaurant from "../assets/restaurant.png"
import portfolioImg from "../assets/portf.png"
import lin from "../assets/Lin.png"
import insta from "../assets/insta.png"
import github from "../assets/github.png"
import oscill from "../assets/oscill.png"

import api from "../skills/api.png"
import blender from "../skills/blender.png"
import csharp from "../skills/csharp.png"
import css from "../skills/css.png"
import githubLogo from "../skills/github.png"
import godot from "../skills/godot.png"
import html from "../skills/html.png"
import jest from "../skills/jest.png"
import js from "../skills/js.png"
import mongodb from "../skills/mongodb.png"
import nodejs from "../skills/nodejs.png"
import reactLogo from "../skills/react.png"
import sql from "../skills/sql.png"
import ue from "../skills/ue.png"
import unity from "../skills/unity.png"
import virtualbox from "../skills/virtualbox.png"


function Home () {

    const [curProj,setCurProj] = useState("software")

    return (<>
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
        <p id="aboutDeets">I'm Tom and I am an aspiring game and <br/>software developer constantly looking <br/>to imrove my skills and learn new <br/>ones <br/><br/>I spend most of my time working<br/> on projects as well as learning <br/>new skills to make those <br/>projects a reality</p>
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
        softwareProjects.map((element) => <Project key= {Math.random()} name={element[0]} description={element[1]} image={element[2]} link={element[3]}/>)   :
        gameProjects.map((element) => <Project key= {Math.random()} name={element[0]} description={element[1]} image={element[2]} link={element[3]}/>)  
        }
        </div>
      </div>
      <div id="skills">
        <div id="bottomProjects"/>
        <h1 className="skillsTitle">Skills</h1>
        <h1 className="miniTitle">Front end</h1>
        <div id="FrontEnd">
          <div className="skill">
            <p className="skillName">Javascript</p>
            <img className="skillImg" src={js}></img>
          </div>

          <div className="skill">
            <p className="skillName">HTML</p>
            <img className="skillImg" src={html}></img>
          </div>

          <div className="skill">
            <p className="skillName">React</p>
            <img className="skillImg" src={reactLogo}></img>
          </div>

          <div className="skill">
            <p className="skillName">CSS</p>
            <img className="skillImg" src={css}></img>
          </div>
        </div>
        <h1 className="miniTitle">Back end</h1>
        <div id="BackEnd">
          <div className="skill">
            <p className="skillName">C#</p>
            <img className="skillImg" src={csharp}></img>
          </div>

          <div className="skill">
            <p className="skillName">MongoDB</p>
            <img className="skillImg" src={mongodb}></img>
          </div>

          <div className="skill">
            <p className="skillName">NodeJS</p>
            <img className="skillImg" src={nodejs}></img>
          </div>

          <div className="skill">
            <p className="skillName">SQL</p>
            <img className="skillImg" src={sql}></img>
          </div>

          <div className="skill">
            <p className="skillName">APIs</p>
            <img className="skillImg" src={api}></img>
          </div>
        </div>
        <h1 className="miniTitle">Game Development</h1>
        <div id="GameDevSkills">
          <div className="skill">
            <p className="skillName">Unity</p>
            <img className="skillImg" src={unity}></img>
          </div>

          <div className="skill">
            <p className="skillName">Godot</p>
            <img className="skillImg" src={godot}></img>
          </div>

          <div className="skill">
            <p className="skillName">UE5</p>
            <img className="skillImg" src={ue}></img>
          </div>

          <div className="skill">
            <p className="skillName">Blender</p>
            <img className="skillImg" src={blender}></img>
          </div>
        </div>

        <h1 className="miniTitle">miscellaneous</h1>
        <div id="miscellaneous">
          <div className="skill">
            <p className="skillName">GitHub</p>
            <img className="skillImg" src={githubLogo}></img>
          </div>

          <div className="skill">
            <p className="skillName">Jest</p>
            <img className="skillImg" src={jest}></img>
          </div>

          <div className="skill">
            <p className="skillName">Oraclebox</p>
            <img className="skillImg" src={virtualbox}></img>
          </div>
        </div>
      </div>


      <div id="footer">
        <div id="links">
          <a className='social' style={{backgroundImage: `url(${lin})`}} href="https://www.linkedin.com/in/thomaspkenyon/" target="blank"/>
          <a className='social' style={{backgroundImage: `url(${github})`}} href="https://github.com/TomKeny" target="_blank"/>
          <a className='social' style={{backgroundImage: `url(${insta})`}} href="https://www.instagram.com/frog.inapond/?next=%2Ffrog.inapond%2F" target="_blank" />
        </div>
        <p id="footerText">Email: tomkenyon2003@gmail.com</p>
        <div id="footerBottom">
          <p id="copyright">© 2025 Thomas Kenyon</p>
        </div>
      </div>
    </div>
    </>
  )
}

const gameProjects = [
  ["R.E.T.R.O", "A small retro themed platformer built during a 6 day game jam", retro, "/ThomasKenyon/#/Retro"],
  ["VR Factory", "I led a small team in creating a VR factory building simulator for an industry leading company", VRF, "/ThomasKenyon/#/VRF"],
  ["Tomb of Mythralis", "A small text based combat game using ASCII art I made as part of a small group", tombOfM, "/ThomasKenyon/#/Tomb"],
  ["Slime Adventure", "I used to work on a small game in my free time to improve my skills", slime, "/ThomasKenyon/#/Slime"],
  ["Wiggler", "I am teaching myself procedural animation for future projects I want to work on", procedural, "/ThomasKenyon/#/Wiggler"]
]

const softwareProjects = [
  ["Journal App", "I created a journal website to help record all my notes for my software digital skills bootcamp", journal, "/ThomasKenyon/#/journalapp"],
  ["Keycode", "Whilst making a soundboard app, I made this website to get accurate key information", keyCode, "/ThomasKenyon/#/Keycode"],
  ["Piano Soundboard", "A small soundboard project involving a single octave of a piano", piano, "/ThomasKenyon/#/Piano"],
  ["TODO list", "I used this basic project as a way to learn database management in react", toDo, "/ThomasKenyon/#/ToDo"],
  ["Colour Pallete", "To learn how to use APIs I created a colour pallete generator which I still use to this day", pallete, "/ThomasKenyon/#/Pallete"],
  ["Restaurant Full Stack", "To conclude our software digital skills bootcamp we created a full stack mock takeaway site", restaurant, "/ThomasKenyon/#/Restaurant"],
  ["Portfolio", "This very site which is constantly evolving and expanding after each project", portfolioImg, "/ThomasKenyon/#/Portfolio"],
  ["Oscilloscope", "I'm making a small oscillator program to get used to Web Audio API", oscill, "/ThomasKenyon/#/Oscilloscope"]
]

export default Home