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