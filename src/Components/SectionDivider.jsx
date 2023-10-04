import React from 'react'

const SectionDivider = ({title,subTitle}) => {
    return (
        <>
        <div className='text-center mb-10 md:mb-16'>
            <h1 className='text-4xl font-bold my-2'>{title}</h1>
            <div className='border-t-4 mt-1 mx-auto border-double w-[200px] border-[#8fab3a]'></div>
            <p className='text-xl'>{subTitle}</p>
        </div>
        </>
    )
}

export default SectionDivider