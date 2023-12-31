import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const DynamicType = () => {
    return (
        <>
            <div className='text-2xl text-[#8fab3a] font-semibold mt-7 md:text-[28px] dynamic-type'>
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



