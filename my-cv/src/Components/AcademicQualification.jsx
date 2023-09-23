import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
    Typography,
    
  } from "@material-tailwind/react";
  import {  AcademicCapIcon, CheckCircleIcon } from "@heroicons/react/24/solid";
  import Fade from 'react-reveal/Fade'
  import Pulse from 'react-reveal/Pulse'

  export function AcademicQualification() {
    return (
      <div className=" p-4 m-4 mb-4 flex max-w-[42rem]">
        <Timeline>
          <div className="flex-row flex text-white">
            <AcademicCapIcon className="h-8 pb-1 mr-2 w-8"/> 
            <h1 className="text-white text-start text-2xl pb-1  "> Bachelor of Science in Information Systems 
            <span className='bg-copper bg-opacity-50 font-bold text-sm mx-2 p-1 rounded-lg  '>CREDIT</span></h1>

          </div>
          <h3 className="text-sm font-bold pb-4 text-copper text-start"> UNIVERSITY OF MALAWI | 2018 - 2023. </h3>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader>
              <TimelineIcon className="bg-copper p-2">
              <CheckCircleIcon className="h-4 w-4" />
              </TimelineIcon>
              <Typography variant="h5" className="text-copper">
                FOURTH YEAR
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Fade bottom >
                <Typography color="gary" className="font-normal leading-10 text-left text-white">
                  Strategic Business and IS Management
                  <span className='bg-copper bg-opacity-30 mx-2 p-1 rounded-lg  '> ICT Project  </span>     
                  Information Technology Audit and Controls      
                  <span className='bg-copper bg-opacity-30 mx-2 p-1 rounded-lg  '>Mobile Applications Development</span>   
                      Information Technology Practice and Consultancy       
                  <span className='bg-copper bg-opacity-30 mx-2 p-1 rounded-lg  '>Project Management</span>       
                  Internet Governance
                  <span className='bg-copper bg-opacity-30 mx-2 p-1 rounded-lg  '>Geospatial Computing </span>      Cloud Computing 
                  <span className='bg-copper bg-opacity-30 mx-2 p-1 rounded-lg  '>Research Methods and Ethics in Computing</span>       
                  
                </Typography>
              </Fade>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader>
              <TimelineIcon className="bg-copper p-2">
              <CheckCircleIcon className="h-4 w-4" />
              </TimelineIcon>
              <Typography variant="h5" className=" text-copper">
                THIRD YEAR
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Fade bottom>
                <Typography color="gary" className="font-normal leading-10 text-left text-white">
                  Object-Oriented Systems Analysis and Design
                  <span className='bg-copper bg-opacity-30 mx-2 p-1 rounded-lg  '> Information Technology Service Management</span> Management Support Systems
                  <span className='bg-copper bg-opacity-30 mx-2 p-1 rounded-lg  '>Software
                  Engineering </span>  Entrepreneurship – Theory and Practice 
                  <span className='bg-copper bg-opacity-30 mx-2 p-1 rounded-lg  '>Human Computer Interaction</span>
                  Information Management for Business 
                  <span className='bg-copper bg-opacity-30 mx-2 p-1 rounded-lg  '>Computer Security</span> 
                  Computer Networks <span className='bg-copper bg-opacity-30 mx-2 p-1 rounded-lg  '>Linux
                  Systems Administration</span> 
                </Typography>
              </Fade>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
          <TimelineConnector color="" />
            <TimelineHeader>
              <TimelineIcon className="bg-copper p-2">
              <CheckCircleIcon className="h-4 w-4" />
              </TimelineIcon>
              <Typography variant="h5" className="text-copper">
                SECOND YEAR
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Fade bottom>
                <Typography color="gary" className="font-normal leading-10 text-left text-white">
                  Foundations of Information Systems 
                  <span className='bg-copper bg-opacity-30 mx-2 p-1 rounded-lg  '>Web Design and Development</span> 
                  E-Business Techniques
                  <span className='bg-copper bg-opacity-30 mx-2 p-1 rounded-lg  '>Enterprise Architecture </span>
                  Operating Systems 
                  <span className='bg-copper bg-opacity-30 mx-2 p-1 rounded-lg  '>Advanced Computer Programming </span>
                  Database Systems 
                  <span className='bg-copper bg-opacity-30 mx-2 p-1 rounded-lg  '>Foundation of Probability and Statistics </span>
                  Statistical Hypothesis Testing 
                  <span className='bg-copper bg-opacity-30 mx-2 p-1 rounded-lg  '>Introduction to Mathematical Computing</span>
                </Typography>
              </Fade>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineHeader>
              <TimelineIcon className="bg-copper p-2">
                <CheckCircleIcon className="h-4 w-4" />
              </TimelineIcon>
              <Typography variant="h5" className="text-copper">
                FIRST YEAR
              </Typography>
            </TimelineHeader>
            <TimelineBody>
              <Fade bottom >
                <Typography color="gary" className="font-normal leading-10 text-left text-white">
                  Introduction to Computer Science 
                  <span className='bg-copper bg-opacity-30 mx-2 p-1 rounded-lg  '>Introduction to Computer Programming </span>
                  College Algebra
                  <span className='bg-copper bg-opacity-30 mx-2 p-1 rounded-lg  '>Trigonometry and Elementary Calculus </span>
                  The Statistical System Language and Communication
                  <span className='bg-copper bg-opacity-30 mx-2 p-1 rounded-lg  '>Skills Contemporary Human Geography</span>
                </Typography>
              </Fade>
            </TimelineBody>
          </TimelineItem>
        </Timeline>
      </div>
    );
  }