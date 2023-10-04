import SectionDivider from '@/Components/SectionDivider'
import React from 'react'
import Ecommerce from './Ecommerce'
import GoFood from './GoFood'
import Weather from './Weather'

const Project = () => {
  const props = {
    title: "Work",
    subTitle: 'Recent Projects'
  }
  return (
    <>
      <SectionDivider title={props.title} subTitle={props.subTitle} />
      <div className='flex flex-col lg:flex-row gap-8 items-center md:mx-16 md:justify-evenly'>
        <Ecommerce/>
        <GoFood/>
        <Weather/>
      </div>
    </>
  )
}

export default Project;