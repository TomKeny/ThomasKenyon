import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import Home from './pages/Home';

import JournalApp from './pages/JournalApp'
import Keycode from "./pages/Keycode"
import Piano from "./pages/Piano"
import ToDo from "./pages/ToDo"
import Pallete from "./pages/Pallete"
import Restaurant from "./pages/Restaurant"
import Portfolio from "./pages/Port"
import Oscilloscope from "./pages/Oscilloscope"

import Retro from "./pages/Retro"
import VRF from "./pages/VRF"
import Tomb from "./pages/Tomb"
import Slime from "./pages/Slime"
import Wiggler from "./pages/Wiggler"

function App() {
return (
  <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/ThomasKenyon/" element={<Home/>} />

          <Route path="/ThomasKenyon/journalapp" element={<JournalApp />} />
          <Route path="/ThomasKenyon/Keycode" element={<Keycode />} />
          <Route path="/ThomasKenyon/Piano" element={<Piano />} />
          <Route path="/ThomasKenyon/ToDo" element={<ToDo />} />
          <Route path="/ThomasKenyon/Pallete" element={<Pallete />} />
          <Route path="/ThomasKenyon/Restaurant" element={<Restaurant />} />
          <Route path="/ThomasKenyon/Portfolio" element={<Portfolio />} />
          <Route path="/ThomasKenyon/Oscilloscope" element={<Oscilloscope />} />

          <Route path="/ThomasKenyon/Retro" element={<Retro />} />
          <Route path="/ThomasKenyon/VRF" element={<VRF />} />
          <Route path="/ThomasKenyon/Tomb" element={<Tomb />} />
          <Route path="/ThomasKenyon/Slime" element={<Slime />} />
          <Route path="/ThomasKenyon/Wiggler" element={<Wiggler />} />

        </Routes>
      </div>
    </Router>
)
}

export default App;
