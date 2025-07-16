import React from "react"
import { useState } from 'react'
import { Menu, X } from 'lucide-react';

const Navbar:React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
  


  return (
    <div className="fixed top-0 left-0 h-16 sm:h-20 w-full bg-gray-700 flex justify-center items-center gap-25 text-lg font-medium text-white z-3">
      {/* Hamburger */}
        <div className='md:hidden'>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={36} />}
          </button>
        </div>
        
        <ul>HOME</ul>
        <ul>SKILLS</ul>
        <ul>PROJECTS</ul>
        <ul>CERTIFICATES</ul>
        <ul>CONTACT</ul>
    </div>
  )
}

export default Navbar