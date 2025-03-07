import lin from "../assets/Lin.png"
import insta from "../assets/insta.png"
import github from "../assets/github.png"
import keycodeImg from "../assets/keyCode.png"
import { useEffect } from "react"

function Keycode () {

    useEffect (() => {
            window.scrollTo(0,0)
        })

    return (
        <div id="siteContainer">
            <div id="header">
                <h1 id="mainTitle">Keycode</h1>
                <a id="backButton" href="/ThomasKenyon/">Home</a>
            </div>
            <div id="headerGradient" />

            <div id="projectPageContent">
                <div id="projectText">
                    <p className="pTextContent">
                        During my course I was running into some issues with finding the right keycodes for certain keys, so I decided to create a website that gives all relevant information for a key pressed to help me develop other projects faster. You can find a link to the site <a href="https://tomkeny.github.io/week-4-key-code/" target="_blank">here</a>.
                    <div className="borderline" />
                        The code for this project was relatively simple as it stored a key press as a variable and displays the information it recieves from that variable, you can find the code <a href="https://github.com/TomKeny/week-4-key-code" target="_blank">here</a>.
                    </p>
                </div>
                <div id="projectGradient" />
                <div id="projectImage" style={{backgroundImage: `url(${keycodeImg})`, backgroundColor: `rgba(230, 211, 178, 0.57)`}}/>
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

export default Keycode