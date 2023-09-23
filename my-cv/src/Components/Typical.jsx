import React from 'react'
import Typical from 'react-typical'

function Typing() {
  return (
    <div>
        <h1 className='text-lg text-copper text-left ml-3 font-bold'>
            <Typical 
            loop={Infinity}
            steps={[
                "UI/UX Designer ✨",
                2000,
                "Graphic Designer 🎨",
                2000,
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
                "Git ⏺️",
                2000,
                "Linux Sytems ⭕",
                2000,
                "Sanity.io 🟢",
                2000,
                "MySQL 🟣",
                2000
            ]}
            />
            </h1>
    </div>
  )
}

export default Typing