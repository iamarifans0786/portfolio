import React from 'react'
import Image from 'next/image'
import AboutPic from '@/Assets/pic1.jpeg'

const ImageSection = () => {
  return (
    <>
      <div className='relative flex flex-col lg:flex-row justify-center'>
        <div className='w-[100%] lg:w-[40%] h-[350px] overflow-hidden flex justify-center items-center'>
          <Image className='md:hover:scale-105 duration-500 hover:opacity-80 hover:cursor-pointer text-center rounded-3xl' src={AboutPic} alt='pic' width={300} />
        </div>
        <div className='w-[100%] lg:w-[55%] font-semibold p-4 mt-4 text-gray-400'>
          <p>
            Welcome to my portfolio! I am Arif Ansari, a passionate and versatile
            Web Developer with a strong dedication to creativity, innovation, and excellence.
            Through the following pages, I invite you to explore my journey, skills, and the projects that define
            my professional identity.
          </p>
          <div className='mt-4'>
            <h1 className='text-gray-800 mt-6 text-lg'>My Philosophy -</h1>
            <p className='mt-2'>
              I believe in the power of collaboration and the value of continuous learning.
              I see each project as an opportunity to grow, both professionally and personally.
              My commitment to staying updated with industry trends and evolving technologies
              ensures that I can deliver cutting-edge solutions to my clients and partners.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ImageSection