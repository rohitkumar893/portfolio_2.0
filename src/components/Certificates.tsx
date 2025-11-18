import React from 'react'

const Certificates: React.FC = () => {
  return (
  <section className='certifications border-b-1 border-white flex flex-col justify-center items-center gap-[90px] py-[150px] px-[40px] sm:px-[120px] bg-gradient-to-r from-black to-gray-800'
      id="certifications"
    >
      <h1 className='text-[32px] sm:text-[36px] font-bold text-white'>/ CERTIFICATIONS :</h1>

      <div className='flex flex-wrap justify-center gap-10'>
        {/* Microsoft Certificate */}
        <a href='https://www.coursera.org/account/accomplishments/verify/LFQ94ZUI1Q7K' target='_blank' rel='noopener noreferrer'>
          <div className='mb-[40px] sm:hover:rotate-2 transition h-[260px] w-[340px] sm:h-[280px] sm:w-[380px] flex items-center justify-center bg-gray-100 rounded-md hover:bg-blue-300 overflow-hidden'>
            <img src='microsoft.jpg' className='w-full h-full object-cover shadow-sm' alt="Microsoft Certification" />
          </div>
        </a>

        {/* Meta Certificate */}
        <a href='https://www.coursera.org/account/accomplishments/verify/2FGSN01B5TS3' target='_blank' rel='noopener noreferrer'>
          <div className='mb-[40px] sm:hover:rotate-2 transition h-[260px] w-[340px] sm:h-[280px] sm:w-[380px] flex items-center justify-center bg-gray-100 rounded-md hover:bg-blue-300 overflow-hidden'>
            <img src='meta.jpg' className='w-full h-full object-cover shadow-sm' alt="Meta Certification" />
          </div>
        </a>
      </div>
    </section>
  );

}

export default Certificates
