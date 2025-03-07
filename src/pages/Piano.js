import lin from "../assets/Lin.png"
import insta from "../assets/insta.png"
import github from "../assets/github.png"
import piano from "../assets/Piano.png"
import { useEffect } from "react"

function Piano () {

    useEffect (() => {
        window.scrollTo(0,0)
    })

    return (
        <div id="siteContainer">
            <div id="header">
                <h1 id="mainTitle">Piano Soundboard</h1>
                <a id="backButton" href="/ThomasKenyon/">Home</a>
            </div>
            <div id="headerGradient" />

            <div id="projectPageContent">
                <div id="projectText">
                        <p className="pTextContent">
                                    During my course we were tasked with creating a soundboard project so I decided to push myself and recreate an octave of a piano rather than a basic soundboard, this website was quite fun to make and you can check it out <a href="https://tomkeny.github.io/Week4Project/" target="_blank">here</a>.
                            <div className="borderline" />
                                    The code for this project is quite complicated, as it used a lot of code per key, I decided to have it iterate through lists of settings to generate the keys. I would like to go back and clean up the code a bit but if you would like to check out the code, you can do so here <a href="https://github.com/TomKeny/Week4Project" target="_blank">here</a>.
                        </p>
                </div>
                <div id="projectGradient" />
                <div id="projectImage" style={{backgroundImage: `url(${piano})`, backgroundColor: `rgba(138, 122, 95, 0.57)`}}/>
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

export default Piano