import React from 'react'
import './AboutMe.css'
import { motion } from 'framer-motion'
import profile_img from '../../assets/hero.png'

const AboutMe = () => {
  return (
    <div id="about"className='aboutme'>
      <motion.div 
      whileInView={{ opacity: 1, y:0}}
      initial={{ opacity:0 , y: -100}}
      transition={{ duration: 1}}
      className="about-title">
        <h1>About Me</h1>
      </motion.div>

      <div className="about-section">
        <motion.div 
        whileInView={{ opacity: 1, x:0}}
        initial={{ opacity:0 , x: -100}}
        transition={{ duration: 1}}
        className="about-left">
          <img src={profile_img} alt="" />
        </motion.div>

        <motion.div 
        whileInView={{ opacity: 1, x:0}}
        initial={{ opacity:0 , x: 100}}
        transition={{ duration: 1.2}}
        className="about-right">
          <div className="about-wrapper">
            <p>As an aspiring to front end developer, I possess a passion for understanding complex information with a logical mindset and empathetic curiosity, I like to deal with problems that arise in my work step by step and be enthusiastic to explore the unknown and embrace challenges. I always ready to learn and grow in the field of front end development.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS </p> <hr style={{width: "60%"}}/>
              <span>60%</span>
            </div>
            <div className="about-skill">
              <p>React Js</p> <hr style={{width: "70%"}} />
              <span>70%</span>

            </div>
            <div className="about-skill">
              <p>JavaScript</p> <hr style={{width: "60%"}}/>
              <span>60%</span>
            </div>
            <div className="about-skill">
              <p>Next Js</p> <hr style={{width: "50%"}}/>
              <span>50%</span>
            </div>
          </div>
        </motion.div>
        {/* <div className="about-achievements">
          <div className="about-achievement">
            <h1>1+</h1>
            <p>YEARS OF EXPERIECE</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>7</h1>
            <p>PROJECT EXPERIECE</p>          
          </div>

        </div> */}
      </div>
    </div>
  )
}

export default AboutMe