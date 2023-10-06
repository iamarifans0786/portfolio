import React from 'react'

const SectionDivider = ({ title, subTitle }) => {
    return (
        <>
            <div data-aos="zoom-out" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="800"
            className='section-devider-custome'>
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