import React from "react";
import {RiCodeSSlashLine} from 'react-icons/ri'
import {MdOutlinePerson} from 'react-icons/md'

const Tabs = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap lg:px-20 xl:px-40 2xl:px-80">
        <div className="w-full">
          <ul
            className="flex gap-2 mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-lg lg:text-3xl font-bold uppercase py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-sky-900"
                    : "text-white bg-black bg-opacity-20")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                <div className="flex justify-center items-center">
                  <RiCodeSSlashLine className=" font-bold" />
                  <i className=" text-base mr-1"></i> Coding
                </div>
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-lg lg:text-3xl font-bold uppercase py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-sky-900"
                    : "text-white bg-black bg-opacity-20")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                <div className="flex justify-center items-center">
                  <MdOutlinePerson />
                  <i className=" text-base mr-1 "></i>  Personal
                </div>
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-black text-white bg-opacity-20 w-full mb-6 shadow-lg rounded text-lg lg:text-2xl">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 2 ? "block" : "hidden"} id="link1">
                  <p>
                    When I am not out there creating beautiful websites, I like to dwell in fantasy worlds through the power of books, get my thoughts out in the form of poetry and bang my head to some great Hip-Hop songs.
                    <br />
                    <br />
                    I love to make my close {"ones'"} day better, by adding some humour into their life and believe me when I say that I am great storyteller.
                  </p>
                </div>
                <div className={openTab === 1 ? "block" : "hidden"} id="link2">
                  <p>
                  I am pursuing a dual degree in <span>MSc Physics</span> and <span className='font-bold'>B.E. Electronics and Instrumentation</span>. I have strong knowledge of web development.
                  <br />
                  <br />
                  As a part of the <span className='font-bold'>GDSC BITS Pilani {"chapter's"} core team</span> and being the <span className='font-bold'>front-end development team lead</span>, I have gained invaluable expertise in leadership, teamwork, and cutting-edge technology. I am passionate about keeping up of the latest developments in my profession and utilising them to produce excellent results.
                  <br />
                  <br />
                  I started my journey as a Web developer because I believe that Web development is basically making art using code, a perfect mixture of the two things I love.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;