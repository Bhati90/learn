import React from 'react'
import MotionWrap from '../../../wrapper/MotionWrap'
import { motion } from 'framer-motion'
import './LearnSyllabus.scss'

const LearnSyllabus = () => {
  return (
    <div className='app__syllabus app__flex'>
      <motion.div
        whileInView = {{opacity:[0,1]}}
        transition={{duration:0.5}} >
       <div className='syllabus__main'>
        <p>Syllabus - What you will learn in the course</p>
        <div className='syllabus__in'>
        1. Introducing how computer work
        <br/>
        2. What makes a computer, a computer? <br/>
        3. Binary and Data <br/>
        4. Circuits and Logic  <br/>
        5. CPU, Memory, Input & Output <br/>


        <p className='more'>More</p>
        </div>
       </div>
       
      </motion.div>
    </div>
  )
}

export default MotionWrap(LearnSyllabus,'syllabus')
