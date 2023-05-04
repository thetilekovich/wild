import Image from 'next/image'
import React from 'react'
import plc from '@/public/images/1000x200.png'
import SectionHeader from '../SectionHeader'
const HomePopulars = () => {
    return (
        <section className=''>
            <div className='hidden md:block'>

            </div>
            <div className='block md:hidden bg-mobile-content py-5'>
                <div className='mx-auto' style={{ width: '95%' }}>
                    <Image src={plc} alt="" className='rounded-lg mb-4'/>
                    <div>
                        <SectionHeader title='Популярные' url='/populars'/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomePopulars