import React from 'react'
import Image from 'next/image'
import Skilledgeicon from '@/Assets/skilledge.png'

const Skilledge = () => {
    return (
        <>
            <div className='shadow-lg w-[90%] mx-auto lg:mx-0 lg:w-[45%] p-5 flex flex-col justify-center'>
                <div>
                    <h1 className='text-[18px] md:text-[20px] font-semibold text-gray-900'>Instution</h1>
                    <span className='flex justify-left items-center ml-2 mt-1'>
                        <Image src={Skilledgeicon} alt='pic' width={35} />
                        <h1 className='ml-2 font-semibold text-[15px] md:text-[18px] text-gray-500'>SKILLEDGE 4.0 Edutech Pvt. Ltd</h1>
                    </span>
                </div>
                <div className='my-2'>
                    <h1 className='text-[18px] md:text-[20px] font-semibold text-gray-900'>Degree Obtained  </h1>
                    <span>
                        <h1 className='ml-2 font-semibold text-[15px] md:text-[18px] text-gray-500'>Full Stack Development</h1>
                    </span>
                </div>
                <div>
                    <h1 className='text-[18px] md:text-[20px] font-semibold text-gray-900'>Major  </h1>
                    <span>
                        <h1 className='ml-2 font-semibold text-[15px] md:text-[18px] text-gray-500'>Web Development</h1>
                    </span>
                </div>
                <div className='my-2'>
                    <h1 className='text-[18px] md:text-[20px] font-semibold text-gray-900'>Course Duration</h1>
                    <span>
                        <h1 className='ml-2 font-semibold text-[15px] md:text-[18px] text-gray-500'>6 Month</h1>
                    </span>
                </div>
            </div>
        </>
    )
}

export default Skilledge