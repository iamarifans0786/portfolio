import React from 'react'
import Link from 'next/link'
import { AiFillGithub } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa6'
import { GrInstagram } from 'react-icons/gr'
import { SiSkypeforbusiness } from 'react-icons/si'

const Links = () => {
    return (
        <>
            <ul className='flex flex-row md:flex-col gap-4 text-2xl lg:text-3xl'>
                <li className='hover:text-[#8fab3a]'><Link href='https://github.com/iamarifans0786'><AiFillGithub /></Link> </li>
                <li className='hover:text-[#8fab3a]'><Link href='https://www.linkedin.com/in/arif-ansari-865240250/'><FaLinkedinIn /></Link> </li>
                <li className='hover:text-[#8fab3a]'><Link href='https://www.instagram.com/__a_r_i_f__/?igshid=NzZlODBkYWE4Ng%3D%3D'><GrInstagram /></Link> </li>
                <li className='hover:text-[#8fab3a]'><Link href='https://www.facebook.com/people/Arif-Ansari/pfbid02hzqjUUkGqwwzN9AG2hwVbeoGncCS1ARqubGquFyrtiL5tKhGTebbZ4doKN9arWNal/?mibextid=ZbWKwL'><SiSkypeforbusiness /></Link> </li>
            </ul>
        </>
    )
}

export default Links;