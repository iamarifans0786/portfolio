'use client'
import React from 'react';
import Inroduction from './Inroduction';
import Links from './Links';

const Hero = () => {
    return (
        <>
            <div className='custom-hero-css py-20 overflow-hidden flex flex-col-reverse  gap-12 md:gap-10 md:flex-row flex-wrap items-center justify-center'>
                <div className='img-sec text-center profile_pic'>
                </div>
                <div className='link-sec'>
                    <Links />
                </div>
                <div className='intro-sec w-[100%] md:w-[40%]'>
                    <Inroduction />
                </div>
            </div>
        </>
    )
}

export default Hero;