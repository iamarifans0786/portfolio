import React from 'react'
import { HiOutlineMail } from 'react-icons/hi'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Link from 'next/link'

const Email = () => {
    return (
        <>
            <div className=' flex flex-col shadow-lg w-[90%] lg:w-[70%] p-2'>
                <span className='flex justify-center text-4xl pt-2'> <HiOutlineMail /></span>
                <h1 className='text-xl font-semibold my-2 text-gray-500'>Email</h1>
                <p className='text-[15px] font-semibold text-gray-500'>arifansari739878@gmail.com</p>
                <div className='mt-8 pb-6'>
                    <Link href='mailto:arifansari739878@gmail.com' className='text-[15px] py-3 px-5 rounded-2xl my-auto bg-black font-medium hover:duration-500 hover:bg-[#8fab3a] text-white'>
                        <span> Write Mail <AiOutlineArrowRight className='inline text-xl ml-2' /></span>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Email