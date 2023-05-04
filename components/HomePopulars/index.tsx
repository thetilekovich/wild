"use client";
import Image from 'next/image'
import React, { useEffect } from 'react'
import plc from '@/public/images/1000x200.png'
import SectionHeader from '../SectionHeader'
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchPopularProducts } from '@/store/actions/fetching/fetchPopularProducts';


const HomePopulars = () => {
    const dispatch = useAppDispatch()
    const { popular } = useAppSelector(s => s.products)

    useEffect(() => {
        dispatch(fetchPopularProducts())
    }, [])
    return (
        <section className=''>
            <div className='hidden md:block'>
                <div className='mx-auto' style={{ width: '95%' }}>
                    <Image src={plc} alt="" className='rounded-lg mb-8 border-solid border-2 border-red-800' />
                    <SectionHeader title='Популярные' url='/populars' />
                </div>
            </div>
            <div className='block md:hidden bg-mobile-content py-5'>
                <div className='mx-auto' style={{ width: '95%' }}>
                    <Image src={plc} alt="" className='rounded-lg border-solid border-2 border-red-800 mb-6' />
                    <SectionHeader title='Популярные' url='/populars' />
                    <div>
                        {
                            popular.map(el => (<div key={el.id} className='text-black'>{el.title}</div>))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomePopulars