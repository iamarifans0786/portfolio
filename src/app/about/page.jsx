'use client'
import React, { useEffect } from 'react'
import ImageSection from './ImageSection'
import SectionDivider from '../../Components/SectionDivider'
import Experties from './Experties'
import DownloadCv from './DownloadCv'
import AOS from '@/utils/aos'

const About = () => {
  const props = {
    title: "About Me",
    subTitle: 'Introduction'
  }
  useEffect(() => {
    AOS.refresh()
  }, [])
  return (
    <>
      <div className='mx-6'>
        <SectionDivider title={props.title} subTitle={props.subTitle} />
        <ImageSection />
        <div data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="700"
          className=' mx-4 lg:mx-20 mt-8'>
          <h1 className='text-gray-800 mt-3 font-semibold text-lg'>Who I Am</h1>
          <p className='font-semibold mt-4 text-gray-400'>I am a firm believer that ones work is a reflection of their character and values. As such, I am committed to integrity, attention to detail, and a tireless pursuit of perfection in everything I do. My work is a testament to my unwavering dedication to craft and my deep-seated curiosity about the world around me.</p>
        </div>
        <div className='mx-4 lg:mx-20 mt-8'>
          <h1 className='text-gray-800 mt-3 font-semibold text-lg'>Experties </h1>
          <div>
            <Experties />
          </div>
        </div>
        <div>
          <DownloadCv />
        </div>
      </div>
    </>
  )
}

export default About