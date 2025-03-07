import lin from "../assets/Lin.png"
import insta from "../assets/insta.png"
import github from "../assets/github.png"
import port from "../assets/portf.png"
import { useEffect } from "react"

function Portfolio () {

    useEffect (() => {
        window.scrollTo(0,0)
    })

    return (
        <div id="siteContainer">
            <div id="header">
                <h1 id="mainTitle">Portfolio</h1>
                <a id="backButton" href="/ThomasKenyon/">Home</a>
            </div>
            <div id="headerGradient" />
    
            <div id="projectPageContent">
                <div id="projectText">
                    <p className="pTextContent">
                        I understand that this is a bit meta but I consider this website one of my strongest projects, I used to have a basic portfolio however I was not happy with it and as I needed a portfolio for a university application I decided to completely rewrite my protfolio from the ground up, learning from my previous mistakes and putting more effort into the design and feel of it.
                    <div className="borderline" />
                        The code for this website is fairly typical for a react application although due to limitations with github pages I need to use hashrouting instead or regular routing to set up more pages, another minor issue I have ran into so far is working with different aspect ratios, I am researching ways to change the styling of the page based on the size of the window and will be implementing a way in the future, I am actively developing this site and you can check out the code for it <a href="https://github.com/TomKeny/ThomasKenyon" target="_blank">here</a>.
                    </p>
                </div>
                <div id="projectGradient" />
                <div id="projectImage" style={{backgroundImage: `url(${port})`, backgroundColor: `rgba(189, 207, 200, 0.57)`}}/>
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

export default Portfolio