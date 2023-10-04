'use client'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { AiOutlineMenu } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'
const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const pathName = usePathname()
    return (
        <>
            <div className='w-full bg-white h-20 px-8 md:px-4 flex md:justify-evenly justify-between items-center top-0 sticky z-10'>
                <div>
                    <Link href='/'><h1 className='text-3xl font-bold text-[#8fab3a]'>Portfolio</h1></Link>
                </div>
                <ul className='hidden md:flex gap-7  text-gray-400 font-semibold'>
                <li className='hover:text-[#8fab3a]'>
                        <Link href='/' className={`link ${pathName === '/' ? 'text-[#8fab3a] font-bold' : ''}`} >Home</Link>
                    </li>
                    <li className='hover:text-[#8fab3a]'>
                        <Link href='/skills' className={`link ${pathName === '/skills' ? 'text-[#8fab3a] font-bold' : ''}`}>Skills</Link>
                    </li>
                    <li className='hover:text-[#8fab3a]'>
                        <Link href='/education' className={`link ${pathName === '/education' ? 'text-[#8fab3a] font-bold' : ''}`}>Education</Link>
                    </li>
                    <li className='hover:text-[#8fab3a]'>
                        <Link href='/projects' className={`link ${pathName === '/projects' ? 'text-[#8fab3a] font-bold' : ''}`}>Projects</Link>
                    </li>
                    <li className='hover:text-[#8fab3a]'>
                        <Link href='/about' className={`link ${pathName === '/about' ? 'text-[#8fab3a] font-bold' : ''}`}>About</Link>
                    </li>
                    <li className='hover:text-[#8fab3a]'>
                        <Link href='/contact' className={`link ${pathName === '/contact' ? 'text-[#8fab3a] font-bold' : ''}`}>Contact</Link>
                    </li>
                </ul>
                <div className='hover:text-[#8fab3a] md:hidden item-center pl-3 font-bold text-3xl'>
                    {
                        toggle ? <button onClick={() => setToggle(!toggle)}><AiOutlineClose /></button>
                            :
                            <button onClick={() => setToggle(!toggle)}><AiOutlineMenu /></button>
                    }
                </div>

                {/* Responsive Menu  */}
                <ul className={`top-[52px] ${toggle ? 'left-0' : 'left-[-100%]'} gap-5 duration-500 bg-black  text-white font-semibold absolute flex text-center pt-6 mt-[28px] flex-col h-screen w-3/4 md:hidden`}>
                    <li className='hover:text-[#8fab3a]'>
                        <Link href='/' className={`link ${pathName === '/' ? 'text-[#8fab3a] font-bold' : ''}`} >Home</Link>
                    </li>
                    <li className='hover:text-[#8fab3a]'>
                        <Link href='/skills' className={`link ${pathName === '/skills' ? 'text-[#8fab3a] font-bold' : ''}`}>Skills</Link>
                    </li>
                    <li className='hover:text-[#8fab3a]'>
                        <Link href='/education' className={`link ${pathName === '/education' ? 'text-[#8fab3a] font-bold' : ''}`}>Education</Link>
                    </li>
                    <li className='hover:text-[#8fab3a]'>
                        <Link href='/projects' className={`link ${pathName === '/projects' ? 'text-[#8fab3a] font-bold' : ''}`}>Projects</Link>
                    </li>
                    <li className='hover:text-[#8fab3a]'>
                        <Link href='/about' className={`link ${pathName === '/about' ? 'text-[#8fab3a] font-bold' : ''}`}>About</Link>
                    </li>
                    <li className='hover:text-[#8fab3a]'>
                        <Link href='/contact' className={`link ${pathName === '/contact' ? 'text-[#8fab3a] font-bold' : ''}`}>Contact</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navbar