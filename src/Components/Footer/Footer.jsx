import Link from 'next/link'
import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa6'
import { GrInstagram } from 'react-icons/gr'
import { SiSkypeforbusiness } from 'react-icons/si'
import Logo from '@/Assets/footerlogo1.png'
import Image from 'next/image'

const Footer = () => {
  return (
    <>
      <div className='my-8'>
        <div className='w-full py-12 flex justify-evenly  flex-col text-center md:text-left gap-12 md:gap-0 md:flex-row '>
          <div className='flex items-center justify-center'>
            <Image priority={true} src={Logo} alt='icon' className='w-[250px] bg-transparent' />
          </div>
          <div>
            <h1 className='text-lg font-bold'>Important Links</h1>
            <ul className='text-gray-400 text-sm flex flex-wrap flex-col gap-3 mt-3'>
              <li><Link href='/projects'>Projects</Link> </li>
              <li><Link href='/skills'>Skills</Link> </li>
              <li><Link href='/education'>Qualification</Link> </li>
              <li><Link href='/about'>About</Link> </li>
              <li><Link href='/contact'>Contact</Link> </li>
            </ul>
          </div>
          <div>
            <h1 className='text-lg font-bold'>Let&sbquo;s Connect</h1>
            <ul className='flex gap-6 mt-3 justify-center'>
              <li className='text-center'><Link href='https://github.com/iamarifans0786'><AiFillGithub /></Link> </li>
              <li><Link href='https://www.linkedin.com/in/arif-ansari-865240250/'><FaLinkedinIn /></Link> </li>
              <li><Link href='https://www.instagram.com/__a_r_i_f__/?igshid=NzZlODBkYWE4Ng%3D%3D'><GrInstagram /></Link> </li>
              <li><Link href='https://www.facebook.com/people/Arif-Ansari/pfbid02hzqjUUkGqwwzN9AG2hwVbeoGncCS1ARqubGquFyrtiL5tKhGTebbZ4doKN9arWNal/?mibextid=ZbWKwL'><SiSkypeforbusiness /></Link> </li>
            </ul>
          </div>
        </div>
        <div>
          <h1 className='text-center'> ©2023 Arif Ansari. All rights reserved </h1>
        </div>
      </div>
    </>
  )
}

export default Footer