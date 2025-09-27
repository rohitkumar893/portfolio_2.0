import React from 'react';
import './Skills.css'

  const Skills: React.FC = () => {
    return (
      <div
        className="skills text-[40px] select-none w-full bg-gray-900 p-[110px] px-[40px] sm:px-[120px] flex flex-col gap-[40px]"
        id="skills"
      >
        <h1 className="text-center text-[32px] sm:text-[36px] font-bold">/ MY TECH STACK :</h1>

        {/* TECHNOLOGIES */}
        <div className="technologies grid grid-cols-2 md:grid-cols-3 justify-center items-center gap-5 gap-x-8 mx-auto">
          <div className="spin flex flex-col bg-white w-[120px] rounded-xl h-[120px] justify-center items-center gap-3 mt-[20px] hover:scale-104 transition-transform">
            <img src="typescript.png" className="logo h-[50px]" alt="TypeScript Logo" />
            <h3 className="ts text-[17px]">TYPESCRIPT</h3>
          </div>

          <div className="spin flex flex-col bg-white w-[120px] rounded-xl h-[120px] justify-center items-center gap-2 mt-[20px] hover:scale-104 transition-transform">
            <img src="javascript.png" className="logo h-[52px]" alt="JavaScript Logo" />
            <h3 className="js text-[17px]">JAVASCRIPT</h3>
          </div>

          <div className="spin flex flex-col bg-white w-[120px] rounded-xl h-[120px] justify-center items-center gap-2 mt-[20px] hover:scale-104 transition-transform">
            <img src="react.png" className="logo h-[50px]" alt="React Logo" />
            <h3 className="re text-[17px]">REACT</h3>
          </div>

          <div className="spin flex flex-col bg-white w-[120px] rounded-xl h-[120px] justify-center items-center gap-4 mt-[20px] hover:scale-104 transition-transform">
            <img src="Tailwind Logo.png" className="logo tw w-[52px]" alt="Tailwind Logo" />
            <h3 className="tw text-[17px]">TAILWIND</h3>
          </div>

          <div className="spin flex flex-col bg-white w-[120px] rounded-xl h-[120px] justify-center items-center gap-2 mt-[20px] hover:scale-104 transition-transform">
            <img src="nod.png" className="logo h-[48px] mt-1" alt="Node.js Logo" />
            <h3 className="njs text-[17px]">NODE JS</h3>
          </div>

          <div className="spin flex flex-col bg-white w-[120px] rounded-xl h-[120px] justify-center items-center gap-2 mt-[20px] hover:scale-104 transition-transform">
            <img src="sql.png" className="logo h-[48px] mt-1" alt="SQL Logo" />
            <h3 className="njs text-[17px]">SQL</h3>
          </div>

          <div className="spin flex flex-col md:justify-self-center bg-white w-[120px] rounded-xl md:col-span-3 h-[120px] justify-center items-center gap-2 mt-[20px] hover:scale-104 transition-transform">
            <img src="exp.png" className="logo h-[48px]" alt="Express Logo" />
            <h3 className="text-[17px] text-shadow-white">EXPRESS JS</h3>
          </div>
        </div>
        </div>
    );
  };

export default Skills;
