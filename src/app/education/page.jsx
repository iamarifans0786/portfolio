import SectionDivider from '@/Components/SectionDivider'
import React from 'react'
import Graduation from './Graduation'
import Intermediate from './Intermediate'
import Skilledge from './Skilledge'
import ComsoInfo from './ComsoInfo'

const Education = () => {
    const props = {
        title: "Qualification",
        subTitle: 'Professional',
        title1: "Qualification",
        subTitle1: "Traing & Certificate"
    }
    return (
        <>
            <SectionDivider title={props.title} subTitle={props.subTitle} />
            <div className='flex justify-evenly lg:flex-row flex-col gap-4 lg:mx-12 mx-0 items-center p-0'>
                <Graduation />
                <Intermediate />
            </div>
            <span className='mt-20 block'> <SectionDivider title={props.title1} subTitle={props.subTitle1} /></span>
            <div className='flex justify-evenly lg:flex-row flex-col gap-4 lg:mx-12 mx-0 items-center p-0'>
                <Skilledge />
                <ComsoInfo />
            </div>


        </>
    )
}

export default Education