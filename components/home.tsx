/* eslint-disable react/no-unescaped-entities */
import react from 'react';
import Image from 'next/image'

export default function Home() {
    return (
        <section id="home" className='text-center bg-gray-500 bg-opacity-50 shadow-lg p-10 shadow-black rounded-xl'>
            <h2 className='text-6xl 2xl:text-6xl xl:text-6xl py-10 text-teal-600 font-extrabold md:text-6xl lg:text-6xl font-mono'>Kavan Thakkar</h2>
            <h3 className='text-3xl py-2 md:text-3xl xl:text-3xl font-bold font-serif text-white'>Developer and designer,</h3>
            <p className='text-lg py-5 text-gray-300 md:text-lg xl:text-xl max-w-xl mx-auto font-mono rounded-xl my-5'>Third year student at Birla Institute of Technology and Science, Pilani and a front-end development enthusiast. {"Let's"} connect!</p>
            <a href="https://drive.google.com/file/d/1-dvGcmOb8DlGOP65GmR-2jjrbf_TUSuX/view?usp=sharing" target="_blank" rel="noopener noreferrer" ><button className=" bg-gradient-to-b from-orange-600 to-orange-400 py-1 px-5 rounded-lg text-xl font-bold mt-3 font-mono hover:shadow-md hover:shadow-black hover:bg-gradient-to-t hover:from-orange-600 hover:to-orange-400 shadow-black shadow-md text-black">Resume</button></a>
        </section>
    )
}