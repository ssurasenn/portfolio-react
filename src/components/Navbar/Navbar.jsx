import React, { useState } from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
  const   [ menu, setMunu ] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () =>{
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <div className='navbar'>
      <h4>SSY</h4>
      <GiHamburgerMenu 
      className={`nav-bar-hamburger ${isMenuOpen ? 'hide' : ''}`}
      onClick={toggleMenu}/>

      <MdOutlineClose 
      className={`nav-bar-close ${isMenuOpen ? '' : 'hide'}`} 
      onClick={toggleMenu}/>

      <ul className={`nav-menu ${isMenuOpen ? 'show' : ''}`}>
        <li><AnchorLink className="anchor-link" offset={50} href="#home"><p onClick={() => setMunu("home")}>Home</p></AnchorLink>{menu === "home"}</li>
        <li><AnchorLink className="anchor-link" offset={50} href="#about"><p onClick={() => setMunu("about")}>About Me</p></AnchorLink>{menu === "about"}</li>
        <li><AnchorLink className="anchor-link" offset={50} href="#education"><p onClick={() => setMunu("education")}>Education</p></AnchorLink>{menu === "education"}</li>
        <li><AnchorLink className="anchor-link" offset={50} href="#project"><p onClick={() => setMunu("project")}>Portfolio</p></AnchorLink>{menu === "project"}</li>
        <li><AnchorLink className="anchor-link" offset={50} href="#contact"><p onClick={() => setMunu("contact")}>Contact</p></AnchorLink>{menu === "contact"}</li>
      </ul>
      <div className="nav-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect With Me</AnchorLink></div>
    </div>
  )
}

export default Navbar