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
            <div className='nav_container'>
                <div>
                    <Link href='/'><h1 className='text-3xl font-bold text-[#8fab3a]'>Portfolio</h1></Link>
                </div>
                <ul className='navBar'>
                    <li >
                        <Link href='/' className={`link ${pathName === '/' ? 'text-[#8fab3a] font-bold' : ''}`} >Home</Link>
                    </li>
                    <li >
                        <Link href='/skills' className={`link ${pathName === '/skills' ? 'text-[#8fab3a] font-bold' : ''}`}>Skills</Link>
                    </li>
                    <li >
                        <Link href='/education' className={`link ${pathName === '/education' ? 'text-[#8fab3a] font-bold' : ''}`}>Education</Link>
                    </li>
                    <li >
                        <Link href='/projects' className={`link ${pathName === '/projects' ? 'text-[#8fab3a] font-bold' : ''}`}>Projects</Link>
                    </li>
                    <li >
                        <Link href='/about' className={`link ${pathName === '/about' ? 'text-[#8fab3a] font-bold' : ''}`}>About</Link>
                    </li>
                    <li>
                        <Link href='/contact' className={`link ${pathName === '/contact' ? 'text-[#8fab3a] font-bold' : ''}`}>Contact</Link>
                    </li>
                </ul>
                <div className='menu-btn-container'>
                    {
                        toggle ? <button onClick={() => setToggle(!toggle)}><AiOutlineClose /></button>
                            :
                            <button onClick={() => setToggle(!toggle)}><AiOutlineMenu /></button>
                    }
                </div>

                {/* Responsive Menu  */}
                <ul className={`${toggle ? "responsive-menubar" : "responsive-menubar-hide"}`}>
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