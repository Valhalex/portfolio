import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import "./app.scss"
import {useState} from 'react'
import Menu from './components/menu/Menu'

import { ParallaxProvider } from 'react-scroll-parallax'

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <ParallaxProvider>
    <div className="app">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
       <Intro/>
       <Portfolio/>
       <Testimonials/>
       <Contact/>
     </div>
    </div>
    </ParallaxProvider>
  );
}

export default App;