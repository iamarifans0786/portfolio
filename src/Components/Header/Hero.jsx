'use client'
import React, { useEffect } from 'react';
import Inroduction from './Inroduction';
import Links from './Links';
import AOS from '@/utils/aos';


const Hero = () => {
    useEffect(() => {
        AOS.refresh();
    }, [])
    return (
        <>
            <div className='custom-hero-css flex flex-col-reverse lg:flex-row justify-center items-center lg:justify-evenly lg:my-10'>
                <div className='img-sec text-center profile_pic'>
                </div>
                <div className='hero-content-sec'>
                    <div className=''>
                        <Links />
                    </div>
                    <div className='' data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="700">
                        <Inroduction />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;