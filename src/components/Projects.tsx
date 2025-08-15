import React from 'react';

const Projects: React.FC = () => {
  return (
    <div
      className='projectscont bg-gray-800 text-white flex justify-center items-center h-auto py-[150px] px-[40px] sm:px-[120px] flex-col w-full' id="projects">
      <h1 className='text-[32px] sm:text-[36px] text-center font-bold'>PROJECTS :</h1>

      <div className='projects flex flex-wrap justify-center gap-10 mt-[50px]'>
        {/* Project 1 */}
        <a href="https://roomsley.vercel.app/">
          <div className='mb-[40px] sm:hover:rotate-2 transition h-[290px] w-[340px] sm:h-[280px] sm:w-[340px] flex flex-col justify-between items-center bg-gray-100 rounded-md hover:bg-blue-200 text-black'>
            <img src="roomsley.png" className='w-full shadow-sm rounded-t-md' alt="Roomsley" />
            <h1 className='text-[20px] p-[18px] text-gray-700 font-medium'>Roomsley</h1>
            <p className='mb-[20px] mt-[-18px] text-gray-600 text-[16px] sm:text-[18px]'>
              'Room listing web-app'
            </p>
          </div>
        </a>

        {/* Project 2 */}
        <a href="https://github.com/rohitkumar893/quiqresume">
          <div className='mb-[40px] sm:hover:rotate-2 transition h-[290px] w-[340px] sm:h-[280px] sm:w-[340px] flex flex-col justify-between items-center bg-gray-100 rounded-md hover:bg-blue-200 text-black'>
            <img src="quiq.png" className='w-full shadow-sm rounded-t-md' alt="Resume Builder" />
            <h1 className='text-[20px] p-[18px] text-gray-700 font-medium'>QuiqResume</h1>
            <p className='mb-[20px] mt-[-18px] text-gray-600 text-[16px] sm:text-[18px]'>
              'Generate your resume'
            </p>
          </div>
        </a>
        
        {/* Project 3 */}
        <a href="/">
          <div className='mb-[40px] sm:hover:rotate-2 transition h-[290px] w-[340px] sm:h-[280px] sm:w-[340px] flex flex-col justify-between items-center bg-gray-100 rounded-md hover:bg-blue-200 text-black'>
            <img src="portf.png" className='w-full shadow-sm rounded-t-md' alt="Portfolio" />
            <h1 className='text-[20px] p-[18px] text-gray-700 font-medium' id="portfolio">Portfolio</h1>
            <p className='mb-[20px] mt-[-18px] text-gray-600 text-[16px] sm:text-[18px]'>
              'This portfolio'
            </p>
          </div>
        </a>   
      </div>
    </div>
  );
};

export default Projects;
