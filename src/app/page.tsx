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
          <div className='2xl:flex 2xl:gap-10 px-5 2xl:px-40 py-10 pb-36 min-h-screen 2xl:max-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 justify-center'>
            <Home />
            <About />
          </div>
          <div className=' px-5 2xl:px-40 bg-gradient-to-b from-gray-800 via-gray-700 to-gray-600 2xl:max-h-screen 2xl:overflow-hidden'>
            <Skills />
          </div>
          <div className=' px-5 2xl:px-40 bg-gradient-to-b from-gray-600 via-gray-500 to-teal-500 2xl:max-h-screen 2xl:overflow-hidden'>
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
