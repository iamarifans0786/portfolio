import React from 'react'
import Image from 'next/image'
import { SiFrontendmentor } from 'react-icons/si'
import HtmlIcon from '@/Assets/html.png'
import CssIcon from '@/Assets/css.png'
import JavaScriptIcon from '@/Assets/javascript.png'
import BootstrapIcon from '@/Assets/bootstrap.png'
import ReactIcon from '@/Assets/react.png'
import NextIcon from '@/Assets/next.png'
import tailwindIcon from '@/Assets/tailwind.png'
import MuiIcon from '@/Assets/mui.png'

const Frontend = () => {
    return (
        <>
            <div className='shadow-lg p-4 pb-6 w-[100%] md:w-[40%]'>
                <h1 className='text-2xl text-center font-bold text-gray-900 mb-4'><span> <SiFrontendmentor className='inline mr-2 font-bold text-2xl' /> Frontend</span></h1>
                <div className='flex justify-center md:justify-evenly md:flex-row flex-col gap-1 mt-3 '>
                    <div className='flex w-[90%] mx-auto md:w-[50%] justify-left items-center overflow-hidden border-solid border-2 border-[#8fab3a] p-1'>
                        <Image src={ReactIcon} alt='pic' width={30} />
                        <div>
                            <h1 className='text-[15px] font-bold text-gray-500 ml-3'>React.js</h1>
                        </div>
                    </div>
                    <div className='flex w-[90%] mx-auto md:w-[50%] justify-left items-center overflow-hidden border-solid border-2 border-[#8fab3a] p-1'>
                        <Image src={NextIcon} alt='pic' width={30} />
                        <div>
                            <h1 className='text-[15px] font-bold text-gray-500 ml-3'>Next.js</h1>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center md:justify-evenly md:flex-row flex-col gap-1 mt-3 '>
                    <div className='flex w-[90%] mx-auto md:w-[50%] justify-left items-center overflow-hidden border-solid border-2 border-[#8fab3a] p-1'>
                        <Image src={tailwindIcon} alt='pic' width={30} />
                        <div>
                            <h1 className='text-[15px] font-bold text-gray-500 ml-3'>Tailwind CSS</h1>
                        </div>
                    </div>
                    <div className='flex w-[90%] mx-auto md:w-[50%] justify-left items-center overflow-hidden border-solid border-2 border-[#8fab3a] p-1'>
                        <Image src={MuiIcon} alt='pic' width={30} />
                        <div>
                            <h1 className='text-[15px] font-bold text-gray-500 ml-3'>Matarial UI</h1>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center md:justify-evenly md:flex-row flex-col gap-1 mt-3 '>
                    <div className='flex w-[90%] mx-auto md:w-[50%] justify-left items-center overflow-hidden border-solid border-2 border-[#8fab3a] p-1'>
                        <Image src={JavaScriptIcon} alt='pic' width={30} />
                        <div>
                            <h1 className='text-[15px] font-bold text-gray-500 ml-3'>JavaScript</h1>
                        </div>
                    </div>
                    <div className='flex w-[90%] mx-auto md:w-[50%] justify-left items-center overflow-hidden border-solid border-2 border-[#8fab3a] p-1'>
                        <Image src={BootstrapIcon} alt='pic' width={30} />
                        <div>
                            <h1 className='text-[15px] font-bold text-gray-500 ml-3'>Bootstrap</h1>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center md:justify-evenly md:flex-row flex-col gap-1 mt-3'>
                    <div className='flex w-[90%] mx-auto md:w-[50%] justify-left items-center overflow-hidden border-solid border-2 border-[#8fab3a] p-1'>
                        <Image src={HtmlIcon} alt='pic' width={30} />
                        <div>
                            <h1 className='text-[15px] font-bold text-gray-500 ml-3'>HTML5</h1>
                        </div>
                    </div>
                    <div className='flex w-[90%] mx-auto md:w-[50%] justify-left items-center overflow-hidden border-solid border-2 border-[#8fab3a] p-1'>
                        <Image src={CssIcon} alt='pic' width={30} />
                        <div>
                            <h1 className='text-[15px] font-bold text-gray-500 ml-3'>CSS3</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Frontend