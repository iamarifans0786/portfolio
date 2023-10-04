import Link from 'next/link';
import React from 'react'
import Links from './Links';
import { AiOutlineMessage } from 'react-icons/ai'
import DynamicType from './DynamicType';

const Inroduction = () => {
    return (
        <>
            <div>
                <div>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl text-center md:text-left font-bold'>Arif Ansari</h1>
                    <div className='md:hidden flex mt-5 justify-center '>
                        <Links />
                    </div>
                </div>
                <div className='text-2xl md:text-[28px] px-7 md:px-0 '>
                    <DynamicType />
                    <div className='text-[16px] md:text-lg mt-6'>
                        <h1 className='font-thin'>Web Developer dedicated to design and creative solutions.</h1>
                    </div>
                    <div className='mt-6'>
                        <Link href='#contact' className='text-[15px] py-5 px-9 rounded-2xl my-auto bg-black font-medium hover:duration-500 hover:bg-[#8fab3a] text-white'>
                            <span> Say Hello <AiOutlineMessage className='inline text-xl ml-2' /></span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Inroduction