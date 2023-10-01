import React from 'react'
import {  Typography } from "@material-tailwind/react";


function Experience(props) {
    const {image, title, desc, link, text_2, text} = props;

  return (
    <div className="relative h-full w-full">
    <img
      alt="image 1"
      src={image}
      className="h-full w-full object-cover"
    />
    <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
      <div className="w-3/4 text-center md:w-2/4">
        <Typography
          variant="h1"
          color="white"
          className="mb-4 text-3xl md:text-4xl lg:text-5xl"
        >
          {title}
        </Typography>
        <Typography
          variant="lead"
          color="white"
          className="mb-12 opacity-80"
        >
          {desc}
        </Typography>
        <div className="flex justify-center gap-2">
        <Typography className="font-normal text-white hover:text-copper  } ">
            <a href={link} target="blank" className=' bg-white  transition-all duration-500 hover:scale-95 p-2 rounded-full bg-opacity-25'>{text} </a>
            {/* <h2 className=' bg-white  p-2 rounded-full opacity-70'>{text_2}</h2> */}
          </Typography>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Experience