import React from 'react'
import './MyProject.css'
import { myproject_data } from '../../constants'
import { motion } from 'framer-motion'
const MyProject = () => {
  return (
    <div id="project"className='myproject'>
        <motion.div 
        whileInView={{ opacity: 1, y:0}}
        initial={{ opacity:0 , y: -100}}
        transition={{ duration: 1.2}}
        className="myproject-title">
            <h1>MyProject</h1>
        </motion.div>
        <div className="myproject-container">
           {
            myproject_data.map((project,index)=> (
                <div  className='myproject-wrapper'>
                    <motion.div 
                    whileInView={{ opacity: 1, y:0}}
                    initial={{ opacity:0 , y: 100}}
                    transition={{ duration: 1}}
                    className='img-project'>
                    <img                     
                    key={index} 
                    src={project.image} 
                    alt="" />
                    </motion.div>
                    
                    <div className='projects-detail'>
                        <h2 className='project-title'>{project.title}</h2>
                        <p className='project-desc'>{project.description}</p>
                        {
                            project.technologies.map((tech,index) => (
                        <span key={index} className='project-tech'>{tech}</span>

                            ))
                        }
                    </div>                        
                </div>
            ))
           }
        </div>
    </div>
  )
}

export default MyProject