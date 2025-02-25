import './App.css';

function App() {
  return (
    <div id="siteContainer">
      <div id="header">
        <h1 id="mainTitle">Thomas Kenyon</h1>
      </div>
      <div id="headerGradient"></div>
      <div id="aboutMe">
        <svg height="600" width="600">
          <polygon points="0,0 600,0 400,600 0,600" style={{fill: "white"}}/>
        </svg>
      </div>
      <div id="counterGradient" />

      <div id="footer">
        <p id="footerText">Email: tomkenyon2003@gmail.com</p>
        <div id="footerBottom">
          <p id="copyright">© 2025 Thomas Kenyon</p>
        </div>
      </div>
    </div>
  )
}

export default App;
