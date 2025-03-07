import lin from "../assets/Lin.png"
import insta from "../assets/insta.png"
import github from "../assets/github.png"
import wiggler from "../assets/procedural.png"
import { useEffect } from "react"

function Wiggler () {

    useEffect (() => {
        window.scrollTo(0,0)
    })

    return (
        <div id="siteContainer">
            <div id="header">
                <h1 id="mainTitle">Wiggler</h1>
                <a id="backButton" href="/ThomasKenyon/">Home</a>
            </div>
            <div id="headerGradient" />
    
            <div id="projectPageContent">
                <div id="projectText">
                    <p className="pTextContent">
                        Whilst creating slime adventure I wanted to create some procedural animations, to do this I set up a new Godot project and started working on some basic worm animations that would follow the cursor. I used complex equations to make the worm have momentum and give it a springy feel, I even gave it eyes and got a little too emotionally attached to it, sadly it was lost along with slime adventure during my file transfer.
                    <div className="borderline" />
                        The code for the project itself was relatively simple, the complexity came in the equations that decided each segments position and rotation to make sure that it didn't look odd and it followed the mouse or guide segment properly. I also intend to recreate this project as well as move onto inverse kinematics which i have a strong interest in learning and implementing in future games.
                    </p>
                </div>
                <div id="projectGradient" />
                <div id="projectImage" style={{backgroundImage: `url(${wiggler})`, backgroundColor: `rgba(163, 163, 163, 0.23)`}}/>
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

export default Wiggler