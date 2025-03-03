import './App.css';
import {Router,Routes,Route,Link,HashRouter} from "react-router-dom"
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
  <HashRouter >
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" element={<Home/>} />

          <Route path="/journalapp" element={<JournalApp />} />
          <Route path="/Keycode" element={<Keycode />} />
          <Route path="/Piano" element={<Piano />} />
          <Route path="/ToDo" element={<ToDo />} />
          <Route path="/Pallete" element={<Pallete />} />
          <Route path="/Restaurant" element={<Restaurant />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Oscilloscope" element={<Oscilloscope />} />

          <Route path="/Retro" element={<Retro />} />
          <Route path="/VRF" element={<VRF />} />
          <Route path="/Tomb" element={<Tomb />} />
          <Route path="/Slime" element={<Slime />} />
          <Route path="/Wiggler" element={<Wiggler />} />

        </Routes>
      </div>
    </HashRouter>
)
}

export default App;
