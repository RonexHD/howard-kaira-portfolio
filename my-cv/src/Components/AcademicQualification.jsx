import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
    Typography,
    
  } from "@material-tailwind/react";
  import {  AcademicCapIcon, CheckBadgeIcon, CheckCircleIcon, ClipboardDocumentCheckIcon, DocumentIcon } from "@heroicons/react/24/solid";
  import Fade from 'react-reveal/Fade'
  import Pulse from 'react-reveal/Pulse'
  import badge from '../Assets/badge.png'

  export function AcademicQualification() {
    return (
      <div className=" p-2  mb-2 flex max-w-[42rem]">
        <Timeline>
          <div className="flex-row flex text-white">
            <AcademicCapIcon className="h-8 pb-1 mr-2 w-8"/> 
            <h1 className="text-white text-start text-2xl pb-1  "> Bachelor of Science in Information Systems 
            <span className='bg-copper bg-opacity-50 font-bold text-sm mx-2 p-1 rounded-lg  '>CREDIT</span></h1>

          </div>
          <h3 className="text-sm font-bold pb-4 ml-10 text-copper text-start"> UNIVERSITY OF MALAWI | 2018 - 2023. </h3>
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
                <Typography  className="font-normal leading-10 text-left text-white">
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
                <Typography className="font-normal leading-10 text-left text-white">
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
                <Typography className="font-normal leading-10 text-left text-white">
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
                <Typography  className="font-normal leading-10 text-left text-white">
                  Introduction to Computer Science 
                  <span className='bg-copper bg-opacity-30 mx-2 p-1 rounded-lg  '>Introduction to Computer Programming </span>
                  College Algebra
                  <span className='bg-copper bg-opacity-30 mx-2 p-1 rounded-lg  '>Trigonometry and Elementary Calculus </span>
                  The Statistical System 
                  <span className='bg-copper bg-opacity-30 mx-2 p-1 rounded-lg  '>Language and Communication Skills </span>
                  Contemporary Human Geography
                </Typography>
              </Fade>
            </TimelineBody>
          </TimelineItem>
          <Fade bottom>
            <div className="bg-arsenic-secondary p-2 mt-10 rounded-lg">
              <div className="flex-row  flex text-white">
                <DocumentIcon className="h-8 pb-1 mr-2 w-8"/> 
                <h1 className="text-white text-start text-2xl pb-1  ">Malawi School Certificate of Education  
                <span className='bg-copper bg-opacity-50 font-bold text-sm mx-2 p-1 rounded-lg  '>MSCE</span></h1>
              </div>
              <h3 className="text-sm font-bold pb-4 ml-10 text-copper text-start"> MARANATHA ACADEMY | 2017 
              <span className='bg-copper bg-opacity-50 font-bold  text-white text-xs mx-2 p-1 rounded-lg  '>12 POINTS AGGREGATE</span> </h3>
            </div>
          </Fade>
          <Fade bottom>
            <div className="bg-arsenic-secondary p-2 mt-10 rounded-lg">
              <div className="flex-row  flex text-white">
                <CheckBadgeIcon className="h-8 pb-1 mr-2 w-8"/> 
                <h1 className="text-white text-start text-2xl pb-1  ">Introduction to Cybersecurity  </h1>
              </div>
              <h3 className="text-sm  font-bold pb-4 ml-10 text-copper text-start"> Cisco Networking Academy </h3>
              <div className=" flex gap-2">
                <a 
                target="blank" 
                className="h-36 w-36 transition-all duration-500 hover:scale-95" 
                href="https://www.credly.com/badges/1fe31734-a7ed-4dd0-9e22-d0a523dee52c">
                  <img src={badge} alt="cisco-badge" className="" /> 
                </a>
                
                <p className="text-white leading-10 text-left">Cyber Best Practices 
              <span className='bg-copper bg-opacity-30 mx-2 p-1 rounded-lg  '>Cybersecurity Network Vulnerabilities </span>
                Privacy and Data Confidentiality 
                <span className='bg-copper bg-opacity-30 mx-2 p-1 rounded-lg  '>Threat Detection</span></p>
              </div>
              
            </div>
          </Fade>
          
          
        </Timeline>
        
      </div>
    );
  }