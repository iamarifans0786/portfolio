'use client'
import React from 'react';
import Inroduction from './Inroduction';
import Links from './Links';

const Hero = () => {
    return (
        <>
            <div className='custom-hero-css flex flex-col-reverse lg:flex-row justify-center items-center lg:justify-evenly border-4 border-red-600 '>
                <div className='img-sec text-center profile_pic'>
                </div>
                <div className='hero-content-sec flex lg:flex-row flex-col justify-evenly items-center lg:w-[55%] w-90% border-2 border-blue-600 gap-6'>
                    <div className=''>
                        <Links />
                    </div>
                    <div className=''>
                        <Inroduction />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;