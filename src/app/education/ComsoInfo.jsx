import React from 'react'
import Image from 'next/image'
import Cosmoicon from '@/Assets/cosmo.png'

const ComsoInfo = () => {
    return (
        <>
            <div className='shadow-lg w-[90%] mx-auto lg:mx-0 lg:w-[45%] p-5 flex flex-col justify-center'>
                <div>
                    <h1 className='text-[18px] md:text-[20px] font-semibold text-gray-900'>Instution</h1>
                    <span className='flex justify-left items-center ml-2 mt-1'>
                        <Image src={Cosmoicon} alt='pic' width={35} />
                        <h1 className='ml-2 font-semibold text-[15px] md:text-[18px] text-gray-500'>Cosmo Info Solutions, Lucknow</h1>
                    </span>
                </div>
                <div className='my-2'>
                    <h1 className='text-[18px] md:text-[20px] font-semibold text-gray-900'>Degree Obtained  </h1>
                    <span>
                        <h1 className='ml-2 font-semibold text-[15px] md:text-[18px] text-gray-500'>Android Technology/Frontend Developer</h1>
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
                        <h1 className='ml-2 font-semibold text-[15px] md:text-[18px] text-gray-500'>5 Months</h1>
                    </span>
                </div>
            </div>
        </>
    )
}

export default ComsoInfo