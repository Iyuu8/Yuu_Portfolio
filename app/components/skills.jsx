import React from 'react'

const SkillCard=({skill, description})=>{
    return(
        <div className='flex flex-col gap-[0.25rem] p-[0.7rem] 
        bg-[var(--light-grey)] rounded-[0.5rem] w-[100%] sm:w-[44vw]
        shadow-[2px_2px_8px_1px_rgba(0,0,0,0.4)] md:min-h-[clamp(9rem,10vw,13rem)] transition-all hover:scale-[102%] duration-300'>
            <h1 className='font-bold text-[var(--strong-red)] text-[clamp(2.2ch,4vh,3ch)]'>{skill}</h1>
            <p className='font-bold text-[clamp(1.8ch,3.6vh,2.4ch)] text-center'>{description}</p>
        </div>
    )
}

export default function Skills() {
    const skills=[
        {skill:"React",description:"I develop fast, component-based interfaces."},
        {skill:"JavaScript (ES6+)",description:"I build interactive, dynamic features using modern JS."},
        {skill:"HTML5/CSS3",description:"I create clean layouts with modern styling."},
        {skill:"Next.js",description:"Still learning, but I craft dynamic JS features."},
        {skill:"Tailwind CSS:",description:"New to it, but styling clean interfaces quickly."},

    ]
  return (
    <section className='px-[1rem] pb-[2rem] flex flex-col gap-[clamp(1rem,5vw,4rem)] pt-[1rem]'>
        <h1 className='text-[var(--strong-red)] font-bold text-[clamp(36px,4.6vh,55px)] lg:px-[1rem]'>My Skills</h1>
        <div className='flex flex-wrap content-center items-center justify-center  gap-[2rem]'>
            {skills.map((item,ind)=>(
                <SkillCard 
                    key={`${item.skill}-${item.description}-${ind}`}
                    skill={item.skill}
                    description={item.description}
                />
            ))}

        </div>
      
    </section>
  )
}
