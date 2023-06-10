// 'use client'
// import react from 'react';
// import Image from 'next/image'
// import Link from 'next/link';
// import {animate, motion} from 'framer-motion'
// import { SiGithub, SiGmail, SiLinkedin, SiStackoverflow } from 'react-icons/si';

// const aboutVariants = {
//   animate:{
//     opacity:1,
//     x:0,
//     transition:{delay:0.6, duration:1}
//   },
//   hovering:{
//     opacity:1,
//     y:-5,
//     transition:{duration:0,delay:0}
//   }
// }

// const homeVariants = {
//   animate:{
//     opacity:1,
//     x:0,
//     transition:{delay:0.8, duration:1}
//   },
//   hovering:{
//     opacity:1,
//     y:-5,
//     transition:{duration:0,delay:0}
//   }
// }

// const skillsVariants = {
//   animate:{
//     opacity:1,
//     x:0,
//     transition:{delay:0.4, duration:1}
//   },
//   hovering:{
//     opacity:1,
//     y:-5,
//     transition:{duration:0,delay:0}
//   }
// }

// const projectsVariants = {
//   animate:{
//     opacity:1,
//     x:0,
//     transition:{delay:0.2, duration:1}
//   },
//   hovering:{
//     opacity:1,
//     y:-5,
//     transition:{duration:0,delay:0}
//   }
// }

// const contactVariants = {
//   animate:{
//     opacity:1,
//     x:0,
//     transition:{delay:0, duration:1}
//   },
//   hovering:{
//     opacity:1,
//     y:-5,
//     transition:{duration:0,delay:0}
//   }
// }

// export default function Footer() {
//     return (
//       <section>
//       <motion.div
//       className=' text-black 2xl:px-10 rounded-xl 2xl:py-10 2xl:w-auto overflow-hidden'>
//     <motion.h3
//     initial={{opacity:0, x:40}}
//     animate={{opacity:1, x:0}}
//     transition={{duration:1}}
//     className='text-5xl 2xl:text-5xl text-white underline decoration-red-600 decoration-4 underline-offset-8 pb-5 2xl:pb-0'>About Me</motion.h3>
//     <div className={poppins.className}>
//     <motion.p
//     initial={{opacity:0, x:40}}
//     animate={{opacity:1, x:0}}
//     transition={{delay:0.5,duration:1}}
//     className=' text-2xl 2xl:text-4xl text-white font-bold 2xl:pt-5 2xl:pb-0 py-5'>Hi. I'm Kavan, nice to meet you. Please take a look around.
//     </motion.p>
//     </div>
//     </motion.div>
//     <div className={poppins.className}>
//     <div className=' scrollbar-thin text-white py-5 xl:px-10 rounded-xl 2xl:py-auto'>
//     <motion.p
//     initial={{opacity:0, x:-40}}
//     animate={{opacity:1, x:0}}
//     transition={{delay:0.5,duration:1}}
//     className='text-xl sm:text-4xl py-5 text-left'>
//       I am pursuing a dual degree in <span>MSc Physics</span> and <span className='font-bold'>B.E. Electronics and
//       Instrumentation</span>. I have strong knowledge of web development. As a part of the <span className='font-bold'>GDSC BITS Pilani {"chapter's"} core team</span>, I have gained invaluable expertise in leadership, teamwork, and cutting-edge technology. I am passionate about keeping up of the latest developments in my profession and utilising them to produce excellent results.
//     </motion.p>
//     <motion.p
//     initial={{opacity:0, x:-40}}
//     animate={{opacity:1, x:0}}
//     transition={{delay:0.5,duration:1}}
//     className='text-xl sm:text-4xl py-5 text-left'>
//       When I am not out there creating beautiful websites, I love to dwell into fanstasy worlds through books, get my thoughts out in the form of poetry, and bang my head to some great Hip-Hop songs. I love making my close {"ones'"} day better by adding some humour into their life.
//     </motion.p>
//     </div>
//     </div>
//     </section>
//     )
// }