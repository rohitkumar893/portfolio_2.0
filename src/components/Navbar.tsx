import React from "react"
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react';
import './Navbar.css'

const Navbar:React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 20);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
    <section className={`navbar border-b-3 border-b-gray-200 fixed select-none top-0 left-0 h-16 sm:h-20 w-full flex justify-between px-4 sm:px-6 md:px-8 lg:px-12 items-center text-lg font-normal text-white z-50 transition-all duration-300`}>
      <a href="#home" className="name flex justify-center items-center gap-2 sm:gap-2.5 group">
        <img src='profile.png' className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 transition-transform duration-300 group-hover:scale-110" alt="Profile"></img>
        <h1 className="rohittext text-2xl sm:text-3xl md:text-4xl text-gray-100 font-bold bg-gradient-to-r from-[#A4E733] to-[#33e4e7] bg-clip-text text-transparent transition-all duration-300 group-hover:scale-105">Rohit.</h1>
      </a>
      
      {/* Hamburger Button */}
      <button 
        className='md:hidden z-[60] relative p-2 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#A4E733] focus:ring-offset-2 focus:ring-offset-[#141010]'
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <X size={28} className="text-white transition-transform duration-300 rotate-90" />
        ) : (
          <Menu size={28} className="text-white transition-transform duration-300" />
        )}
      </button>
        
      {/* Desktop Menu */}
      <nav className='hidden md:flex gap-2 lg:gap-3 xl:gap-2 bg-gray-900/90 backdrop-blur-xl justify-center items-center px-4 lg:px-6 h-12 lg:h-14 rounded-full text-base lg:text-lg xl:text-xl border border-gray-800/50 shadow-lg hover:border-gray-700/50 transition-all duration-300 nav-menu-container'>
        <a href="#home" className="nav-link px-3 lg:px-4 py-2 rounded-full hover:bg-gray-800/50 transition-all duration-300 hover:text-[#A4E733] font-medium">HOME</a>
        <a href="#projects" className="nav-link px-3 lg:px-4 py-2 rounded-full hover:bg-gray-800/50 transition-all duration-300 hover:text-[#A4E733] font-medium">PROJECTS</a>
        <a href="#skills" className="nav-link px-3 lg:px-4 py-2 rounded-full hover:bg-gray-800/50 transition-all duration-300 hover:text-[#A4E733] font-medium">SKILLS</a>
        <a href="#certifications" className="nav-link px-3 lg:px-4 py-2 rounded-full hover:bg-gray-800/50 transition-all duration-300 hover:text-[#A4E733] font-medium">CERTIFICATES</a>
        <a href="#contact" className="nav-link px-3 lg:px-4 py-2 rounded-full hover:bg-gray-800/50 transition-all duration-300 hover:text-[#A4E733] font-medium">CONTACT</a>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`mobile-menu-overlay fixed top-0 left-0 w-full h-screen bg-[#141010]/98 backdrop-blur-xl z-[55] transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsOpen(false)}
      >
        <nav className='flex flex-col gap-4 sm:gap-6 px-8 pt-24 sm:pt-32 text-xl sm:text-2xl text-white h-full'>
          <a 
            href="#home" 
            onClick={() => setIsOpen(false)}
            className="mobile-nav-link py-3 sm:py-4 border-b border-gray-800/50 hover:text-[#A4E733] transition-all duration-300 hover:border-[#A4E733]/50"
          >
            HOME
          </a>
          <a 
            href="#projects" 
            onClick={() => setIsOpen(false)}
            className="mobile-nav-link py-3 sm:py-4 border-b border-gray-800/50 hover:text-[#A4E733] transition-all duration-300 hover:border-[#A4E733]/50"
          >
            PROJECTS
          </a>
          <a 
            href="#skills" 
            onClick={() => setIsOpen(false)}
            className="mobile-nav-link py-3 sm:py-4 border-b border-gray-800/50 hover:text-[#A4E733] transition-all duration-300 hover:border-[#A4E733]/50"
          >
            SKILLS
          </a>
          <a 
            href="#certifications" 
            onClick={() => setIsOpen(false)}
            className="mobile-nav-link py-3 sm:py-4 border-b border-gray-800/50 hover:text-[#A4E733] transition-all duration-300 hover:border-[#A4E733]/50"
          >
            CERTIFICATES
          </a>
          <a 
            href="#contact" 
            onClick={() => setIsOpen(false)}
            className="mobile-nav-link py-3 sm:py-4 border-b border-gray-800/50 hover:text-[#A4E733] transition-all duration-300 hover:border-[#A4E733]/50"
          >
            CONTACT
          </a>
        </nav>
      </div>
    </section>
  )
}

export default Navbar