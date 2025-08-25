import React from "react"
import { useState } from 'react'
import { Menu, X } from 'lucide-react';
import './Navbar.css'

const Navbar:React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
  


  return (
    <div className="navbar fixed select-none top-0 left-0 h-16 bg-gray-900/75 backdrop-blur-md sm:h-22 w-full flex justify-between px-[20px] md:px-[25px] md:justify-around items-center text-lg font-medium text-white z-3">
      <div className="name flex justify-center items-center gap-[8px] md:gap-[10px]">
        <img src='profile.png' className="md:h-[28px] md:w-[28px] h-[24px] w-[24px]"></img>
        <h1 className="rohittext text-[31px] text-gray-200 md:text-[38px] font-semibold md:ml-0">Rohit.</h1>
      </div>
      {/* Hamburger */}
        <div className='md:hidden mt-[8px] z-[5] relative'>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={32} /> : <Menu size={35} />}
          </button>
        </div>
        
        {/* Desktop Menu */}
        
        <div className='hidden md:flex gap-[34px] bg-gray-700 justify-center items-center w-[635px] h-[46px] rounded-3xl text-[20px]'>
          <a href="#home" className="hover:text-sky-500 transition-colors duration-200"><h1>HOME</h1></a>
          <a href="#projects" className="hover:text-sky-500 transition-colors duration-200"><h1>PROJECTS</h1></a>
          <a href="#skills" className="hover:text-sky-500 transition-colors duration-200"><h1>SKILLS</h1></a>
          <a href="#certifications" className="hover:text-sky-500 transition-colors duration-200"><h1>CERTIFICATES</h1></a>
          <a href="#contact" className="hover:text-sky-500 transition-colors duration-200"><h1>CONTACT</h1></a>
        </div>

        {/* Mobile Menu */}
      {isOpen && (
          <div className='fixed top-0 left-0 w-full h-screen bg-black flex flex-col gap-8 px-6 pt-[120px] text-[22px] text-white'>
            <a href="#home" onClick={() => setIsOpen(false)}><h1>HOME</h1></a>
            <a href="#projects" onClick={() => setIsOpen(false)}><h1>PROJECTS</h1></a>
            <a href="#skills" onClick={() => setIsOpen(false)}><h1>SKILLS</h1></a>
            <a href="#certifications" onClick={() => setIsOpen(false)}><h1>CERTIFICATES</h1></a>
            <a href="#contact" onClick={() => setIsOpen(false)}><h1>CONTACT</h1></a>
          </div>
        )}
    </div>
  )
}

export default Navbar