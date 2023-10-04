'use client'
import React from 'react';
import Inroduction from './Inroduction';
import Links from './Links';

const Hero = () => {
    return (
        <>
            <div className='py-20 overflow-hidden flex flex-col-reverse  gap-12 md:gap-10 md:flex-row flex-wrap items-center justify-center'>
                <div className='text-center profile_pic'>
                </div>
                <div className='hidden md:flex'>
                    <Links />
                </div>
                <div className='w-[100%] md:w-[40%]'>
                    <Inroduction />
                </div>
            </div>
        </>
    )
}

export default Hero;