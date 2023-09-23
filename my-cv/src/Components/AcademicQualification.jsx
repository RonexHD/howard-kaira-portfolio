import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
    Typography,
  } from "@material-tailwind/react";
  import { HomeIcon, BellIcon, CurrencyDollarIcon, ArrowLeftIcon, ArrowSmallRightIcon, ArrowRightCircleIcon } from "@heroicons/react/24/solid";
   
  export function AcademicQualification() {
    return (
      <div className=" p-4 m-4 mb-4 flex max-w-[42rem]">
        <Timeline>
          <h1 className="text-white text-start text-2xl pb-1 ">Bachelor of Science in Information Systems (CREDIT)</h1>
          <h3 className="text-sm font-bold pb-4 text-copper text-start"> UNIVERSITY OF MALAWI | 2018 - 2023. </h3>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader>
              <TimelineIcon className="p-2">
              <ArrowRightCircleIcon className="h-4 w-4" />
              </TimelineIcon>
              <Typography variant="h5" className="text-copper">
                FOURTH YEAR
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography color="gary" className="font-normal text-left text-white">
                ICT Project   |   Information Technology Audit and Controls   |   Mobile Applications Development   |
                    Information Technology Practice and Consultancy   |    Project Management   |    Internet Governance
                | Geospatial Computing    |   Cloud Computing Research Methods and Ethics in Computing    |   
                Strategic Business and IS Management
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader>
              <TimelineIcon className="p-2">
              <ArrowRightCircleIcon className="h-4 w-4" />
              </TimelineIcon>
              <Typography variant="h5" className=" text-copper">
                THIRD YEAR
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography color="gary" className="font-normal text-left text-white">
                Information Technology Service Management Management Support Systems Software
                Engineering Entrepreneurship – Theory and Practice Human Computer Interaction
                Information Management for Business Computer Security Computer Networks Linux
                Systems Administration Object-Oriented Systems Analysis and Design
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
          <TimelineConnector />
            <TimelineHeader>
              <TimelineIcon className="p-2">
              <ArrowRightCircleIcon className="h-4 w-4" />
              </TimelineIcon>
              <Typography variant="h5" className="text-copper">
                SECOND YEAR
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography color="gary" className="font-normal text-left text-white">
                Foundations of Information Systems Web Design and Development E-Business Techniques
                Enterprise Architecture Operating Systems Advanced Computer Programming Database
                Systems Foundation of Probability and Statistics Statistical Hypothesis Testing Introduction
                to Mathematical Computing
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineHeader>
              <TimelineIcon className="p-2">
                <ArrowRightCircleIcon className="h-4 w-4" />
              </TimelineIcon>
              <Typography variant="h5" className="text-copper">
                FIRST YEAR
              </Typography>
            </TimelineHeader>
            <TimelineBody>
              <Typography color="gary" className="font-normal text-left text-white">
                Introduction to Computer Science Introduction to Computer Programming College Algebra
                Trigonometry and Elementary Calculus The Statistical System Language and Communication
                Skills Contemporary Human Geography
              </Typography>
            </TimelineBody>
          </TimelineItem>
        </Timeline>
      </div>
    );
  }