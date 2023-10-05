import React from 'react'

const SectionDivider = ({ title, subTitle }) => {
    return (
        <>
            <div className='section-devider-custome'>
                <div className='text-center mb-10 md:mb-16'>
                    <h1 className='text-3xl md:text-4xl font-bold'>{title}</h1>
                    <div className='section-devider-line'></div>
                    <p className='text-xl'>{subTitle}</p>
                </div>
            </div>
        </>
    )
}

export default SectionDivider