import lin from "../assets/Lin.png"
import insta from "../assets/insta.png"
import github from "../assets/github.png"
import slime from "../assets/Slime.png"
import { useEffect } from "react"

function Slime () {

    useEffect (() => {
        window.scrollTo(0,0)
    })

    return (
        <div id="siteContainer">
            <div id="header">
                <h1 id="mainTitle">Slime Adventure</h1>
                <a id="backButton" href="/ThomasKenyon/">Home</a>
            </div>
            <div id="headerGradient" />
    
            <div id="projectPageContent">
                <div id="projectText">
                    <p className="pTextContent">
                        Slime adventure is one of my greatest regrets, after finishing my software digital skills bootcamp I wanted to get back into game dev, to accomplish this I started teaching myself the godot game engine. I spent roughly 2 months creating lots of artwork and scripts for this game including multiple puzzles that made use of light and weight, sadly I never backed up the project and when swapping to a new pc, I lost a lot of files during the transfer, this included all of my godot projects.
                    <div className="borderline" />
                        The code for this project was split up into lots of smaller scripts with a focus on a "one script does one action" methodology and any data needed would come from a game manager script that managed all of the variables in the project, this also included saving the game using a json file to store and load save data, I still have some of the art assets although I will need to recreate a lot of them, I fully intend to rebuild this project in the future.
                    </p>
                </div>
                <div id="projectGradient" />
                <div id="projectImage" style={{backgroundImage: `url(${slime})`, backgroundColor: `rgba(106, 204, 131, 0.57)`}}/>
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

export default Slime