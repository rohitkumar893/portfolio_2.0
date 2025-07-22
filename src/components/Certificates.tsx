import React from 'react'

const Certificates: React.FC = () => {
  return (
    <div className='certifications flex flex-col  justify-center items-center gap-[90px] p-[150px] bg-gray-800 px-[40px] sm:px-[120px]' id="certifications">
      <h1 className='text-[32px] sm:text-[36px] font-bold text-white'>CERTIFICATIONS :</h1>

      <div className='flex flex-col flex-wrap justify-evenly sm:gap-[70px]'>
        
        <a href='https://www.coursera.org/account/accomplishments/verify/LFQ94ZUI1Q7K'>
          <div className='mt-[50px] md:ml-[-350px] mb-[40px] rotate-358 h-[260px] w-[340px] sm:h-[300px] sm:w-[400px] flex items-center justify-center bg-gray-100 rounded-md hover:bg-blue-300 overflow-hidden'>
            <img src='microsoft.jpg' className='w-full h-full object-cover shadow-sm' />
          </div>
        </a>

        <a href='https://www.coursera.org/account/accomplishments/verify/2FGSN01B5TS3'>
          <div className='mt-[50px] md:mr-[-350px] mb-[40px] rotate-2 h-[260px] w-[340px] sm:h-[300px] sm:w-[400px] flex items-center justify-center bg-gray-100 rounded-md hover:bg-blue-300 overflow-hidden'>
            <img src='meta.jpg' className='w-full h-full object-cover shadow-sm' />
          </div>
        </a>

      </div>
    </div>
  )
}

export default Certificates
