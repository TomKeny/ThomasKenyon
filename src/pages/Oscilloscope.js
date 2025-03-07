import lin from "../assets/Lin.png"
import insta from "../assets/insta.png"
import github from "../assets/github.png"
import oscill from "../assets/oscill.png"
import { useEffect } from "react"

function Oscilloscope () {

    useEffect (() => {
        window.scrollTo(0,0)
    })

    return (
        <div id="siteContainer">
            <div id="header">
                <h1 id="mainTitle">Oscilloscope</h1>
                <a id="backButton" href="/ThomasKenyon/">Home</a>
            </div>
            <div id="headerGradient" />
    
            <div id="projectPageContent">
                <div id="projectText">
                    <p className="pTextContent">
                        On my current course we were tasked with creating a soundboard project similar to my piano project from an earlier bootcamp, we decided that I could submit my previous project if I used the time given to work on a more complex project of my choosing, sticking with the theme of sound I decided to learn how to use the web audio API and use it to make an oscilloscope, you can check it out <a href="https://tomkeny.github.io/oscilloscope/" target="_blank">here</a> (Volume Warning, it can be quite loud even at minimum settings depending on your setup).
                    <div className="borderline" />
                        The code for this project is unfinished and there are some major bugs involved with creating and deleting tracks that I intend to fix once I have the time, if you are interested you can check out the code <a href="https://github.com/TomKeny/oscilloscope" target="_blank">here</a>.
                    </p>
                </div>
                <div id="projectGradient" />
                <div id="projectImage" style={{backgroundImage: `url(${oscill})`, backgroundColor: `rgba(56, 56, 56, 0.57)`}}/>
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

export default Oscilloscope