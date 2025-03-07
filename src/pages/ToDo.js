import lin from "../assets/Lin.png"
import insta from "../assets/insta.png"
import github from "../assets/github.png"
import todo from "../assets/ToDo.png"
import { useEffect } from "react"

function ToDo () {

    useEffect (() => {
        window.scrollTo(0,0)
    })

    return (
        <div id="siteContainer">
            <div id="header">
                <h1 id="mainTitle">To Do App</h1>
                <a id="backButton" href="/ThomasKenyon/">Home</a>
            </div>
            <div id="headerGradient" />
    
            <div id="projectPageContent">
                <div id="projectText">
                        <p className="pTextContent">
                                    Inside react there is  useful tool called states, this project was an intoduction to states and how the ability to update the website when the state changes can be utilized, you can try out the web app <a href="https://tomkeny.github.io/ToDoList/" target="_blank">here</a>.
                            <div className="borderline" />
                                    States in react are relatively simple but this project showed me how to make handler functions to properly handle manipulating states, a link to the code can be found <a href="https://github.com/TomKeny/ToDoList" target="_blank">here</a>.
                        </p>
                </div>
                <div id="projectGradient" />
                <div id="projectImage" style={{backgroundImage: `url(${todo})`, backgroundColor: `rgba(171, 214, 212, 0.57)`}}/>
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

export default ToDo