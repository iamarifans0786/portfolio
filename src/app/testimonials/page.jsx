'use client'
import SectionDivider from '@/Components/SectionDivider';
import React from 'react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { ClientData } from './ClientData';

const Testimonial = () => {
    const props = {
        title: "Testimonials",
        subTitle: 'Client Review'
    }
    return (
        <>
            <SectionDivider title={props.title} subTitle={props.subTitle} />
            <div className="mySwiper shadow-lg w-[90%] md:w-[70%] p-6 mx-auto ">
                <Swiper
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {
                        ClientData ?
                            ClientData.map(({ id, image, name, position, massage }) => {
                                return (
                                    <SwiperSlide key={id}>
                                        <div className='flex justify-center items-center flex-col py-9 px-1'>
                                            <Image className='border-4 border-[#8fab3a] p-1 rounded-[50%] overflow-hidden' src={image} width={100} height={100} alt='pic' />
                                            <h1 className='text-2xl font-bold text-gray-700 my-2'>{name}</h1>
                                            <h2 className='text-[15px] font-semibold text-gray-700'>{position}</h2>
                                            <p className='text-[13px] font-semibold text-gray-500 my-2 text-center'>{massage}</p>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                            : null
                    }
                </Swiper>
            </div>
        </>
    )
}

export default Testimonial;