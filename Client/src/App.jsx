import React, {useState} from 'react';
import './App.scss';
import Intro from './Components/Intro/Intro';
import NavBar from './Components/navbar/NavBar';
import PortFolio from './Components/portfolio/PortFolio'
import Projects from './Components/Projects/Project'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Menu from './Components/menu/Menu';
import About from './Components/About/About';
import SideBar from './Components/SideBar/SideBar';
import ProjectInfo from './Components/ProjectInfo/ProjectInfo';
function App() {
  const [ProjectOpen,setProjectOpen]=useState(false)
  const [menuOpen,setMenuOpen]=useState(false)
  const [ProjectData,setProjectData]=useState(null)

  return (
    <div className="App">
      <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <SideBar/>
      <div className='sections'>
        
        <Intro/>
        <About/>
        <PortFolio ProjectData={ProjectData}setProjectData={setProjectData} ProjectOpen={ProjectOpen} setProjectOpen={setProjectOpen}/>
        {/* <Projects/>
        <Testimonials/> showTitle={showTitle} setShowTile={setShowTile}*/}
        <Contact />
        
      </div>
      <ProjectInfo ProjectOpen={ProjectOpen} setProjectOpen={setProjectOpen} ProjectData={ProjectData}setProjectData={setProjectData}/>
    </div>
  );
}

export default App;
