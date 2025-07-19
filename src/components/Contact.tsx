import React from 'react'

const Contact:React.FC = () => {
  return (
    <div className = "flex flex-col bg-gray-900 justify-center items-center gap-[20px] p-[150px] px-[40px] sm:px-[120px]" id="contact">
        <h1 className='text-[32px] sm:text-[36px] font-bold'>CONTACT :</h1>
        <p className='text-[22px] sm:text-[30px] flex gap-[8px]'><img src="mail_icon.png" className='h-[50px] mt-[-6px] sm:mt-0' />rkrohitkumar893@gmail.com</p>
    </div>
  )
}

export default Contact