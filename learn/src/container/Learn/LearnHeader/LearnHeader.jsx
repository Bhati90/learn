import React from 'react'
import {motion} from 'framer-motion'
import MotionWrap from '../../../wrapper/MotionWrap'
import { images } from '../../../constants'
import './LearnHeader.scss'

function LearnHeader ()  {
  return (
    <div className='app__learn app__flex'>
      <div className='app__learnhead'>
      <div className='app__learn-info'>
        <motion.div
        whileInView = {{opacity:[0,1]}}
        transition={{duration:0.5}}
        className='app__learn-info1'>
            
  <img src = {images.learnhead} alt ="learnheadlogo"/>
        </motion.div>

        <motion.div
       ><button className='app__learnb'> Start Learning</button>
        </motion.div>

        </div>

        <div className='app__learn-main'>
        <motion.div
        whileInView = {{opacity:[0,1]}}
        transition={{duration:0.5}}
        className='app__learn-img'>
            
  <img src = {images.learnheadlogo} alt ="headlogo"/>
        </motion.div>

        </div>

        </div>
    </div>
  )
}

export default MotionWrap (LearnHeader,'learn')
