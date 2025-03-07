import lin from "../assets/Lin.png"
import insta from "../assets/insta.png"
import github from "../assets/github.png"
import pallete from "../assets/ColourPallete.png"
import { useEffect } from "react"

function Pallete () {

    useEffect (() => {
        window.scrollTo(0,0)
    })

    return (
        <div id="siteContainer">
            <div id="header">
                <h1 id="mainTitle">Colour Pallete Generator</h1>
                <a id="backButton" href="/ThomasKenyon/">Home</a>
            </div>
            <div id="headerGradient" />
    
            <div id="projectPageContent">
                <div id="projectText">
                        <p className="pTextContent">
                                    This is one of my favourite projects but also one of my most frustrating to make, this is a project I made so that I could learn how to make requests to APIs and how to handle the data recieved from them. The web app can be used to generate a colour pallete of a custom size by generating lots of similar colours with some custom parameters you can set, I used this quite often back when I did lots of pixel art in my free time. The API has some issues when accessed through github and will only work half of the time due to a cors issue(after lots of troubleshooting), you can try it out <a href="https://tomkeny.github.io/thirdapp/" target="_blank">here</a>.
                            <div className="borderline" />
                                    Overall, I think the code is good, it isn't overly complicated which is an issue I used to cause for myself a lot but it still works properly when the API is accepting requests, to check out the code for yourself you can click <a href="https://github.com/TomKeny/thirdapp" target="_blank">here</a>.
                        </p>
                </div>
                <div id="projectGradient" />
                <div id="projectImage" style={{backgroundImage: `url(${pallete})`, backgroundColor: `rgba(171, 214, 212, 0.57)`}}/>
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

export default Pallete