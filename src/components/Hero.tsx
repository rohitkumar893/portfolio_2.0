import React from 'react'
import './Hero.css'

const skills = [
  {
    skillName: 'TypeScript',
    imagePath: 'typescript.png',
    category: 'Language',
  },
  {
    skillName: 'Node.js',
    imagePath: 'nod.png',
    category: 'Runtime',
  },
  {
    skillName: 'React',
    imagePath: 'react.png',
    category: 'Library',
  },
  {
    skillName: 'JavaScript',
    imagePath: 'javascript.png',
    category: 'Language',
  },
  {
    skillName: 'Python',
    imagePath: 'python.png',
    category: 'Language',
  },
  {
    skillName: 'Express.js',
    imagePath: 'exp.png',
    category: 'Backend',
  },
]

const Hero:React.FC = () => {
  return (
    <section className='hero min-h-screen w-full text-slate-900 flex bg-white pt-24 md:pt-28 lg:pt-0 px-5 sm:px-8 md:px-12 lg:px-[120px] relative overflow-hidden' id="home">
            <div className='flex w-full justify-center items-center py-16 sm:py-20 lg:py-24'>
              <div className="relative z-10 flex flex-col items-start w-full max-w-4xl hero-content-wrapper">
                <div className="name mb-5 md:mb-6 px-2 sm:px-3 lg:px-0">
                  <p className="mb-4 text-center lg:text-left text-[12px] sm:text-[13px] font-semibold tracking-[0.28em] text-slate-500">
                    SOFTWARE DEVELOPER
                  </p>
                  <h1
                    className="text-center lg:text-left text-slate-950 text-[42px] sm:text-[56px] md:text-[60px] lg:text-[54px] xl:text-[60px] select-none font-semibold leading-[1.02] tracking-[-0.05em]"
                  >
                    From idea to production.
                  </h1>
                </div>

                <p className='about px-2 sm:px-3 lg:px-0 text-[16px] sm:text-[22px] md:text-[24px] lg:text-[22px] w-full max-w-[760px] text-slate-600 leading-relaxed hero-description'>
                 I focus on building systems that are clear, reliable, and easy to work with over time, keeping simplicity and maintainability in mind.
                </p>
              <div className="links mt-6 text-center relative z-10">
                <div className="social-links">
                    <a href="https://github.com/rohitkumar893" target="_blank" rel="noopener noreferrer">
                      <div id="github" className="social-btn flex-center">
                        <svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        <span>GitHub</span>
                      </div>
                    </a>

                    <a href="https://www.linkedin.com/in/rohitkumar893/" target="_blank" rel="noopener noreferrer">
                      <div id="linkedin" className="social-btn flex-center">
                        <svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                        </svg>
                        <span>LinkedIn</span>
                      </div>
                    </a>       
                  </div>
              </div>

              <div className="hero-carousel mt-8 w-full">
                <div className="hero-carousel-mask">
                  <div className="hero-carousel-track">
                    {[...skills, ...skills].map((skill, index) => (
                      <article key={`${skill.skillName}-${index}`} className="hero-skill-card">
                        <div className="hero-skill-icon">
                          <img src={skill.imagePath} alt={`${skill.skillName} logo`} />
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

        <div className="absolute arrow w-full flex justify-center p-0 left-0 bottom-[5%] md:bottom-[3%] z-10">
            <a href="#projects" className="arrow-link" aria-label="Scroll to projects">
              <img src='arrow2.png' className='hidden md:block h-[56px] animate-bounce arrow-icon' alt="Scroll down" />
            </a>
        </div>
    </section>
  )
}

export default Hero;
