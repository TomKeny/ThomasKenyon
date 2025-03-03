import lin from "../assets/Lin.png"
import insta from "../assets/insta.png"
import github from "../assets/github.png"

function Wiggler () {
    return (
        <div id="siteContainer">
            <div id="header">
                <h1 id="mainTitle">Wiggler</h1>
                <a id="backButton" href="/">Home</a>
            </div>
            <div id="headerGradient" />
    
    
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