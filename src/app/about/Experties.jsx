import React from 'react'
import Image from 'next/image'
import AboutPic2 from '@/Assets/aboutimage2.png'
import {FaReact} from 'react-icons/fa'
import {SiTailwindcss} from 'react-icons/si'
import {FaPython} from 'react-icons/fa'

const ImageSection = () => {
    return (
        <>
            <div className='relative flex flex-col-reverse lg:flex-row gap-4 justify-center'>
                <div className='w-[100%] lg:w-[50%] flex flex-col gap-3 md:flex-row justify-evenly flex-wraps items-center'>
                    <div className='border-solid border-2 w-[164px] border-[#8fab3a] px-8 py-4 flex flex-col justify-center items-center '>
                        <FaReact className='text-[50px]' />
                        <h1 className='text-[#8fab3a] font-semibold text-[16px]'>React/Next</h1>
                        <p className='font-serif text-[15px] font-thin'>Client Side</p>
                    </div>
                    <div className='border-solid border-2 w-[164px] border-[#8fab3a] px-8 py-4 flex flex-col justify-center items-center '>
                        <SiTailwindcss className='text-[50px]' />
                        <h1 className='text-[#8fab3a] font-semibold text-[15px]'>Tailwind CSS</h1>
                        <p className='font-serif text-[15px] font-thin'>Framwork</p>
                    </div>
                    <div className='border-solid border-2 w-[164px] border-[#8fab3a] px-8 py-4 flex flex-col justify-center items-center '>
                        <FaPython className='text-[50px]' />
                        <h1 className='text-[#8fab3a] font-semibold text-[16px]'>Python</h1>
                        <p className='font-serif text-[15px] font-thin'>Server Side</p>
                    </div>
                </div>
                <div className='w-[100%] lg:w-[40%] h-[350px] overflow-hidden flex justify-center items-center'>
                    <Image className='md:hover:scale-105 duration-500 hover:opacity-80 hover:cursor-pointer text-center rounded-3xl' src={AboutPic2} alt='pic' width={300} />
                </div>
            </div>
        </>
    )
}

export default ImageSection