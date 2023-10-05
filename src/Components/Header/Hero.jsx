'use client'
import React from 'react';
import Inroduction from './Inroduction';
import Links from './Links';

const Hero = () => {
    return (
        <>
            <div className='custom-hero-css'>
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