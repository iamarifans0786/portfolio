import React from 'react'
import Image from 'next/image'
import Abicicon from '@/Assets/abic.jpg'

const Intermediate = () => {
    return (
        <>
            <div className='shadow-lg w-[90%] mx-auto lg:mx-0 lg:w-[45%] p-5 flex flex-col justify-center'>
                <div>
                    <h1 className='text-[18px] md:text-[20px] font-semibold text-gray-900'>Instution</h1>
                    <span className='flex justify-left items-center ml-2 mt-1'>
                        <Image src={Abicicon} alt='pic' width={35} />
                        <h1 className='ml-2 font-semibold text-[15px] md:text-[18px] text-gray-500'>Aditya Birla intermediate College, Sonebhadra, UP</h1>
                    </span>
                </div>
                <div className='my-2'>
                    <h1 className='text-[18px] md:text-[20px] font-semibold text-gray-900'>Degree Obtained  </h1>
                    <span>
                        <h1 className='ml-2 font-semibold text-[15px] md:text-[18px] text-gray-500'>intermediate</h1>
                    </span>
                </div>
                <div>
                    <h1 className='text-[18px] md:text-[20px] font-semibold text-gray-900'>Major  </h1>
                    <span>
                        <h1 className='ml-2 font-semibold text-[15px] md:text-[18px] text-gray-500'>Science (PCM)</h1>
                    </span>
                </div>
                <div className='my-2'>
                    <h1 className='text-[18px] md:text-[20px] font-semibold text-gray-900'>Passing Year</h1>
                    <span>
                        <h1 className='ml-2 font-semibold text-[15px] md:text-[18px] text-gray-500'>2018</h1>
                    </span>
                </div>
            </div>

        </>
    )
}

export default Intermediate