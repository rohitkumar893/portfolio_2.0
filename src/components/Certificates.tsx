import React from 'react'

const Certificates:React.FC = () => {
  return (
        <div className='certifications flex flex-col justify-center items-center gap-[90px] p-[150px] bg-gray-900 px-[40px] sm:px-[120px]' id="certifications">
            <h1 className='text-[36px] font-bold'>CERTIFICATES :</h1>
            
            <div>
              <a href='https://www.coursera.org/account/accomplishments/verify/LFQ94ZUI1Q7K'><img src='microsoft.jpg' className='h-[240px] md:h-[340px] rotate-357 hover:scale-95'></img></a>
              <a href='https://www.coursera.org/account/accomplishments/verify/2FGSN01B5TS3'><img src='meta.jpg' className='h-[240px] md:h-[340px] mt-[100px] rotate-3 hover:scale-95'></img></a>
            </div>
        </div>
  )
}

export default Certificates