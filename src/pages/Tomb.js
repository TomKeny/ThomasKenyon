import lin from "../assets/Lin.png"
import insta from "../assets/insta.png"
import github from "../assets/github.png"
import tomb from "../assets/ToM.png"
import { useEffect } from "react"

function Tomb () {

    useEffect (() => {
        window.scrollTo(0,0)
    })

    return (
        <div id="siteContainer">
            <div id="header">
                <h1 id="mainTitle">Tomb of Mythralis</h1>
                <a id="backButton" href="/ThomasKenyon/">Home</a>
            </div>
            <div id="headerGradient" />
    
            <div id="projectPageContent">
                <div id="projectText">
                    <p className="pTextContent">
                        During my software development digital skills bootcamp, we were tasked with creating a virtual escape room using nodeJS in teams of 3. Coming from a game dev background I decided to go above and beyond for this project and over the course of a few days we made a turn based combat game with passive and active abilites as well as a timed escape maze at the end, as well as far too much lore for a short dungeon escape terminal based game.
                    <div className="borderline" />
                        This project had a lot of planning and passion put into it as well as lots of solid code and robust systems designed to be added onto if we had the time. If you are familiar with nodeJS you can download the code from the repository <a href="https://github.com/TomKeny/Week6EscapeRoom" target="_blank">here</a> and run it using "node /index.js" in the terminal, it also contains links to all of our planning documents including our user flowcharts we used to guide us.
                    </p>
                </div>
                <div id="projectGradient" />
                <div id="projectImage" style={{backgroundImage: `url(${tomb})`, backgroundColor: `rgba(121, 144, 151, 0.57)`}}/>
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
        )
}

export default Tomb