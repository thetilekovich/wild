import React from 'react'
import 'swiper/scss';
import { Autoplay, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { homeBanner } from '@/public/data/homeBanner';
import Image from 'next/image';
import { homeWelcomeLinks } from '@/public/data/homeWelcomeLinks';
import Link from 'next/link';
import placeHolder from '@/public/images/200x200.png'

const params = {
    slidesPerView: 1,
    loop: true,
    clickable: false,
    pauseOnMouseEnter: true,
    autoplay: {
        delay: 3000,
        disableOnIteraction: false,
    }
}

const params1 = {
    slidesPerView: 4,
    loop: true,
    clickable: false,
    pagination: true,
    pauseOnMouseEnter: true,
    freeMode: true,
    autoplay: {
        delay: 4000,
        disableOnIteraction: false,
    },
    breakpoints: {
        450: {
            slidesPerView: 5,
        },
        575: {
            slidesPerView: 6,
        }
    }
}

const HomeWellcome = () => {
    return (
        <div className='bg-mobile-content md:bg-white mb-2'>
            <div className='mx-auto py-4' style={{ width: '95%' }}>
                <div className='mb-10'>
                    <Swiper
                        modules={[Autoplay, Pagination, A11y]}
                        {...params}
                    >
                        {
                            homeBanner.map(el => (
                                <SwiperSlide key={el.id}>
                                    <Image className='rounded-lg  border-solid border-2 w-full border-red-900' src={el.image} alt="" />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
                <div className='block md:hidden '>
                    <div className='mb-2'>
                        <Swiper {...params1} modules={[Autoplay]}>
                            {
                                homeWelcomeLinks.map(e => (
                                    <SwiperSlide key={e.id}>
                                        <Link href={e.url} className='flex px-2 flex-col text-center items-center justify-center'>
                                            <Image src={placeHolder} width={60} className='rounded-lg  border-solid border-2 w-full border-red-900' alt="" />
                                            <p className='font-semibold' style={{ fontSize: "12px" }}>{e.title}</p>
                                        </Link>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </div>
                <div className='hidden md:grid grid-cols-5 gap-5'>
                    {
                        homeWelcomeLinks.map(e => (
                            <Link key={e.id} href={e.url} className='flex flex-col justify-start text-center'>
                                <Image src={placeHolder} alt="" className='mb-2 w-full p-1  border-solid border-2 border-red-900 ' />
                                <p>{e.title}</p>
                            </Link>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default HomeWellcome