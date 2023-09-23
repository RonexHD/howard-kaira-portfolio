import React from 'react'
import Typical from 'react-typical'

function Typing() {
  return (
    <div className='ml-4'>
        <h1 className='text-lg  text-copper text-left '>
            <Typical 
            loop={Infinity}
            steps={[
                "UI/UX Designer ✨",
                3000,
                "Graphic Designer 🎨",
                3000,
                "Web Developer 👍",
                2000,
                "IT Service Management 💻",
                2000,
                "IT Operational Support 🖥️",
                2000,
                "Database Administrator 🔵",
                2000,
                "Software Developer 🟠",
                2000,
                "BSC Information Systems 🎓",
                3000,
                "Git ⏺️",
                1000,
                "Linux Sytems Admin ⭕",
                1000,
                "Sanity.io 🟢",
                1000,
                "MySQL 🟣",
                1000
            ]}
            />
            </h1>
    </div>
  )
}

export default Typing