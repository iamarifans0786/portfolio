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
                    loop={5}
                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
            </div>
        </>
    )
}

export default DynamicType;



