import lin from "../assets/Lin.png"
import insta from "../assets/insta.png"
import github from "../assets/github.png"
import restaurant from "../assets/restaurant.png"
import { useEffect } from "react"

function Restaurant () {

    useEffect (() => {
        window.scrollTo(0,0)
    })

    return (
        <div id="siteContainer">
            <div id="header">
                <h1 id="mainTitle">Restaurant Full Stack</h1>
                <a id="backButton" href="/ThomasKenyon/">Home</a>
            </div>
            <div id="headerGradient" />
    
            <div id="projectPageContent">
                <div id="projectText">
                        <p className="pTextContent">
                                    During my software development digital skills bootcamp, for our final project we split into groups of 4 and created full stack applications, for our full stack application we decided to mimic a real world example and create a mock takeaway ordering website. for the project we used APIs that give nutritional information, we also had a fully functional backend database that would store account information as well as orders linked to those accounts. This is the most technical project I have done so far and was extremely fun to work on, I was in charge of a lot of the database work including any functions that would access or manipulate the mongoDB database. Sadly, as this is a project with a database, it is not currently online due to the database owner needing to use their one free mongoDB database cluster for another project.
                            <div className="borderline" />
                                    As this was a collaborative project, a lot of my code had to be more readable and self explaining than normal so I held myself to a much higher standard than usual, my teammates also produced exceptional code and made use of multiple APIs to bring the web app to life. After the project was submitted I would consider it a fully functional takeaway website minus the paying at checkout and the restaurant itself. I recommend checking out the github <a href="https://github.com/TomKeny/Restaurant-Full-Stack" target="_blank">here</a>, it has links to the documents we used to plan and create the project which can give a clearer picture of our vision for the project.
                        </p>
                </div>
                <div id="projectGradient" />
                <div id="projectImage" style={{backgroundImage: `url(${restaurant})`, backgroundColor: `rgba(168, 167, 93, 0.57)`}}/>
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

export default Restaurant