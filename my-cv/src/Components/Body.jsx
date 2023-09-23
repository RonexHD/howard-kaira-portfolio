import React from 'react';
import facebook from '../Assets/facebook.svg';
import instagram from '../Assets/instagram.svg';
import linkedin from '../Assets/linkedin.svg';
import Typing from '../Components/Typical';
import image from '../Assets/image.png'
import Fade from 'react-reveal/Fade'
import Pulse from 'react-reveal/Pulse'
import graphic from '../Assets/graphic.svg'
import ui from '../Assets/ui2.svg'
import code from '../Assets/code.svg'
import cv from '../Assets/file-cv.svg'
import SkillCard from './SkillCard';
import it from '../Assets/it.svg'

function Body() {
  return (
    <div className=' bg-arsenic-secondary  min-w-screen-sm'>
      <div className="bg-arsenic-primary min-w-screen-sm md:flex-col  lg:w-full w-full">
        <div className=" mr-auto  lg:text-right   ">
            <div className=' text-white p-2 justify-end mr-6 flex gap-2'>
              <p>Contact me</p>
              <a target='_blank' href='https://www.facebook.com/hd.ronex'><img src={facebook} alt="facebook link" className="h-6 w-6 p-1 fill-white text" /> </a>
              <a target='_blank' href='https://instagram.com/hdronex?igshid=OGY3MTU3OGY1Mw=='><img src={instagram} alt="facebook link" className="h-6 w-6 p-1 fill-white text" /> </a>
              <a target='_blank' href='https://www.linkedin.com/in/howard-kaira-364b70233'><img src={linkedin} alt="facebook link" className="h-6 w-6 p-1 fill-white text" /> </a>
            </div>
        </div>
        <div className="flex  ">
          <div className='sm:mx-3 w-full'>
            <div className=' flex w-full lg:flex-row  gap-6 lg:flex flex-col justify-between '>
              <div className='min-w-[16rem]'>
                <h1 className="text-5xl text-left border-t-2 border-copper pt-3 font-bold text-white m-4">Howard <br /> Kaira<span className='text-copper'>.</span></h1>
                  <Typing />
                  <Fade left>
                    <a href='Howard Kaira CV.pdf'  download='Howard Kaira CV'>
                      <button className=" justify-center flex ml-4 transition-all duration-500 hover:scale-95 w-40  mt-4 hover:bg-copper py-2  text-white  rounded-xl border">
                        <img src={cv} alt="cv" className='h-6  mr-2' />
                        Get Resume
                      </button>
                    </a>
                  </Fade>
                  
              </div>
              <div className='min-w-screen-sm lg:w-auto flex lg:flex-none justify-center'>  
                  <Fade top> <img src={image} alt='my image' className='h-[25rem] w-[25rem] aspect-ratio-1/1 border-b-4 lg:mt-0    rounded-lg bg-arsenic-secondary border-copper '/> </Fade>
              </div>
                <div className='min-w-screen-sm lg:w-[40rem] mr-12 lg:mt-0  px-3 justify-end'>
                  <Pulse><p className='text-left mt-4 text-white'>MY PROFILE </p> </Pulse>
                    <br />
              
                  <h1 className='text-4xl text-left text-copper'>  
                    Information Systems Specialist | UI/UX design | Software
                    development | IT operational support | Project management
                    <span className='text-white  m-2 text-sm'> +MORE  </span> 
                  </h1>
                  <br /> 
                  <Fade top >
                    <p className='text-left mb-4 text-white' >
                      Skilled in creating intuitive
                      and visually appealing user interfaces for both mobile and web applications. 
                      Proficient in frontend development 
                      ensuring seamless integration of designs into functional applications.
                      Well-versed in IT service management and operational support for smooth
                      functioning of systems. Experienced in database management using MySQL, encompassing
                      system design, implementation, and administration, including backup and recovery, user
                      management, and data integrity. 
                    </p>
                  </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className='w-full   gap-2 lg:flex  justify-center flex-wrap border-t border-t-copper flex'>
          <Fade left><SkillCard icon={ui} title='UI/UX Designer' desc='Intuitive and Usable interfaces for mobile & web applications' /></Fade>
          <Fade bottom><SkillCard icon={graphic} title='Graphic Designer' desc='Using Photoshop, Illustrator, and Afinity Publisher' /></Fade>
          <Fade left > <SkillCard icon={code} title='Web Developer' desc='User friendly and responsive sites' /></Fade>

         <Fade bottom><SkillCard icon={it} title='Project Management' desc='Planning, executing, and overseeing IT projects in time and budget' /></Fade>
          <Fade bottom><SkillCard icon={it} title='Project Management' desc='Planning, executing, and overseeing IT projects in time and budget' /></Fade>
          <Fade bottom><SkillCard icon={it} title='Project Management' desc='Planning, executing, and overseeing IT projects in time and budget' /></Fade>

          <Fade bottom><SkillCard icon={it} title='Project Management' desc='Planning, executing, and overseeing IT projects in time and budget' /></Fade>
        </div>
    </div>
  );
}

export default Body;
