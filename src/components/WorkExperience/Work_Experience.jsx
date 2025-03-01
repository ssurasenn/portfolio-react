import React from 'react'
import './Work_Experience.css'
import { WORK_EXPERIENCE } from '../../constants'
import { motion } from 'framer-motion'

const WorkExperience = () => {
  return (
    <div id="education"className='work-experience'>
        <motion.h2 
        whileInView={{ opacity: 1, y:0}}
        initial={{ opacity:0 , y: -100}}
        transition={{ duration: 1}}
        className='experience-title'>Work Experience</motion.h2>
        <div>
            {
                WORK_EXPERIENCE.map((experience,index) => (
                    <div key={index} className='experience-wrapper'>
                        <motion.div 
                        whileInView={{ opacity:1, x:0}}
                        initial={{ opacity:0, x: -100}}
                        transition={{ duration: 1}}
                        className='experience-year'>
                            <p className='experience-year'>{experience.year}</p>
                        </motion.div>
                        <motion.div
                        whileInView={{ opacity:1, x:0}}
                        initial={{ opacity:0, x: 100}}
                        transition={{ duration: 1}} 
                        className='experience-info'>
                            <p className='experience-detail'>
                                 {experience.role} |
                            </p>
                            <p> {experience.company}</p>
                            <p> {experience.description}</p>
                        </motion.div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default WorkExperience