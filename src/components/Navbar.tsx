import React from "react"
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react';
import './Navbar.css'

const Navbar:React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
      // Prevent body scroll when mobile menu is open
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }
      return () => {
        document.body.style.overflow = 'unset';
      };
    }, [isOpen]);

  return (
    <section className="navbar fixed select-none top-0 left-0 h-16 sm:h-20 w-full flex justify-between px-4 sm:px-6 md:px-8 lg:px-12 items-center text-lg font-normal text-slate-900 z-50 transition-all duration-300">
      <a href="#home" className="name flex justify-center items-center gap-2 sm:gap-2.5 group">
        <h1 className="rohittext text-2xl sm:text-3xl md:text-4xl text-slate-950 font-semibold tracking-[-0.03em] transition-all duration-300 group-hover:text-slate-700">Rohit.</h1>
      </a>
      
      {/* Hamburger Button */}
      <button 
        className='lg:hidden z-[60] relative p-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition-colors duration-200'
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <X size={24} className="text-slate-900 transition-transform duration-300 rotate-90" />
        ) : (
          <Menu size={24} className="text-slate-900 transition-transform duration-300" />
        )}
      </button>
        
      {/* Desktop Menu */}
      <nav className='hidden lg:flex gap-1 xl:gap-2 bg-white justify-center items-center px-3 lg:px-4 h-12 rounded-full text-sm lg:text-[15px] border border-slate-200 shadow-[0_10px_40px_rgba(15,23,42,0.06)] nav-menu-container'>
        <a href="#home" className="nav-link px-3 lg:px-4 py-2 rounded-full hover:bg-slate-100 transition-all duration-300 font-medium text-slate-700">HOME</a>
        <a href="#projects" className="nav-link px-3 lg:px-4 py-2 rounded-full hover:bg-slate-100 transition-all duration-300 font-medium text-slate-700">PROJECTS</a>
        <a href="#skills" className="nav-link px-3 lg:px-4 py-2 rounded-full hover:bg-slate-100 transition-all duration-300 font-medium text-slate-700">SKILLS</a>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`mobile-menu-overlay fixed top-0 left-0 w-full h-screen overflow-y-auto bg-white/98 backdrop-blur-xl z-[55] transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsOpen(false)}
      >
        <nav className='flex flex-col gap-4 sm:gap-6 px-5 sm:px-8 pt-20 sm:pt-32 text-lg sm:text-2xl text-slate-900 min-h-full'>
          <a 
            href="#home" 
            onClick={() => setIsOpen(false)}
            className="mobile-nav-link py-3 sm:py-4 border-b border-slate-200 transition-all duration-300 hover:border-slate-400"
          >
            HOME
          </a>
          <a 
            href="#projects" 
            onClick={() => setIsOpen(false)}
            className="mobile-nav-link py-3 sm:py-4 border-b border-slate-200 transition-all duration-300 hover:border-slate-400"
          >
            PROJECTS
          </a>
          <a 
            href="#skills" 
            onClick={() => setIsOpen(false)}
            className="mobile-nav-link py-3 sm:py-4 border-b border-slate-200 transition-all duration-300 hover:border-slate-400"
          >
            SKILLS
          </a>
        </nav>
      </div>
    </section>
  )
}

export default Navbar
