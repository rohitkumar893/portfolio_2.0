const Projects = () => {
  const projects = [
    {
      name: 'Roomsley',
      image: 'roomsley.png',
      href: 'https://roomsley.vercel.app/',
      description: 'Room listing platform with a clean booking-style browsing experience.',
      stack: ['React', 'Node.js', 'MongoDB'],
    },
    {
      name: 'NoteSpark',
      image: 'notespark.png',
      href: 'https://mynotespark.vercel.app/',
      description: 'Daily note-taking app designed for lightweight capture and organization.',
      stack: ['React', 'Express', 'MongoDB'],
    },
    {
      name: 'CryptoCurrent',
      image: 'cryptocurrent.png',
      href: 'https://cryptocurrentnow.vercel.app/',
      description: 'Live market dashboard for tracking cryptocurrency pricing and movement.',
      stack: ['React', 'API Data', 'Charts'],
    },
  ];

  return (
    <section
      className='flex h-auto w-full flex-col items-center justify-center border-t border-slate-200 bg-slate-50 px-4 py-[96px] text-slate-900 sm:px-8 sm:py-[112px] md:px-12 lg:px-[120px] lg:py-[128px]'
      id="projects"
    >
      <div className='w-full max-w-6xl flex flex-col items-center'>
        <p className='text-[12px] sm:text-[13px] font-semibold tracking-[0.28em] text-slate-500 text-center'>
          FEATURED WORK
        </p>
        <h1 className='mt-4 text-[32px] sm:text-[40px] text-center font-semibold tracking-[-0.04em] text-slate-900'>
          Selected Projects
        </h1>
        <p className='mt-4 max-w-2xl text-center text-[16px] sm:text-[17px] leading-7 text-slate-600'>
          A few recent builds focused on product clarity, responsive interfaces, and reliable user flows.
        </p>

        <div className='projects mt-10 grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3'>
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className='group block h-full'
            >
              <article className='flex h-full flex-col overflow-hidden rounded-[12px] border border-slate-200 bg-white transition-colors duration-300 group-hover:border-slate-300'>
                <div className='relative h-[184px] overflow-hidden border-b border-slate-200 bg-slate-100 sm:h-[196px]'>
                  <img
                    src={project.image}
                    className='h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.01]'
                    alt={project.name}
                  />
                </div>

                <div className='flex flex-1 flex-col p-5 sm:p-6'>
                  <h2 className='text-[21px] font-semibold tracking-[-0.03em] text-slate-900'>
                    {project.name}
                  </h2>
                  <p className='mt-3 text-[15px] leading-6 text-slate-600'>
                    {project.description}
                  </p>

                  <p className='mt-5 text-[13px] tracking-[0.08em] uppercase text-slate-500'>
                    {project.stack.join(' / ')}
                  </p>

                  <div className='mt-auto pt-6 text-[13px] font-semibold tracking-[0.08em] text-slate-900'>
                    Open Project
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
