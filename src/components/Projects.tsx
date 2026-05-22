type Project = {
  name: string
  image: string
  href: string
  description: string
  stack: string[]
}

const projects: Project[] = [
  {
    name: 'Roomsley',
    image: 'roomsley.png',
    href: 'https://roomsley.vercel.app/',
    description: 'Room listing platform with a calm booking-style browsing experience and clear property discovery flows.',
    stack: ['React', 'Node.js', 'MongoDB'],
  },
  {
    name: 'NoteSpark',
    image: 'notespark.png',
    href: 'https://mynotespark.vercel.app/',
    description: 'Lightweight note-taking app focused on quick capture, simple organization, and an uncluttered writing flow.',
    stack: ['React', 'Express', 'MongoDB'],
  },
  {
    name: 'CryptoCurrent',
    image: 'cryptocurrent.png',
    href: 'https://cryptocurrentnow.vercel.app/',
    description: 'Live crypto tracker with market snapshots, price movement monitoring, and a cleaner data-first interface.',
    stack: ['React', 'API Data', 'Charts'],
  },
]

const Projects = () => {
  return (
    <section
      className="section-surface w-full border-t border-slate-200 px-4 py-[96px] text-slate-900 sm:px-8 sm:py-[112px] md:px-12 lg:px-[120px] lg:py-[128px]"
      id="projects"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center">
        <div className="max-w-2xl text-center">
          <p className="text-center text-[12px] font-semibold tracking-[0.28em] text-blue-500 sm:text-[13px]">
            FEATURED WORK
          </p>
          <h1 className="mt-4 text-center text-[32px] font-semibold tracking-[-0.04em] text-slate-900 sm:text-[40px]">
            Selected Projects
          </h1>
          <p className="mt-4 text-center text-[16px] leading-8 text-slate-600 sm:text-[17px]">
            A set of selected projects focused on clarity, responsiveness, and clean user flows.
          </p>
        </div>

        <div className="mt-10 flex w-full max-w-[56rem] flex-col gap-4">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <article className="flex overflow-hidden rounded-[14px] border border-slate-200 bg-white/88 shadow-[0_14px_38px_rgba(15,23,42,0.055)] backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-blue-200 group-hover:shadow-[0_20px_48px_rgba(15,23,42,0.08)]">
                <div className="w-[34%] min-w-[34%] border-r border-slate-200 bg-white/70 p-2.5 sm:w-[32%] sm:min-w-[32%] sm:p-3">
                  <img
                    src={project.image}
                    className="h-full min-h-[120px] w-full rounded-[10px] object-cover object-top transition-transform duration-500 group-hover:scale-[1.02] sm:min-h-[132px]"
                    alt={project.name}
                  />
                </div>

                <div className="flex flex-1 flex-col p-3.5 sm:p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h2 className="text-[17px] font-semibold tracking-[-0.03em] text-slate-900 sm:text-[20px]">
                      {project.name}
                    </h2>
                    <span className="shrink-0 rounded-full border border-blue-100 bg-blue-50/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-blue-600 transition-colors duration-300 group-hover:border-blue-200">
                      Live
                    </span>
                  </div>

                  <p className="mt-2 max-w-[34ch] text-[13px] leading-5 text-slate-600 sm:mt-2.5 sm:max-w-[40ch] sm:text-[15px] sm:leading-6">
                    {project.description}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={`${project.name}-${item}`}
                        className="rounded-full border border-slate-200 bg-white/80 px-2.5 py-1 text-[11px] font-medium text-slate-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-blue-600 sm:mt-5 sm:text-[12px]">
                    <span>View Project</span>
                    <svg
                      className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M3.33334 8H12.6667M12.6667 8L8.66667 4M12.6667 8L8.66667 12"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </article>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
