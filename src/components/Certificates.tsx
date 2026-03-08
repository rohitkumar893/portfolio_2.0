import React from 'react'

const Certificates: React.FC = () => {
  return (
  <section className='certifications border-t-1 border-gray-500 flex flex-col justify-center items-center gap-[70px] sm:gap-[80px] lg:gap-[90px] py-[110px] sm:py-[130px] lg:py-[150px] px-4 sm:px-8 md:px-12 lg:px-[120px] bg-[#141f38]'
      id="certifications"
    >
      <h1 className='text-[32px] sm:text-[36px] font-bold bg-clip-text text-gray-200'>/ CERTIFICATIONS :</h1>

      <div className='flex w-full flex-wrap justify-center gap-7 sm:gap-10'>
        {/* Microsoft Certificate */}
        <a href='https://www.coursera.org/account/accomplishments/verify/LFQ94ZUI1Q7K' target='_blank' rel='noopener noreferrer' className='w-full max-w-[340px] sm:max-w-[380px]'>
          <div className='mb-[40px] sm:hover:rotate-2 transition h-[240px] w-full max-w-[340px] sm:h-[280px] sm:max-w-[380px] flex items-center justify-center bg-gray-100 rounded-md hover:bg-blue-300 overflow-hidden'>
            <img src='microsoft.jpg' className='w-full h-full object-cover shadow-sm' alt="Microsoft Certification" />
          </div>
        </a>

        {/* Meta Certificate */}
        <a href='https://www.coursera.org/account/accomplishments/verify/2FGSN01B5TS3' target='_blank' rel='noopener noreferrer' className='w-full max-w-[340px] sm:max-w-[380px]'>
          <div className='mb-[40px] sm:hover:rotate-2 transition h-[240px] w-full max-w-[340px] sm:h-[280px] sm:max-w-[380px] flex items-center justify-center bg-gray-100 rounded-md hover:bg-blue-300 overflow-hidden'>
            <img src='meta.jpg' className='w-full h-full object-cover shadow-sm' alt="Meta Certification" />
          </div>
        </a>
      </div>
    </section>
  );

}

export default Certificates
