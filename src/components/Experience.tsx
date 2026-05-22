import { ExternalLink } from 'lucide-react'

const responsibilities = [
  'Built REST APIs with Node.js and Express for frontend applications.',
  'Connected backend services with databases and handled CRUD operations.',
  'Implemented authentication, validation, and protected routes.',
  'Integrated third-party APIs and managed server-side business logic.',
  'Handled errors, environment variables, and reusable middleware.',
  'Tested endpoints and improved API performance for smoother responses.',
]

const Experience = () => {
  return (
    <section
      className="section-surface w-full border-t border-slate-200 px-4 py-[64px] text-slate-900 sm:px-8 sm:py-[76px] md:px-12 lg:px-[120px] lg:py-[86px]"
      id="experience"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center">
        <div className="text-center">
          <p className="text-center text-[20px] font-semibold uppercase tracking-[0.28em] text-blue-500 sm:text-[24px]">
            Work Experience
          </p>
        </div>

        <article className="mt-8 w-full max-w-[52rem] rounded-[14px] border border-slate-200 bg-white/88 p-4 shadow-[0_14px_38px_rgba(15,23,42,0.055)] backdrop-blur-sm sm:p-6">
          <div className="flex flex-col gap-4 border-b border-slate-200 pb-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              
                <img
                  src="/matrid.jpg"
                  alt="logo"
                  className="h-[70px] w-full object-contain"
                />
         
              <div>
              <p className="text-[20px] font-semibold uppercase tracking-[0.08em] text-blue-500 sm:text-[18px]">
                Matrid Technologies
              </p>
              <h2 className="mt-1.5 text-[16px] font-semibold tracking-[-0.02em] text-slate-900 sm:text-[18px]">
                Software Developer - Node.js
              </h2>
              <a
                href="https://www.matridtech.net"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1.5 text-[13px] font-medium text-slate-500 hover:text-blue-600"
              >
                matridtech.net
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
              </div>
            </div>
          </div>

          <ul className="mt-5 list-disc space-y-2.5 pl-5 text-[14px] leading-6 text-slate-600 sm:text-[15px]">
            {responsibilities.map((item) => (
              <li
                key={item}
                className="pl-1 marker:text-blue-500"
              >
                {item}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Experience
