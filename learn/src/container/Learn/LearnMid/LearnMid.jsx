import React from 'react'
import MotionWrap from '../../../wrapper/MotionWrap'
import { motion } from 'framer-motion'
import './LearnMid.scss'
import { images } from '../../../constants'

function LearnMid ()  {
  return (
    <div className='app__learnmid app__flex'>
       <div className='app__learnmid1'>
        <motion.div
         whileInView = {{opacity:[0,1]}}
         transition={{duration:0.5}}
         className= "app__learnmid2">
          <div className='app__learnmid21'>
         <p className='midhead'>About This Course</p>
         </div>
         <div className='app__learnmid22'>
          <div className='learnmid22p'>
         <p>In this course you will learn how computers work - everything from what makes something a computer in the first place, how computers use electrical circuits to store and process information, and the ways hardware and software work together.</p></div>
         </div>
         </motion.div>
         

        <motion.div
         whileInView = {{opacity:[0,1]}}
         transition={{duration:0.5}}
         className = 'midspeaker'>
          <p className='midhead'>Instructor</p>
          <div className='aboutspeaker'>
           <div> <img src={images.bill}/>
            </div>
            <div className='speaker'>
            <p>Bill Gates & other</p>
            </div>
          </div>

         </motion.div>
        <motion.div
         whileInView = {{opacity:[0,1]}}
         transition={{duration:0.5}}
         className= 'midinstitute'>
         <div className='midi1'>
         <div><img src = {images.learnmidlogo}/></div> 
         <div className='speaker'> <p>Code org is a us based educational organization</p></div> 
         </div>
         </motion.div>
       </div>
    </div>
  )
}

export default MotionWrap (LearnMid,'learnmid')
