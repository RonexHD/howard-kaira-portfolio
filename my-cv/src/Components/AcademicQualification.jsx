import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
    Typography,
  } from "@material-tailwind/react";
  import { HomeIcon, BellIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
   
  export function AcademicQualification() {
    return (
      <div className=" p-4 m-4 mb-4 flex max-w-[42rem]">
        <Timeline>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader>
              <TimelineIcon className="p-2">
                <HomeIcon className="h-4 w-4" />
              </TimelineIcon>
              <Typography variant="h5" className="text-copper">
                Timeline Title Here.
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography color="gary" className="font-normal text-left text-white">
                The key to more success is to have a lot of pillows. Put it this way, it took me
                twenty five years to get these plants, twenty five years of blood sweat and tears, and
                I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan
                luv.
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader>
              <TimelineIcon className="p-2">
                <BellIcon className="h-4 w-4" />
              </TimelineIcon>
              <Typography variant="h5" className=" text-copper">
                Timeline Title Here.
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography color="gary" className="font-normal text-left text-white">
                The key to more success is to have a lot of pillows. Put it this way, it took me
                twenty five years to get these plants, twenty five years of blood sweat and tears, and
                I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan
                luv.
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineHeader>
              <TimelineIcon className="p-2">
                <CurrencyDollarIcon className="h-4 w-4" />
              </TimelineIcon>
              <Typography variant="h5" className="text-copper">
                Timeline Title Here.
              </Typography>
            </TimelineHeader>
            <TimelineBody>
              <Typography color="gary" className="font-normal text-left text-white">
                The key to more success is to have a lot of pillows. Put it this way, it took me
                twenty five years to get these plants, twenty five years of blood sweat and tears, and
                I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan
                luv.
              </Typography>
            </TimelineBody>
          </TimelineItem>
        </Timeline>
      </div>
    );
  }