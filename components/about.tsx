import react from 'react';
import Image from 'next/image'

export default function About() {
    return (
        <section id="about" className='text-white overflow-auto 2xl:overflow-y-scroll 2xl:bg-gray-600 2xl:bg-opacity-50 2xl:shadow-lg py-10 2xl:px-10 2xl:shadow-black rounded-xl scrollbar-thin'>
            <div>
              <h3 className='text-4xl md:text-6xl text-teal-500 font-mono font-bold text-center'>About Me</h3>
              <p className='text-xl py-5 font-sans text-center'>
              My name is Kavan Thakkar. I am pursuing a dual degree in <span>MSc Physics</span> and <span className='font-bold'>B.E. Electronics and
              Instrumentation</span>. I have fundamental knowledge of web development and am currently mastering
              React.js. As a part of the <span className='font-bold'>GDSC BITS Pilani chapter's core team</span>, I have gained invaluable expertise in leadership, teamwork, and cutting-edge technology. I am passionate about keeping up of the latest developments in my profession and utilising them to produce excellent results.
              </p>
            </div>
            <div className="lg:flex gap-10 font-mono">
              <div className="shadow-md bg-opacity-70 bg-white p-10 rounded-xl my-10 basis-1/2 shadow-orange-400 hover:shadow-orange-400 hover:shadow-lg hover:bg-opacity-80">
                <h1 className="text-3xl text-center md:text-left text-orange-600 font-extrabold">Education:</h1>
                <ul className="list-disc text-black">
                  <li className="py-2">
                    <div className="">
                      <h2 className="text-black text-xl py-1 font-bold">Delhi Public School, Bopal, Ahmedabad</h2>
                      <h2 className="text-black text-xl">(2007-2019)</h2>
                    </div>
                    <p className="text-lg text-gray-800">10th grade: 95.7%</p>
                  </li>
                  <li className="py-2">
                    <div className="">
                      <h2 className="text-black text-xl py-1 font-bold">Rahul International School, Nallasopara, Palghar</h2>
                      <h2 className="text-black text-xl">(2019-2021)</h2>
                    </div>
                    <p className="text-lg text-gray-800">12th grade: 93.2%</p>
                  </li>
                  <li className="py-2">
                    <div className="">
                      <h2 className="text-black text-xl py-1 font-bold">Birla Institute of Technology and Sciences, Pilani, Rajasthan</h2>
                      <h2 className="text-black text-xl">(2021-pesent)</h2>
                    </div>
                    <p className="text-lg text-gray-800">Cumulative Grade: 7.05</p>
                  </li>
                </ul>
              </div>
              <div className="shadow-md bg-opacity-70 bg-white p-10 rounded-xl my-10 basis-1/2 shadow-orange-400 hover:shadow-orange-400 hover:shadow-lg hover:bg-opacity-80">
                <h1 className="text-3xl text-center md:text-left text-orange-600 font-extrabold">Experience:</h1>
                <ul className=" list-disc text-black">
                  <li className="py-2">
                    <div className="">
                      <h2 className="text-black text-xl py-1 font-extrabold">Google Developer Student Clubs, BITS Pilani</h2>
                      <h2 className="text-black text-xl">(2021-present)</h2>
                    </div>
                    <h2 className="text-gray-800 text-xl py-1 font-bold">Positions:</h2>
                    <p className="text-lg text-gray-800 py-0.5">Core Team Member (Dec 2022 - present)</p>
                    <p className="text-lg text-gray-800 py-0.5">Front-end development team lead (Feb 2023 - present)</p>
                    <h2 className="text-gray-800 text-lg py-1 font-bold">Skills Gathered:</h2>
                    <p className="text-gray-700 py-1">React.js, Vue.js, Vuetify, WAMP, HTML, HTML5, Cascading Style Sheets (CSS), JavaScript, Python (Programming Language), MySQL, Version Control</p>
                  </li>
                  <li className="py-2">
                    <div className="">
                      <h2 className="text-black text-xl py-1 font-extrabold">Bhaskaracharya Institute for Space Applications and Geoinformatics (BISAG-N), Gandhinagar</h2>
                      <h2 className="text-black text-xl">(June 2023-August 2023)</h2>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
    )
}