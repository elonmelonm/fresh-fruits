/* eslint-disable no-unused-vars */
import React from 'react'
import BannerPng from '../../assets/banner-bg.jpg'
import { motion } from "framer-motion"
import { FadeLeft } from "../../components/utility/animation"

const bgStyle = {
    backgroundImage: `url(${BannerPng})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    
}

const Banner3 = () => {
  return (
    <section className='container mb-12'>
      <div 
      style={bgStyle} className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 rounded-3xl">
        {/* Blank div */}
        <div></div>


        {/* Brand Info */}
        <div className='felx flex-col justify-center'>
            <div className='text-center md:text-left space-y-4 lg:max-w-[400px]'>
                <motion.h1
                variants={FadeLeft(0.5)}
                initial="hidden"
                animate="visible"
                viewport={{ once: true }}
                className='text-3xl lg:text-6xl font-bold uppercase'>
                  {" "}
                  Get fresh fruits today
                </motion.h1>
                <motion.p
                variants={FadeLeft(0.7)}
                initial="hidden"
                animate="visible"
                viewport={{ once: true }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit excepturi sint reiciendis nihil iusto, dolor odio harum quas nisi aliquam assumenda in numquam repellat sit accusantium distinctio necessitatibus! Pariatur, inventore.
                </motion.p>
                
                {/* Button section */}
                <motion.div 
                variants={FadeLeft(0.9)}
                initial="hidden"
                animate="visible"
                viewport={{ once: true }}
                className="flex justify-center md:justify-start">
                  <button className="primary-btn"><span></span>Order Now</button>
                </motion.div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Banner3
