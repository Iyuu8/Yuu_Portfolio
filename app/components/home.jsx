import { div } from 'framer-motion/client'
import React from 'react'

export default function Home() {
  return (
    // ipad uses laptop version, adjust it so that it uses the mobile/tablet version
    <section id='Home' className='min-h-[calc(100vh-5rem)] flex flex-col justify-start gap-[0.5vh] items-center'>

      {/*mobile design*/}
      <div className='w-full flex flex-col justify-start gap-[0.5vh] items-center lg:hidden ipad'>
        <h1 className='text-[clamp(32px,4.4vh,35px)] md:text-[4.3vh] font-bold text-[var(--dark-red)] text-center w-[95%] '>Hello, I am Ayoub!</h1>
        <div className='w-[clamp(68%,315px,90%)] max-w-[440px] aspect-square  '>
          <img src="/pfp_home.png" alt="profile picture"/>
        </div>
        <h1 className='text-[4.9vh] font-bold text-[var(--dark-red)] text-center w-[90%] '>
          A Webdev&
          UI/UX Designer
        </h1>

      </div>
      <div className='grow-1 flex items-center w-full justify-center lg:hidden ipad'>
        <button className='bg-[var(--strong-red)] text-[var(--background)] text-[3.8vh] font-bold px-[0.6rem] py-[0.4rem] rounded-[0.5rem]'>
          <a href="#About">Explore</a>
        </button>

      </div>

      <h2 className='flex text-center items-start  grow-1 mt-[0.3rem] text-[2.5vh] px-[0.5rem] font-semibold lg:hidden hide-on-short'>
        Continuously learning and exploring new web technologies.
      </h2>

      {/*laptop version */}
      <div className='hidden laptop w-[90%] justify-between min-h-[70vh]'>
        <div className='flex-col flex'>
          <div className='flex flex-col text-[var(--dark-red)] grow justify-center pt-[10vh]'>
            <h1 className='font-bold text-[clamp(48px,4vw,55px)]'>Hello, I am Ayoub</h1>
            <h1 className='text-[clamp(40px,3vw,50px)] font-bold w-[400px] '>
              A Webdev &
              UI/UX Designer
            </h1>
            <p className='font-medium text-[clamp(2vw,3.5vh,3vw)]'>based in Algeria</p>
            <p className='font-medium text-[clamp(1.8vw,3vh,2.8vw)]'>Always experimenting, learning, and leveling up my web skills.</p>

          </div>
          <div className='h-[8rem] flex items-center justify-center relative'>
            <div className='border-1 absolute top-[50%] left-[50%] translate-[-50%] bg-[var(--weak-red)] font-semibold text-[4vh] py-[0.3rem] px-[1.5rem] text-[var(--weak-red)] rounded-[0.5rem]'>Explore</div>
            <button className='cursor-pointer translate-[-0.5rem] border-2 text-[var(--dark-red)] font-semibold text-[4vh] py-[0.3rem] px-[1.5rem] rounded-[0.5rem] transition-all duration-300 hover:translate-0 active:translate-0 '><a href="#About">Explore</a></button>
            
          </div>
        </div>

        <div className='grow flex items-center justify-center'>
          <img 
            src="/pfp_home.png" 
            alt="profile picture"
            className='max-w-[550px] min-w-[450px] w-full aspect-square'
          />
        </div>
      </div>

      <div className='hidden lg:flex grow-1 items-center text-center w-[95%] justify-center text-[3.5vh] font-semibold'>
        Continuously learning and exploring new web technologies.
      </div>



        
    </section>
  )
}
