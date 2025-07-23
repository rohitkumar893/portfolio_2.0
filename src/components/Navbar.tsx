import React from "react"
import { useState } from 'react'
import { Menu, X } from 'lucide-react';

const Navbar:React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
  


  return (
    <div className="fixed top-0 left-0 h-16 sm:h-20 w-full bg-gray-700 flex justify-start items-center gap-25 text-lg font-medium text-white z-3">
      {/* Hamburger */}
        <div className='md:hidden ml-[24px] mt-[8px] z-[5] relative'>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={32} /> : <Menu size={38} />}
          </button>
        </div>
        
        {/* Desktop Menu */}
        <div className='hidden md:flex gap-[65px] justify-center items-center w-full text-[20px]'>
          <a href="#home" className="hover:text-sky-500 transition-colors duration-200"><h1>HOME</h1></a>
          <a href="#skills" className="hover:text-sky-500 transition-colors duration-200"><h1>SKILLS</h1></a>
          <a href="#projects" className="hover:text-sky-500 transition-colors duration-200"><h1>PROJECTS</h1></a>
          <a href="#certifications" className="hover:text-sky-500 transition-colors duration-200"><h1>CERTIFICATES</h1></a>
          <a href="#contact" className="hover:text-sky-500 transition-colors duration-200"><h1>CONTACT</h1></a>
        </div>

        {/* Mobile Menu */}
      {isOpen && (
          <div className='fixed top-0 left-0 w-full h-full bg-black flex flex-col gap-8 px-6 pt-[120px] text-[22px] text-white'>
            <a href="#home" onClick={() => setIsOpen(false)}><h1>HOME</h1></a>
            <a href="#skills" onClick={() => setIsOpen(false)}><h1>SKILLS</h1></a>
            <a href="#projects" onClick={() => setIsOpen(false)}><h1>PROJECTS</h1></a>
            <a href="#certifications" onClick={() => setIsOpen(false)}><h1>CERTIFICATES</h1></a>
            <a href="#contact" onClick={() => setIsOpen(false)}><h1>CONTACT</h1></a>
          </div>
        )}
    </div>
  )
}

export default Navbar