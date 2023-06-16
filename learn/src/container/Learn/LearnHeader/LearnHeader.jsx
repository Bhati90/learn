import React from 'react'
import {motion} from 'framer-motion'
import MotionWrap from '../../../wrapper/MotionWrap'
import { images } from '../../../constants'
import './LearnHeader.scss'

const LearnHeader = () => {
  return (
    <div className='app__learnHeader app__flex'>
      <div className='app__learnheader-info'>
        <motion.div
        whileInView = {{opacity:[0,1]}}
        transition={{duration:0.5}}
        className='app__learnheader-info1'>
            
  <img src = {images.info1} alt ="learnheadlogo"/>
        </motion.div>

        <motion.div
       ><button className='app__learn'> Start Learning</button>
        </motion.div>

        </div>

        <div className='app__learnheader-main'>
        <motion.div
        whileInView = {{opacity:[0,1]}}
        transition={{duration:0.5}}
        className='app__learnheader-img'>
            
  <img src = {images.headl} alt ="headlogo"/>
        </motion.div>

        </div>
    </div>
  )
}

export default MotionWrap (LearnHeader,'learn')
