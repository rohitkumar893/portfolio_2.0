import React from 'react'

const Contact:React.FC = () => {
  return (
    <section className = "flex flex-col border-t-1 border-gray-500 bg-[#141f38] justify-center items-center gap-[20px] py-[110px] sm:py-[130px] lg:py-[150px] px-4 sm:px-8 md:px-12 lg:px-[120px]" id="contact">
        <h1 className='text-[32px] sm:text-[36px] font-bold text-gray-200 bg-clip-text'>/ CONTACT :</h1>
        <p className='text-[16px] sm:text-[30px] flex items-center gap-[8px] break-all sm:break-normal hover:scale-104 transition-transform'><img src="mail_icon.png" className='h-[36px] sm:h-[50px] mt-0 sm:mt-0' />rkrohitkumar893@gmail.com</p>
    </section>
  )
}

export default Contact
