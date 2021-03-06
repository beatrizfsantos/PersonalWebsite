import React from "react";
import ScrollTo from "react-scroll-into-view";
import './menu.css';
import {motion} from 'framer-motion';
<link href='https://fonts.googleapis.com/css?family=Montserrat:500' rel='stylesheet'></link>


const Menu = ({color}) => (
  <motion.div className="botoes" style={{color:color}}
    initial={{
      translateX: "50vw",
    }}
    animate={{
      translateX: 0,
    }}
    transition={{
      type: "spring",
      duration: 1.5,
    }}>

    <div className="but1">
      <ScrollTo selector={`#about`}>
        <p> About.</p>
      </ScrollTo>
    </div>
    <div className="but2">
    <ScrollTo selector={`#proj`}>
      <p> Projects.</p>
    </ScrollTo>
    </div>
    <div className="but3">
      <ScrollTo selector={`#contact`}>
        <p>Contact.</p>
      </ScrollTo>
    </div>
    
  </motion.div>
);

export default Menu;