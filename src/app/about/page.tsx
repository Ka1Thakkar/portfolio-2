/* eslint-disable react/no-unescaped-entities */
'use client'
import react from 'react';
import Image from 'next/image'
import {motion, AnimatePresence} from 'framer-motion'
import { once } from 'events';
import { Monoton } from '@next/font/google'

const advent = Monoton({
    subsets:['latin'],
    weight:"400"
})

const variants = {
  animate:{
    x:0,
    opacity:1,
    transition:{duration:1, delay:0.5}
  },
}

export default function About() {
    return (
      <AnimatePresence>
        <div className={advent.className}>
        <motion.section
        animate = {{opacity:1}}
        exit={{opacity:0}}
        transition={{duration:1}}
        id="about" className=" 2xl:pt-10 2xl:pb-32 bg-gradient-to-b from-black via-gray-900 to-sky-900/70 justify-center px-10 pt-10 min-h-screen">
            <motion.div
              className=' text-black overflow-auto 2xl:px-10 rounded-xl 2xl:py-10 2xl:w-auto'>
            <motion.h3
            initial={{opacity:0, x:40}}
            animate={{opacity:1, x:0}}
            transition={{duration:1}}
            className='text-5xl 2xl:text-5xl text-white underline decoration-red-600 decoration-4 underline-offset-8 pb-5 2xl:pb-0'>About Me</motion.h3>
            <motion.p
            initial={{opacity:0, x:40}}
            animate={{opacity:1, x:0}}
            transition={{delay:0.5,duration:1}}
            className=' text-2xl 2xl:text-4xl text-white font-mono font-bold 2xl:pt-5 2xl:pb-0 py-5'>Hi. I'm Kavan, nice to meet you. Please take a look around.</motion.p>
            </motion.div>
            <div className=' scrollbar-thin text-white py-5 xl:px-10 rounded-xl 2xl:py-auto'>
            <motion.p
            initial={{opacity:0, x:-40}}
            animate={{opacity:1, x:0}}
            transition={{delay:0.5,duration:1}}
            className='text-xl sm:text-4xl py-5 font-sans text-left'>
              I am pursuing a dual degree in <span>MSc Physics</span> and <span className='font-bold'>B.E. Electronics and
              Instrumentation</span>. I have strong knowledge of web development. As a part of the <span className='font-bold'>GDSC BITS Pilani {"chapter's"} core team</span>, I have gained invaluable expertise in leadership, teamwork, and cutting-edge technology. I am passionate about keeping up of the latest developments in my profession and utilising them to produce excellent results.
            </motion.p>
            <motion.p
            initial={{opacity:0, x:-40}}
            animate={{opacity:1, x:0}}
            transition={{delay:0.5,duration:1}}
            className='text-xl sm:text-4xl py-5 font-sans text-left'>
              When I am not out there creating beautiful websites, I love to dwell into fanstasy worlds through books, get my thoughts out in the form of poetry, and bang my head to some great Hip-Hop songs. I love making my close {"ones'"} day better by adding some humour into their life.
            </motion.p>
            </div>
        </motion.section>
        </div>
        </AnimatePresence>
    )
}