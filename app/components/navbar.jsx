'use client'
import React from 'react'
import Link from "next/link"
import { FaBars } from 'react-icons/fa';
import {useState} from "react"
import { li } from 'framer-motion/client';
import {motion, AnimatePresence} from "framer-motion"
import { FaXmark } from 'react-icons/fa6';

export default function Navbar() {
    const navArr=["Home","About","Skills","Contact"];
    const [open,setOpen]=useState(false);

    const NavContent = ()=>(
        <ul className='flex h-full flex-col w-full  md:flex-row'>
            {navArr.map((section,ind)=>(
                <li 
                    key={`${section}-${ind}`}
                    className='h-[2rem] pl-[0.5rem] flex justify-start text-[var(--background)] w-full transition-all duration-300 hover:bg-[var(--weak-red)] md:justify-center md:pl-0 font-bold md:hover:bg-transparent'
                >
                    <a onClick={()=>setOpen(false)} href={`#${section}`} className='w-full h-full flex items-center md:w-[auto] md:drop-shadow-sm md:text-[1.8ch]'>{section}</a>
                </li>
            ))}

        </ul>
    )
  return (
    <header className='h-[5rem] flex items-center justify-center'>
        <div className='flex w-[88%] bg-[var(--strong-red)] h-[2.7rem] items-center rounded-[1.2rem] relative justify-between px-[0.7rem] shadow-[2px_2px_8px_1px_rgba(0,0,0,0.4)]'>
            <img 
                src="/yuu_logo 1.png" 
                alt="logo"
                className='h-[6rem] aspect-square translate-y-[-0.2rem]'
            />
            {/*nav bar on big screens*/}
            <nav className='hidden md:flex md:w-[70%]'><NavContent/></nav>

            {/*the mobile version ( burger menu) */}
            <button 
                className={`h-full flex md:hidden cursor-pointer text-[var(--background)] ${!open? 'text-[2.6ch]':'text-[3ch]'} ${open? 'translate-x-[0.1rem]':'translate-x-0'}`}
                onClick={()=>setOpen(!open)}
            >
                <div className='relative h-full w-[3ch]'>
                    <FaBars
                        className={`top-[50%] left-[50%] translate-[-50%] absolute transition-all duration-300 ${open? 'opacity-0 scale-[100%] rotate-90':'opacity-100 scale-[102%] rotate-0'}`}
                    />
                    <FaXmark
                        className={`top-[50%] left-[50%] translate-x-[calc(-50%+0.1rem)] translate-y-[-50%] absolute transition-all duration-300 text-[2.3ch] ${open? 'opacity-100 scale-[102%] rotate-90':'opacity-0 scale-[100%] rotate-0'}`}
                    />

                </div>
            </button>
            <AnimatePresence mode="wait">
                {open && 
                    <motion.nav 
                        className='overflow-y-hidden absolute top-0 w-[calc(98%-1.4rem)] absolute top-[100%] bg-[var(--strong-red)] left-[50%] translate-x-[-50%] md:hidden rounded-[0.5rem]'
                        initial={{height:"1rem", opacity:0, y:0}}
                        animate={{height:"8rem", opacity:1, y:"0.2rem"}}
                        exit={{height:"1rem",opacity:0, y:0}}

                    ><NavContent/></motion.nav>
                }

            </AnimatePresence>
        </div>

        
    </header>
  )
}
