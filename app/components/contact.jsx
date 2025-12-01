import React from 'react'
import { FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa'

export default function Contacts() {
  return (
    <footer className='h-[clamp(12rem,15vh,20rem)] bg-[var(--strong-red)] text-[var(--background)] flex flex-col items-center gap-0.5 py-1.5'>
        <h1 className='text-center font-bold text-[clamp(25px,3vh,40px)]'>Let’s Work Together</h1>
        <p className='text-center font-bold text-[clamp(15px,2vh,40px)] px-[0.5rem]'>I’m always open to new projects, collaborations, or just a good tech chat. </p>
        <p className='text-center font-bold hidden md:block'>Whether you have an idea in mind or want to build something amazing together — let’s connect!</p>
        <div className='flex w-[90%] text-[4.5ch] gap-[10%] grow-1 items-center justify-center'>
            <a href='https://www.instagram.com/yubi_ins/'><FaInstagram/></a>
            <a href='https://github.com/Iyuu8'><FaGithub/></a>
            <a href='mailto:anesbenaziza19@gmail.com'><FaEnvelope/></a>

        </div>

    </footer>
  )
}
