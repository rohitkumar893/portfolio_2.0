import React from 'react';
import './Skills.css'

  const Skills: React.FC = () => {
    const skill = [
      {
        skillName:"NEXT JS",
        imagePath:"next.png"
      },
      {
        skillName:"JAVASCRIPT",
        imagePath:"javascript.png"
      },
      {
        skillName:"NODE JS",
        imagePath:"nod.png"
      },
      {
        skillName:"REACT",
        imagePath:"react.png"
      },
      {
        skillName:"TAILWIND",
        imagePath:"Tailwind Logo.png"
      },
      {
        skillName:"EXPRESS JS",
        imagePath:"exp.png"
      },
      {
        skillName:"TYPESCRIPT",
        imagePath:"typescript.png"
      },
      {
        skillName:"SQL",
        imagePath:"sql.png"
      }
    ]

    return (
      <section
        className="skills border-t-1 border-gray-500 text-[40px] select-none w-full bg-[#141010] p-[110px] px-[40px] sm:px-[120px] flex flex-col gap-[40px]"
        id="skills"
      >
        <h1 className="text-center text-[32px] sm:text-[36px] font-bold">/ MY TECH STACK :</h1>

        {/* TECHNOLOGIES */}
        <div className="technologies grid grid-cols-2 md:grid-cols-3 justify-center items-center gap-5 gap-x-8 mx-auto">
          {
          skill.map((v, i) => {
            return (
            <div key={i} className="spin flex flex-col bg-white w-[120px] rounded-xl h-[120px] justify-center items-center gap-3 mt-[20px] hover:scale-104 transition-transform">
              <img src={v.imagePath} className="logo h-[49px]" alt="Next Logo" />
              <h3 className="ts text-[17px]">{v.skillName}</h3>
            </div>)
          })
          }
        </div>
        </section>
    );
  };

export default Skills;
