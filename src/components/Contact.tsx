import React from 'react'

const Contact:React.FC = () => {
  return (
    <section className="flex flex-col border-t border-slate-200 bg-slate-50 justify-center items-center py-[100px] sm:py-[120px] lg:py-[140px] px-4 sm:px-8 md:px-12 lg:px-[120px]" id="contact">
      <div className='w-full max-w-3xl text-center'>
        <p className='text-[11px] sm:text-[12px] font-semibold tracking-[0.3em] text-slate-400'>
          CONTACT
        </p>
        <h1 className='mt-5 text-[30px] sm:text-[38px] font-semibold tracking-[-0.04em] text-slate-900'>
          Let&apos;s Build Something Useful
        </h1>
        <p className='mt-5 text-[15px] sm:text-[17px] leading-8 text-slate-600'>
          For roles, freelance work, or collaboration, feel free to reach out directly.
        </p>

        <a
          href='mailto:rkrohitkumar893@gmail.com'
          className='mt-9 inline-flex items-center gap-3 rounded-full border border-slate-200 px-5 py-3 text-[16px] sm:text-[17px] font-medium text-slate-700 transition-all duration-300 hover:border-slate-900 hover:text-slate-950 hover:shadow-[0_10px_24px_rgba(15,23,42,0.06)]'
        >
          <img src="mail_icon.png" className='h-[20px] w-[20px]' alt="Email icon" />
          <span className='break-all sm:break-normal'>rkrohitkumar893@gmail.com</span>
        </a>
      </div>
    </section>
  )
}

export default Contact
