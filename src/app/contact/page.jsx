'use client'
import SectionDivider from '@/Components/SectionDivider'
import React from 'react'
import Email from './Email'
import WhatsApp from './WhatsApp'
import Form from './Form'

const Contact = () => {
  const props = {
    title: "Let's Connect",
    subTitle: 'Get in Touch'
  }
  return (
    <>
      <SectionDivider title={props.title} subTitle={props.subTitle} />
      <div id='contact' className='flex justify-evenly items-center lg:flex-row gap-6 flex-col'>
        <div className='text-center w-[90%] md:w-[60%] lg:w-[45%] gap-6'>
          <h1 className='text-3xl my-6 font-bold'>Talk to me</h1>
          <div className='flex justify-center gap-8 items-center flex-col'>
            <Email />
            <WhatsApp />
          </div>
        </div>
        <div className=' w-[90%] md:w-[60%] lg:w-[45%] '>
          <Form/>
        </div>
      </div>
    </>
  )
}

export default Contact