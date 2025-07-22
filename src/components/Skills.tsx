import React from 'react';

  const Skills: React.FC = () => {
    return (
      <div
        className="skills text-[40px] w-full bg-gray-800 p-[110px] px-[40px] sm:px-[120px] flex flex-col gap-[40px]"
        id="skills"
      >
        <h1 className="text-center text-[32px] sm:text-[36px] font-bold">MY TECH STACK :</h1>

        {/* LANGUAGES */}
        <div className="languages">
          <h3 className="text-center text-[32px] mt-[20px]">LANGUAGES :</h3>

          <div className="flex justify-center items-center gap-4 mt-[20px]">
            <img src="typescript.png" className="h-[36px]" alt="TypeScript Logo" />
            <h3 className="text-[28px]">TYPESCRIPT</h3>
          </div>

          <div className="flex justify-center items-center gap-4 mt-[20px]">
            <img src="javascript.png" className="h-[36px]" alt="JavaScript Logo" />
            <h3 className="text-[28px]">JAVASCRIPT</h3>
          </div>

          <div className="flex justify-center items-center gap-4 mt-[20px]">
            <img src="html.png" className="h-[36px]" alt="HTML Logo" />
            <h3 className="text-[28px]">HTML</h3>
          </div>

          <div className="flex justify-center items-center gap-4 mt-[20px]">
            <img src="css.png" className="h-[36px]" alt="CSS Logo" />
            <h3 className="text-[28px]">CSS</h3>
          </div>
        </div>

        {/* TECHNOLOGIES */}
        <div className="technologies">
          <h3 className="text-center text-[32px] mt-[20px]">TECHNOLOGIES :</h3>

          <div className="flex justify-center items-center gap-4 mt-[20px]">
            <img src="react.png" className="h-[36px]" alt="React Logo" />
            <h3 className="text-[28px]">REACT</h3>
          </div>

          <div className="flex justify-center items-center gap-4 mt-[20px]">
            <img src="Tailwind Logo.png" className="h-[24px]" alt="Tailwind Logo" />
            <h3 className="text-[28px]">TAILWIND CSS</h3>
          </div>

          <div className="flex justify-center items-center gap-4 mt-[20px]">
            <img src="nod.png" className="h-[36px] mt-1" alt="Node.js Logo" />
            <h3 className="text-[28px]">NODE JS</h3>
          </div>

          <div className="flex justify-center items-center gap-4 mt-[20px]">
            <img src="exp.png" className="h-[36px]" alt="Express Logo" />
            <h3 className="text-[28px]">EXPRESS JS</h3>
          </div>
        </div>
      </div>
    );
  };

export default Skills;
