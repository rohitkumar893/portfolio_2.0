import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      name: 'Roomsley',
      image: 'roomsley.png',
      href: 'https://roomsley.vercel.app/',
      description: 'Room listing platform with a clean booking-style browsing experience.',
      stack: ['React', 'Node.js', 'MongoDB'],
      accent: 'Product Platform',
    },
    {
      name: 'NoteSpark',
      image: 'notespark.png',
      href: 'https://mynotespark.vercel.app/',
      description: 'Daily note-taking app designed for lightweight capture and organization.',
      stack: ['React', 'Express', 'MongoDB'],
      accent: 'Workflow Tool',
    },
    {
      name: 'CryptoCurrent',
      image: 'cryptocurrent.png',
      href: 'https://cryptocurrentnow.vercel.app/',
      description: 'Live market dashboard for tracking cryptocurrency pricing and movement.',
      stack: ['React', 'API Data', 'Charts'],
      accent: 'Real-Time Dashboard',
    },
  ];

  return (
    <section
      className='projectscont border-t border-slate-200 bg-slate-50 text-slate-900 flex justify-center items-center h-auto py-[100px] sm:py-[120px] lg:py-[140px] px-4 sm:px-8 md:px-12 lg:px-[120px] flex-col w-full'
      id="projects"
    >
      <div className='w-full max-w-6xl flex flex-col items-center'>
        <p className='text-[12px] sm:text-[13px] font-semibold tracking-[0.28em] text-slate-500 text-center'>
          FEATURED WORK
        </p>
        <h1 className='mt-4 text-[32px] sm:text-[40px] text-center font-semibold tracking-[-0.03em] text-slate-900'>
          Selected Projects
        </h1>
        <p className='mt-4 max-w-2xl text-center text-[16px] sm:text-[18px] leading-8 text-slate-600'>
          A few recent builds focused on product clarity, responsive interfaces, and reliable user flows.
        </p>

        <div className='projects mt-[40px] grid w-full grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3'>
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className='group block h-full'
            >
              <article className='flex h-full flex-col overflow-hidden rounded-[14px] border border-slate-200 bg-white shadow-[0_14px_34px_rgba(15,23,42,0.06)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_20px_44px_rgba(15,23,42,0.08)]'>
                <div className='relative h-[200px] overflow-hidden border-b border-slate-200 bg-slate-100 sm:h-[210px]'>
                  <img
                    src={project.image}
                    className='h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]'
                    alt={project.name}
                  />
                </div>

                <div className='flex flex-1 flex-col p-5 sm:p-6'>
                  <p className='text-[12px] font-semibold uppercase tracking-[0.22em] text-slate-500'>
                    {project.accent}
                  </p>
                  <h2 className='mt-2.5 text-[21px] font-semibold tracking-[-0.03em] text-slate-900'>
                    {project.name}
                  </h2>
                  <p className='mt-3 text-[15px] leading-6 text-slate-600'>
                    {project.description}
                  </p>

                  <div className='mt-5 flex flex-wrap gap-2'>
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className='rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[12px] font-medium text-slate-600'
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className='mt-auto pt-6 text-[13px] font-semibold tracking-[0.14em] text-slate-900'>
                    VIEW PROJECT
                  </div>
                </div>
              </article>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
