import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Work from "./components/works/Work"
import About from "./components/about/AboutMe"
import "./app.scss"

import { useState } from "react";
import Menu from "./components/menu/Menu";




function App() {
///initial stage for menu open///
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className ="app">
   <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
   <div className="sections">
     <Intro/>
     <Work/>
     <About/>
   </div>
   </div>
    );

  }
export default App;