import lin from "../assets/Lin.png"
import insta from "../assets/insta.png"
import github from "../assets/github.png"
import retro from "../assets/retro1.png"
import { useEffect } from "react"

function Retro () {

    useEffect (() => {
        window.scrollTo(0,0)
    })

    return (
        <div id="siteContainer">
            <div id="header">
                <h1 id="mainTitle">R.E.T.R.O</h1>
                <a id="backButton" href="/ThomasKenyon/">Home</a>
            </div>
            <div id="headerGradient" />
    
            <div id="projectPageContent">
                <div id="projectText">
                    <p className="pTextContent">
                        During my unity Games development bootcamp, after learning the basics of unity programming and asset management, we held a 6 day gamejam by splitting the course cohort into 2 teams, the theme was "retro" and my team decided to go with an arcade style platformer set inside of an arcade, it isn't very long but it holds a lot of value to me as one of the first complete games I have worked on, you can actually try the game out yourself <a href="https://tomkeny.itch.io/retrogame" target="_blank">here</a>.
                    <div className="borderline" />
                        My role in the project was the framework for the main program as well as character spritesheets, with this being my introduction to pixel art. This was one of my first times doing proper collaborative programming and was a pleasant experience, although during the last 2 days a few of our members fell ill and 3 of us had to stay up for 2 full nights finishing off their code and assets and implementing them which was a surprisingly fun experience and I made some great friends during this. The code came out fairly well although a bit rushed and I am extremely happy with how the game came out.
                    </p>
                </div>
                <div id="projectGradient" />
                <div id="projectImage" style={{backgroundImage: `url(${retro})`, backgroundColor: `rgba(93, 138, 138, 0.57)`}}/>
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

export default Retro