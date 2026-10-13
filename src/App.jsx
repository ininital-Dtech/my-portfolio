import './App.css';
import { useState } from 'react';
import heroImage from './assets/hero.png';
import profileImage from './assets/profile-image.jpg';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Project from './components/Project.jsx';
import Skill from './components/Skill.jsx';
import Contact from './components/Contact.jsx';
import Settings from './components/Settings.jsx';
import home from './assets/icons/home.svg';
import about from './assets/icons/person.svg';
import project from './assets/icons/project.svg';
import skills from './assets/icons/skills.svg';
import contact from './assets/icons/email.svg';
import settings from './assets/icons/settings.svg';
import github from './assets/icons/github.svg';
import facebook from './assets/icons/facebook.svg';
import linked from './assets/icons/linked.svg';
import tiktok from './assets/icons/tiktok.svg';
function Porfolio() {
  const [selectedId, setselectId] = useState(1);

  return (
    <div className="container-main">
      {/* Left Sidebar */}
      <div className="container-sidepanel">
        <div className="profile">
          <div className='profile-circle'><img src={profileImage} alt='ProfileImage' className='profile-image'/></div>
          <div className='profile-name'>
          <h2>Jobert Adrino</h2>
          <h4>Fullstack Developer</h4>
          </div>

        </div>
        <div className="side-option">
          <ul className="nav-list">
            <li 
              className={selectedId === 1 ? 'nav-item active' : 'nav-item'} 
              onClick={() => setselectId(1)}
            > <img src ={home} alt="home" className='nav-icon'/>
              Home
            </li>
            <li 
              className={selectedId === 2 ? 'nav-item active' : 'nav-item'} 
              onClick={() => setselectId(2)}
            ><img src ={about} alt="home" className='nav-icon'/>
              About Me
            </li>
            <li 
              className={selectedId === 3 ? 'nav-item active' : 'nav-item'} 
              onClick={() => setselectId(3)}
            ><img src ={project} alt="home" className='nav-icon'/>
              Project
            </li>
            <li 
              className={selectedId === 4 ? 'nav-item active' : 'nav-item'} 
              onClick={() => setselectId(4)}
            ><img src ={skills} alt="home" className='nav-icon'/>
              Skills
            </li>
            <li 
              className={selectedId === 5 ? 'nav-item active' : 'nav-item'} 
              onClick={() => setselectId(5)}
            ><img src ={contact} alt="home" className='nav-icon'/>
              Message
            </li>
            <li 
              className={selectedId === 6 ? 'nav-item active' : 'nav-item'} 
              onClick={() => setselectId(6)}
            ><img src ={settings} alt="home" className='nav-icon'/>
              Settings
            </li>
          </ul>
        </div>
        <div className='social-icon-container'>
          <img src ={github} alt="home" className='nav-icon'/>
          <img src ={facebook} alt="home" className='nav-icon'/>
          <img src ={linked} alt="home" className='nav-icon'/>
          <img src ={tiktok} alt="home" className='nav-icon'/>
        </div>
      </div>

      {/* Right Sub-Container (Header & Dynamic Main Content) */}
      <div className="container-sub">
        <div className="container-header">
          {selectedId ===1 &&(
            <h1>Home Overview</h1>
          )}
          {selectedId ===2 &&(
            <h1>About Me</h1>
          )}
          {selectedId ===3 &&(
            <h1>My Projects</h1>
          )}
          {selectedId ===4 &&(
            <h1>My Skills and Experience</h1>
          )}
          {selectedId ===5 &&(
            <h1>Get in Touch</h1> 
          )}
          {selectedId ===6 &&(
            <h1>Settings</h1>
          )}

        </div>
        
        {/* Dynamic Main Content based on selectedId */}
        <div className="container-main-content">
          {selectedId === 1 && (
            <Home />
          )}

          {selectedId === 2 && (
            <About/>
          )}

          {selectedId === 3 && (
           <Project/>
          )}

          {selectedId === 4 && (
            <Skill/>
          )}

          {selectedId === 5 && (
            <Contact/>
          )}

          {selectedId === 6 && (
        <Settings/>
          )}
        </div>
      </div>
    </div>
  );
}

export default Porfolio;