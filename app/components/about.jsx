import React from 'react'

const SkillBar=({mobile,skills})=>{
    /*${mobile? "md:hidden":"md:flex"}*/
    return(
        <div 
            className={`bg-[var(--light-grey)] py-[1.8rem] flex flex-col ${mobile? "lg:hidden":"lg:flex lg:w-[100%] rounded-[5px]"} `}
        >
            <ul className='flex flex-col grow-1 gap-[1rem]'>
                {skills.map((item,ind)=>(
                <li 
                    key={`${item.skill}-${item.level}-${ind}`}
                    className='min-h-[6vh] flex flex-col grow-1'
                >
                    <p className='text-[var(--strong-red)] font-bold px-[1rem] text-[clamp(18px,2.9vh,35px)]'>{item.skill}</p>
                    <div className='relative flex w-[100%] grow-1 items-center justify-center'>
                        <div className='mx-[0.8rem] w-[100%] h-[6px] bg-[var(--bar-grey)] rounded'></div>
                        <div 
                            className='mx-[0.8rem] left-0 absolute top-[50%] translate-y-[-50%] 
                            h-[7px] bg-[var(--weak-red)] rounded'
                            style={{width: `${item.level}%`}}
                        ></div>
                        <div 
                            className='absolute w-[clamp(1rem,2.5%,2rem)] aspect-square bg-[var(--weak-red)] rounded-[50%] flex items-center justify-center'
                            style={{left:`${item.level+1}%`}}
                            
                        >
                            <div className='w-[clamp(0.6rem,50%,1.5rem)] aspect-square bg-[var(--elipse-small)] rounded-[50%]'></div>
                        </div>
                    </div>
                </li>
            ))}
            </ul>

        </div>
    )
}

export default function About() {
    const skills=[
        {skill:"Front-End",level:80},
        {skill:"Problem Solving",level:90},
        {skill:"UI/UX Design",level:85}
    ]
  return (
    <section id='About' className='pb-[2rem] gap-[2rem] flex flex-col'>
        {/*mobile version */}
        <div className='flex flex-col gap-[1rem] lg:hidden px-[1rem]'>
            <h1 className='text-[var(--strong-red)] font-bold text-[clamp(36px,4.6vh,55px)]'>About Me</h1>
            <h2 className='font-bold text-[clamp(24px,3.2vh,42px)]'>I am Ayoub Benaziza,</h2>
            <p className='font-bold text-[clamp(18px,2.45vh,35px)]'>a frontend developer and UI/UX designer driven by curiosity and precision. I’m building the skills today that will shape the products of tomorrow.</p>

        </div>
        <SkillBar mobile={true} skills={skills}/>
            
        {/*laptop version */}
        <h1 className='px-[2rem] text-[var(--strong-red)] font-bold text-[clamp(36px,4.6vh,55px)] hidden lg:block'>About Me</h1>
        <div className='lg:flex px-[1rem] hidden gap-[5rem]'>
            <div className='w-[40%] flex flex-col gap-[1rem] justify-center'>
                <h2 className='font-bold text-[clamp(24px,3.2vh,42px)] text-center'>I am Ayoub Benaziza,</h2>
                <p className='font-bold text-[clamp(18px,2.45vh,35px)] text-center'>a frontend developer and UI/UX designer driven by curiosity and precision. I’m building the skills today that will shape the products of tomorrow.</p>
            </div>

            <SkillBar mobile={false} skills={skills}/>
        

        </div>

        <p className='font-bold text-[clamp(22px,2.6vh,35px)] px-[1rem] text-center'>My goal is simple, design better, build smarter, and keep moving forward !</p>
        


      
    </section>
  )
}
