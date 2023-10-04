import SectionDivider from '@/Components/SectionDivider'
import React from 'react'
import Frontend from './Frontend'
import Backend from './Backend'


const Skill = () => {
  const props = {
    title: "Skills",
    subTitle: 'Technical'
  }
  return (
    <>
      <SectionDivider title={props.title} subTitle={props.subTitle} />
      <div className='flex flex-col md:flex-row gap-4 items-center md:justify-evenly'>
        <Frontend />
        <Backend />
      </div>
    </>
  )
}

export default Skill