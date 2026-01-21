import React from 'react'
import './Contact.css'

const Contact:React.FC = () => {
  return (
    <section className = "flex flex-col border-t-1 border-gray-500 bg-[#141010] justify-center items-center gap-[20px] p-[150px] px-[40px] sm:px-[120px]" id="contact">
        <h1 className='text-[32px] sm:text-[36px] font-bold bg-gradient-to-r from-[#A4E733] to-[#33e4e7] bg-clip-text text-transparent'>/ CONTACT :</h1>
        <p className='text-[22px] sm:text-[30px] flex gap-[8px] hover:scale-104 transition-transform'><img src="mail_icon.png" className='h-[50px] mt-[-6px] sm:mt-0' />rkrohitkumar893@gmail.com</p>
    </section>
  )
}

export default Contact