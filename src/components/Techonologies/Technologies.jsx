import React from 'react'
import './Technologies.css'
import {RiReactjsLine,  } from 'react-icons/ri'
import {TbBrandNextjs} from 'react-icons/tb'
import { SiMongodb } from 'react-icons/si'
import { FaNodeJs } from 'react-icons/fa'
import { BiLogoPostgresql } from 'react-icons/bi'
import { motion } from 'framer-motion'

const iconVariants = (duration) => ({
    initial: { y: -10},
    animate: {
        y: [10,-10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})


const Technologies = () => {
  return (
    <div className='technologies'>
        <motion.h1 
        whileInView={{ opacity: 1, y:0}}
        initial={{ opacity:0 , y: -100}}
        transition={{ duration: 1}}
        className='technologies-title'>Technologies</motion.h1>
        <div className='technologies-list'>
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className='technologies-wrapper'>
                <RiReactjsLine className='icon1'/>
            </motion.div>

            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className='technologies-wrapper'>
                <TbBrandNextjs className='icon2'/>
            </motion.div>

            <motion.div 
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className='technologies-wrapper'>
                <SiMongodb className='icon3'/>
            </motion.div>

            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className='technologies-wrapper'>
                <BiLogoPostgresql className='icon4'/>
            </motion.div>
            
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className='technologies-wrapper'>
                <FaNodeJs className='icon5'/>
            </motion.div>
        </div>
    </div>
  )
}

export default Technologies