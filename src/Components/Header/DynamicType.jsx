import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const DynamicType = () => {
    return (
        <>
            <div className='text-2xl text-[#8fab3a] font-semibold md:text-[28px] mt-10'>
                <Typewriter
                    words={[
                        'Full Stack Developer',
                        'Frontend Developer',
                        'Backend Developer']}
                    loop={10000}
                    cursor
                    cursorStyle='_'
                    typeSpeed={100}
                    deleteSpeed={140}
                    delaySpeed={2000}
                />
            </div>
        </>
    )
}

export default DynamicType;



