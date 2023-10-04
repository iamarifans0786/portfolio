import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import EcomImage from '@/Assets/weather1.png'
import { AiOutlineArrowRight } from 'react-icons/ai'
const Weather = () => {
    return (
        <>
            <div className='shadow-lg p-2 pb-6 w-[100%] lg:w-[40%]'>
                <div className='flex flex-col flex-wrap justify-center items-center gap-3'>
                    <div className=''>
                        <Image className=' rounded-2xl h-[180px]'  priority={true}  src={EcomImage} alt='pic' width={300} />
                    </div>
                    <h1 className='text-gray-500 font-bold text-[15px]'>Weather Forecast</h1>
                    <div className='my-2'>
                        <Link href='https://iamarifans0786.github.io/weatherapp.gihub.io/' className='text-[15px] py-2 px-5 rounded-2xl my-auto bg-black font-medium hover:duration-500 hover:bg-[#8fab3a] text-white'>
                            <span>Explore<AiOutlineArrowRight className='inline text-xl ml-2' /></span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Weather;