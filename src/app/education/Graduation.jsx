import React from 'react'
import Image from 'next/image'
import Bbdicon from '@/Assets/bbd.png'

const Graduation = () => {
    return (
        <>
            <div data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="800"
            className='shadow-lg w-[90%] mx-auto lg:mx-0 lg:w-[45%] p-5 flex flex-col justify-center'>
                <div>
                    <h1 className='text-[18px] md:text-[20px] font-semibold text-gray-900'>Instution</h1>
                    <span className='flex justify-left items-center ml-2 mt-1'>
                        <Image src={Bbdicon} alt='pic' width={35} />
                        <h1 className='ml-2 font-semibold text-[15px] md:text-[18px] text-gray-500'>Babu Banarasi Das University, Lucknow</h1>
                    </span>
                </div>
                <div className='my-2'>
                    <h1 className='text-[18px] md:text-[20px] font-semibold text-gray-900'>Degree Obtained  </h1>
                    <span>
                        <h1 className='ml-2 font-semibold text-[15px] md:text-[18px] text-gray-500'>Bachelor of Computer Application (BCA)</h1>
                    </span>
                </div>
                <div>
                    <h1 className='text-[18px] md:text-[20px] font-semibold text-gray-900'>Major  </h1>
                    <span>
                        <h1 className='ml-2 font-semibold text-[15px] md:text-[18px] text-gray-500'>Compter Application (CS)</h1>
                    </span>
                </div>
                <div className='my-2'>
                    <h1 className='text-[18px] md:text-[20px] font-semibold text-gray-900'>Graduation Date</h1>
                    <span>
                        <h1 className='ml-2 font-semibold text-[15px] md:text-[18px] text-gray-500'>2018 - 2021</h1>
                    </span>
                </div>
            </div>
        </>
    )
}

export default Graduation