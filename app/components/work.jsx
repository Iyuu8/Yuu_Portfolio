import React from 'react'

export default function Work() {
  return (
    <section className='px-[1rem] flex flex-col pb-[2rem] gap-[1rem] items-center'>
        <h1 className='w-[100%] text-[var(--strong-red)] font-bold text-[clamp(36px,4.6vh,55px)] lg:px-[1rem]'>My Work</h1>
        <div className='flex flex-col items-center gap-[1rem] laptop-work'>
            <div className='w-[90%] max-w-[670px]'>
                <img src="/YuuQuiz1.png" alt=""/>
            </div>
            <div className='w-[100%] flex flex-col gap-[1.5rem] work-text'>
                <p className='font-bold text-[clamp(20px,2.6vh,35px)]'>YuuQuiz is a clean and responsive web app that allows the user to create and solve his own quizes, perfect for learning and education.</p>
                <a 
                    href="" 
                    className='font-bold text-[var(--strong-red)] underline text-[clamp(2ch,3vh,5ch)] transition-all hover:text-[var(--weak-red)] active:text-[var(---weak-red)]'
                >Check on GitHub</a>
            </div>

        </div>
    </section>
  )
}
