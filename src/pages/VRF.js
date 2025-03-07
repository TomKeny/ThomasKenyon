import lin from "../assets/Lin.png"
import insta from "../assets/insta.png"
import github from "../assets/github.png"
import vrf from "../assets/conveyors.png"
import { useEffect } from "react"

function VRF () {

    useEffect (() => {
        window.scrollTo(0,0)
    })

    return (
        <div id="siteContainer">
            <div id="header">
                <h1 id="mainTitle">VR Factory Builder</h1>
                <a id="backButton" href="/ThomasKenyon/">Home</a>
            </div>
            <div id="headerGradient" />
    
            <div id="projectPageContent">
                <div id="projectText">
                    <p className="pTextContent">
                        For our final projects on my unity game development bootcamp, we were given an industry project to complete, for our group I was team lead, our client asked for a VR application where you can build a modular factory with visible supply lines.Over the 4 weeks we were given, every friday we provided them with a presentation of all major updates on the project and I delivered a final 20 minute presentation to the clients in person at the end of the project.
                    <div className="borderline" />
                        The project itself went very well with our team having an exceptional 3D modeler as well as a talanted concept artist, our final product that we presented was considered one of the best they had had in years and I was very happy to recieve praise from my team for how well I supported my teammates and made sure that everything was communicated properly as well as any assistance being requested from lecturers immediately so that we could solve issues in a timely manner. I cannot go into more detail however due to an NDA I signed with the client before starting the project.
                    </p>
                </div>
                <div id="projectGradient" />
                <div id="projectImage" style={{backgroundImage: `url(${vrf})`, backgroundColor: `rgba(168, 180, 182, 0.57)`}}/>
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

export default VRF