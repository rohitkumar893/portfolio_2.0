import React from 'react'

const Skills:React.FC = () => {
  return (
    <>
        <div className='h-full w-full bg-gray-900 flex justify-center items-center flex-col'>
            <b className='text-4xl'>MY TECH STACK</b>
            <br /><br />
            <b className='text-3xl'>LANGUAGES</b>
            <br />
            <p className='text-3xl'>TYPESCRIPT</p>
            <p className='text-3xl'>JAVASCRIPT</p>
            <p className='text-3xl'>HTML</p>
            <p className='text-3xl'>CSS</p>
            <br /><br />
            <b className='text-3xl'>TECHNOLOGIES</b>
            <br />
            <p className='text-3xl'>REACT</p>
            <p className='text-3xl'>NODE JS</p>
            <p className='text-3xl'>TAILWIND CSS</p>
            <p className='text-3xl'>BUN</p>
            <p className='text-3xl'>GIT</p>
        </div>
    </>
  )
}

export default Skills