import React from 'react';
import './Skills.css'

  const Skills: React.FC = () => {
    const skill = [
      {
        skillName:"TypeScript",
        imagePath:"typescript.png",
        category:"Language"
      },
      {
        skillName:"Node.js",
        imagePath:"nod.png",
        category:"Runtime"
      },
      {
        skillName:"React",
        imagePath:"react.png",
        category:"Library"
      },
      {
        skillName:"JavaScript",
        imagePath:"javascript.png",
        category:"Language"
      },
      {
        skillName:"Python",
        imagePath:"python.png",
        category:"Language"
      },
      {
        skillName:"Express.js",
        imagePath:"exp.png",
        category:"Backend"
      },
      
      {
        skillName:"SQL",
        imagePath:"sql.png",
        category:"Database"
      }
    ]

    return (
      <section
        className="skills border-t border-slate-200 select-none w-full bg-white py-[100px] sm:py-[110px] lg:py-[120px] px-4 sm:px-8 md:px-12 lg:px-[120px] flex flex-col gap-[40px]"
        id="skills"
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center">
          <p className="text-center text-[12px] sm:text-[13px] font-semibold tracking-[0.28em] text-slate-500">
            CAPABILITIES
          </p>
          <h1 className="mt-4 text-center text-[32px] sm:text-[40px] font-semibold tracking-[-0.03em] text-slate-900">
            Core Stack
          </h1>
          <p className="mt-4 max-w-2xl text-center text-[16px] sm:text-[18px] leading-8 text-slate-600">
            Technologies I use to build fast, maintainable, and production-ready web applications.
          </p>

          <div className="technologies mt-11 grid w-full grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {
            skill.map((v, i) => {
              return (
              <div key={i} className="spin flex min-h-[150px] w-full flex-col rounded-[18px] px-5 py-6 sm:px-6 sm:py-7 hover:-translate-y-1 transition-transform">
                <div className="flex h-16 w-16 items-center justify-center rounded-[14px] bg-slate-50 border border-slate-200">
                  <img src={v.imagePath} className="logo h-[38px] w-[38px] object-contain" alt={`${v.skillName} logo`} />
                </div>
                <p className="mt-5 text-[12px] font-semibold uppercase tracking-[0.18em] text-slate-500">{v.category}</p>
                <h3 className="ts mt-2 text-[18px] font-semibold tracking-[-0.02em] text-slate-900">{v.skillName}</h3>
              </div>)
            })
            }
          </div>
        </div>
      </section>
    );
  };

export default Skills;
