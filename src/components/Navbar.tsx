import React from "react"

const Navbar:React.FC = () => {
  return (
    <div className="fixed top-0 left-0 h-16 sm:h-20 w-full bg-gray-800 flex justify-center items-center gap-25 text-lg font-medium text-white z-3">
        <ul>HOME</ul>
        <ul>SKILLS</ul>
        <ul>PROJECTS</ul>
        <ul>CERTIFICATES</ul>
        <ul>CONTACT</ul>
    </div>
  )
}

export default Navbar