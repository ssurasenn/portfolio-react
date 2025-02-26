import React from 'react'
import './Education.css'
import { EDUCATION } from '../../constants'
import { motion } from 'framer-motion'

const Education = () => {
  return (
    <div id="education"className='education'>
        <motion.h2 
        whileInView={{ opacity: 1, y:0}}
        initial={{ opacity:0 , y: -100}}
        transition={{ duration: 1}}
        className='education-title'>Education</motion.h2>
        <div>
            {
                EDUCATION.map((education,index) => (
                    <div key={index} className='education-wrapper'>
                        <motion.div 
                        whileInView={{ opacity:1, x:0}}
                        initial={{ opacity:0, x: -100}}
                        transition={{ duration: 1}}
                        className='educations-year'>
                            <p className='education-year'>{education.year}</p>
                        </motion.div>
                        <motion.div
                        whileInView={{ opacity:1, x:0}}
                        initial={{ opacity:0, x: 100}}
                        transition={{ duration: 1}} 
                        className='educations-info'>
                            <p className='education-detail'>
                                {education.role} |
                            </p>
                            <p>{education.academy}</p>
                            <p>{education.description}</p>
                            <p>GPA : {education.GPA}</p>
                        </motion.div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Education