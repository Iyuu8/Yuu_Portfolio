import React from 'react'
import { FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa'

export default function Contacts() {
  return (
    <footer id="Contact" className='bg-[var(--strong-red)] text-[var(--background)] flex flex-col items-center gap-[1rem] py-[1.5rem]'>
      <h1 className='text-center font-bold text-[clamp(25px,4vh,47px)]'>Let’s Work Together</h1>
      <p className='text-center font-bold text-[clamp(15px,2.8vh,32px)] px-[0.5rem]'>I’m always open to new projects, collaborations, or just a good tech chat. </p>
      <p className='text-center font-bold text-[clamp(15px,2.8vh,32px)] px-[0.5rem] hidden lg:block'>Whether you have an idea in mind or want to build something amazing together — let’s connect!</p>
      <div className='flex w-[90%] text-[6vh] gap-[10%] grow-1 items-center justify-center'>
        <a className='hover:scale-[110%] transition-all duration-300' href='https://www.instagram.com/yubi_ins/'><FaInstagram/></a>
        <a className='hover:scale-[110%] transition-all duration-300' href='https://github.com/Iyuu8'><FaGithub/></a>
        <a className='hover:scale-[110%] transition-all duration-300' href='mailto:anesbenaziza19@gmail.com'><FaEnvelope/></a>

      </div>

    </footer>
  )
}
