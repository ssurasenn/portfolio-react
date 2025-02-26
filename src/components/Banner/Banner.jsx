import React from 'react'
import './Banner.css'
import Profile_img from '../../assets/profile_img.jpg'
import { motion } from "framer-motion"
import AnchorLink from 'react-anchor-link-smooth-scroll';

const container = (delay) => ({
  hidden: { x:-100, opacity: 0},
  visible: {
    x: 0,
    opacity:1,
    transition: { duration: 0.8, delay: delay, ease: "easeOut"}
  }
});

const Banner = () => {
  return (
    <div id = "home"className='banner'>
        <motion.img 
          src={Profile_img} 
          alt="Profile_img" 
          initial= {{ x: 100, opacity: 0}}
          animate={{ x: 0, opacity: 1}}
          transition={{ duration: 1, delay:1.1, ease: "easeIn"}}
        />
        <motion.h1
          variants={container(1)}
          initial="hidden"
          animate="visible"
          >
          <motion.span
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
          >I'm Surawut Surasen,</motion.span> frontend developer </motion.h1>
        <motion.p
        whileInView={{ opacity:1, x:0}}
        initial={{ opacity:0, x: -100}}
        transition={{ duration: 1}}
        >I am a frontend developer Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, similique?</motion.p>
        <motion.div 
        whileInView={{ opacity: 1, y:0}}
        initial={{ opacity:0 , y: -100}}
        transition={{ duration: 1.2}}        
        className="banner-action">
            <div className="banner-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect with me</AnchorLink></div>
            <div className="banner-resume">My resume</div>
        </motion.div>
    </div>
  )
}

export default Banner