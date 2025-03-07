import lin from "../assets/Lin.png"
import insta from "../assets/insta.png"
import github from "../assets/github.png"
import journalappImg from "../assets/journalappProjImg.png"
import { useEffect } from "react"

function JournalApp () {

    useEffect (() => {
        window.scrollTo(0,0)
    })
    
    return (
    <div id="siteContainer">
        <div id="header">
            <h1 id="mainTitle">Journal app</h1>
            <a id="backButton" href="/ThomasKenyon/">Home</a>
        </div>
        <div id="headerGradient" />

        <div id="projectPageContent">
            <div id="projectText">
                <p className="pTextContent">During my software digital skills bootcamp I needed to keep notes of everything I was learning, and so I decided that the best way to do that would be by making a website and keeping my notes there. 
                <br/><br/> 
                My journal website started off with a page for each day of notes however, after learning the basics of react I converted the journal website into a single page react app to improve the user exeperience but mostly as a way to test my skills and reinforce my understanding of react. 
                <br/><br/>
                It contains a majority of my notes from my bootcamp as well as some in-depth looks at some of my projects from a technical standpoint, you can check it out <a href="https://tomkeny.github.io/journalapp/" target="_blank">here</a>.
                <div className="borderline" />
                One of the major technical challenges I faced with this project was storing the large amount of content for the journal, whilst some days only had a couple of paragraphs worth of notes, other days had in depth explanations into core concepts. To deal with this issue I stored all of the content in an array in a seperate react component and accessed it using indexing involving the week and day of the week that were being accessed. Inside the content array everything was stored in chronological order with comments to help find certain days.
                <br/><br/>
                Overall, I believe that for an earlier project it is coded quite well although there are some changes I would like to go back and make in the future as well as finishing off the final entries in week 11. The biggest change I would make would be to change it from a single page app to having a seperate page for each week because it currently has some issues with loading images when trying to load some of the larger entries and I believe breaking it up into pages could solve that issue. If you are interested in the code you can click <a href="https://github.com/TomKeny/journalapp" target="_blank">here</a> to access the github repository.
                </p>
            </div>
            <div id="projectGradient" />
            <div id="projectImage" style={{backgroundImage: `url(${journalappImg})`, backgroundColor: `rgba(90, 189, 123, 0.568)`}}/>
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

export default JournalApp