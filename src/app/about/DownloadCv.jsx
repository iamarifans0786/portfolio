import React from 'react'
import Link from 'next/link';
// import CV from '@/Assets/cv.pdf'
import { AiOutlineDownload } from 'react-icons/ai'
const DownloadCv = () => {
    return (
        <>
            <div className='mt-12 text-center'>
                <Link href="/cv.pdf" download className='text-[15px] py-5 px-9 rounded-2xl my-auto bg-black font-medium hover:duration-500 hover:bg-[#8fab3a] text-white'>
                    <span> Download CV <AiOutlineDownload className='inline text-xl ml-2' /></span>
                </Link>
            </div>
        </>
    )
}

export default DownloadCv