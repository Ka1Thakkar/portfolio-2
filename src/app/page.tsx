import Image from 'next/image'
import Home from '../../components/home'
import About from '../../components/about'
import Skills from '../../components/skills'
import Nav from '../../components/nav'
import Contact from '../../components/contact'
import Portfolio from '../../components/portfolio'

export default function app() {
  return (
    <html className=' scroll-smooth 2xl:overflow-hidden bg-black'>
      <body className='2xl:overflow-hidden 2xl:max-h-screen'>
        <main>
          <Nav />
          <div className=' px-5 2xl:px-80 sm:py-10 pb-36 min-h-screen 2xl:max-h-screen bg-gradient-to-b from-black to-blue-900 justify-center'>
            <Home />
            {/* <About /> */}
          </div>
          <div className='px-5 2xl:px-40 bg-gradient-to-b from-blue-900 to-blue-800 2xl:max-h-screen 2xl:overflow-hidden'>
            <About />
          </div>
          <div className=' px-5 2xl:px-40 bg-gradient-to-b from-blue-800 to-blue-900 2xl:max-h-screen 2xl:overflow-hidden'>
            <Skills />
          </div>
          <div className=' px-5 2xl:px-40 bg-gradient-to-b from-blue-900 to-indigo-950 2xl:max-h-screen 2xl:overflow-hidden'>
            <Portfolio />
          </div>
          <div className='2xl:max-h-screen 2xl:overflow-hidden'>
            <Contact />
          </div>
        </main>
      </body>
    </html>
  )
}
