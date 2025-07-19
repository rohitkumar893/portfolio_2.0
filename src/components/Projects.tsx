import React from 'react'

const Projects:React.FC = () => {
  return (
    <div className='projectscont bg-gray-900 text-white flex justify-center items-center h-auto p-[150px] px-[40px] sm:px-[120px] flex-col w-full' id="projects">
          <h1 className='text-[32px] sm:text-[36px] text-center font-bold'>PROJECTS :</h1>
          <div className='projects flex flex-col flex-wrap justify-evenly gap-[0px] sm:gap-[70px] text-black mt-[50px]'>
            <a href="https://roomsley.vercel.app/"><div className='mt-[50px] md:ml-[-350px] mb-[40px] rotate-357 h-[270px] w-[350px] sm:h-[300px] sm:w-[400px] flex flex-col justify-between items-center bg-gray-100 rounded-md hover:bg-blue-300'>
              <img src="roomsley.png" className='w-full shadow-sm'></img>
              <h1 className='text-[20px] p-[18px]'>Roomsley</h1>
            </div></a>

            <a href=""><div className='mt-[50px] md:mr-[-350px] mb-[40px] rotate-3 h-[270px] w-[350px] sm:h-[300px] sm:w-[400px] flex flex-col justify-between items-center bg-gray-100 rounded-md hover:bg-blue-300'>
              <img src="portf.png" className='w-[full] shadow-sm'></img>
              <h1 className='text-[20px] p-[18px]' id="portfolio">Portfolio</h1>
            </div></a>
            </div>
          </div>
  )
}

export default Projects