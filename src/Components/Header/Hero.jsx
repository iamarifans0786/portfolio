'use client'
import React from 'react';
import Inroduction from './Inroduction';
import Links from './Links';

const Hero = () => {
    return (
        <>
            <div className='custom-hero-css flex flex-col-reverse lg:flex-row justify-center items-center lg:justify-evenly lg:my-10'>
                <div className='img-sec text-center profile_pic'>
                </div>
                <div className='hero-content-sec'>
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