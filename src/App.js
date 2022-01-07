import * as React from 'react';
import logo from './beatrizsantos.png';
import profilePic from './profilePic.jpg';
import profilePicCartoon from './profilePicCartoon.png'
import about from './about.png'
import face from './facebook.svg'
import linkedin from './linkedin.svg'
import insta from './instagram.svg'
import git from './github.svg'
import faceW from './facebookW.svg'
import linkedinW from './linkedinW.svg'
import instaW from './instagramW.svg'
import gitW from './githubW.svg'
import line from './line.svg'
import proj from './Projects.png'
import trio from './trio.png'
import lexie from './Lexie.png'
import sayhi from './sayhi.png'
import './App.css';
import Menu from "./Menu/menu.js";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { motion } from "framer-motion";


function App() {

  const handleDragStart = (e) => e.preventDefault();

  const imageClick = () => {
    window.open("https://trio-mbe.netlify.app/", "_blank");
  } 

  const items = [
    <img className="trio" src={trio} onDragStart={handleDragStart}  onClick={() => imageClick() } alt=""/>,
    <img className="lexie" src={lexie} onDragStart={handleDragStart} alt=""/>,
  ];

  const responsive = {
    0: { items: 1 },
    1024: { items: 2 },
  };

  return (
    <div className="App">
      
      <div className="MainPage">
        <motion.div className="socials_col"
          initial={{
            translateX: "-50vw",
          }}
          animate={{
            translateX: 0,
          }}
          transition={{
            type: "spring",
            duration: 1.5,
          }}>
          <img className="i1" style={{ cursor: "pointer" }} src={git} width="30px" alt=""
            onClick={() => window.open("https://github.com/beatrizfsantos", "_blank")}/>
          <img className="i4" style={{ cursor: "pointer" }} src={linkedin} width="30px" alt=""
            onClick={() => window.open("https://www.linkedin.com/in/beatriz-dos-santos-1b3007180/", "_blank")}/>
          <img className="i2" style={{ cursor: "pointer" }} src={face} width="30px"alt=""
            onClick={() => window.open("https://www.facebook.com/bia.f.dos.santos", "_blank")}/>
          <img className="i3" style={{ cursor: "pointer" }} src={insta} width="30px" alt=""
            onClick={() => window.open("https://www.instagram.com/beatriz.fsantos/", "_blank")}/>
          <img className="line" src={line} alt=""/>
        </motion.div>
        
        <div className='logo_col'>
          <div className='logo_row'>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          
          <Menu color={'black'}/>
          
        </div>
        
        <div className='empty_col'>
        </div>
           
           
      </div>

      <div id='about' className='AboutPage'>
        <div className='about'>
          <div className='aboutTitle'>
            <img src={about} className='aboutPhoto' alt=""/>
          </div>
          <div className='profile'>
            <img src={profilePicCartoon} className='profilePic' alt=""
              onMouseOver={e => e.currentTarget.src = profilePic}
              onMouseOut={e => e.currentTarget.src= profilePicCartoon} />
          </div>
          <div className='menuAbout'>
            <Menu color={'white'}/>
          </div>
          
        </div>
        
        <div className='bio'>
          <div className='textBio'>
              <div className='boxBio'>
                <h1 id="h1">HELLO</h1>
                <h2 id="h2">Welcome to my personal website!</h2>
                <h3 id="h3">Complete data</h3>
                <p id="p1">Beatriz Isabel Ferreira dos Santos</p>
                <p id="p2">22 years old</p>
                <p id="p3">Born in 10/11/1999</p>
                <h3 id="h4">Academic life</h3>
                <p>I have a degree in computer engineering from the University of Coimbra. Right now I'm finishing my last year of Masters in Software Engineering, also at the same university.</p>
                <p>One area that always picked my interest was Web Design.</p>
                <p>Other areas I'm interested in are Artificial Intelligence and BlockChain. </p>
                <h3 id="h5">Curiosities about me</h3>
                <p> I come from a small village called Coruche, and what I like most about this location is the peace and tranquility that exists there in contrast to the busy city life.</p>
                <p>I have a little dog named Lexie who is 6 months old.</p>
                <p>I love all styles of music, including classical music.</p>
            </div>
          </div>
          
        </div>
          

        </div>
      <div id="proj" className="ProjectsPage">
        <div className='projTitle'>
          <img src={proj} className='project' alt=""/> 
        </div>
        <div className='projects'>
          <AliceCarousel
              mouseTracking
              items={items}
              responsive={responsive}
              disableButtonsControls={true}
              /*controlsStrategy="alternate"*/
              disableDotsControls={true}
              controlsStrategy="responsive"
          />
        </div>

      </div>
      <div id="contact" className="ContactPage">
        <div className='sayhi'>
          <img src={sayhi} className='hi' alt=""/> 
        </div>

        <motion.div className="icons">
          <img className="i5" style={{ cursor: "pointer" }} src={gitW} width="60px" alt=""
            onClick={() => window.open("https://github.com/beatrizfsantos", "_blank")}/>
          <img className="i6" style={{ cursor: "pointer" }} src={linkedinW} width="60px" alt=""
            onClick={() => window.open("https://www.linkedin.com/in/beatriz-dos-santos-1b3007180/", "_blank")}/>
          <img className="i7" style={{ cursor: "pointer" }} src={faceW} width="60px" alt=""
            onClick={() => window.open("https://www.facebook.com/bia.f.dos.santos", "_blank")}/>
          <img className="i8" style={{ cursor: "pointer" }} src={instaW} width="60px" alt=""
            onClick={() => window.open("https://www.instagram.com/beatriz.fsantos/", "_blank")}/>
        </motion.div>

      </div>
        
    </div>
  );
}

export default App;
