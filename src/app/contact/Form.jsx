import React from 'react'
import { AiOutlineSend } from 'react-icons/ai'
import { useRef } from 'react'
import emailjs from 'emailjs-com';

const Form = () => {
    const form = useRef()
    console.log(form)
    const sendMail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_imwungq', 'template_sbt16q1', form.current, 'MyeMj2eFmvXqe8giN')
        e.target.reset();
    }
    return (
        <>
            <form onSubmit={sendMail} ref={form}>
                <h1 className='text-3xl my-8 font-bold text-center'>What &sbquo;s the Project?</h1>
                <div>
                    <div className='relative flex my-8 md:my-12 justify-center items-center'>
                        <label className='absolute left-[45px] md:left-[115px] top-[-12px] bg-white px-1'> Name</label>
                        <input className='border-2 border-gray-400 hover:border-gray-300 hover:cursor-pointer focus:border-[#8fab3a] rounded-2xl md:w-[70%] w-[90%] py-4 px-4 md:py-5' type="text" name='name' placeholder='Enter your Name' required />
                    </div>
                    <div className='relative flex my-8 md:my-12 justify-center items-center'>
                        <label className='absolute left-[45px] md:left-[115px] top-[-12px] bg-white px-1'> Email</label>
                        <input className='border-2 border-gray-400 hover:border-gray-300 hover:cursor-pointer focus:border-[#8fab3a] rounded-2xl md:w-[70%] w-[90%] py-4 px-4 md:py-5' type="text" name='email' placeholder='Enter your Email' required />
                    </div>
                    <div className='relative flex my-8 md:my-12 justify-center items-center'>
                        <label className='absolute left-[45px] md:left-[115px] top-[-12px] bg-white px-1'> Project</label>
                        {/* <input className='border-2 border-gray-400 hover:border-gray-300 hover:cursor-pointer focus:border-[#8fab3a] rounded-2xl md:w-[70%] w-[90%]  py-4 px-4 md:py-5' type="text" placeholder='Provide some project details' required /> */}
                        <textarea className='border-2 border-gray-400 hover:border-gray-300 hover:cursor-pointer focus:border-[#8fab3a] rounded-2xl md:w-[70%] w-[90%]  py-4 px-4 md:py-5' type="text" name="project_details" placeholder='Provide some project details'
                            cols="30" rows="4"></textarea>
                    </div>
                    <div className='relative flex my-8 md:my-12 justify-center items-center'>
                        <button className='text-[17px] py-5 px-9 rounded-2xl my-auto bg-black font-medium hover:duration-500 hover:bg-[#8fab3a] text-white placeholder:mt-0'>
                            <span>Send Massage <AiOutlineSend className='inline text-lg ml-2' /></span>
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Form