import Link from 'next/link'
import React from 'react'
import "@/styles/globals.scss"

const Deploying = () => {
    return (
        <div className='w-12/12 h-screen bg-black mx-auto py-10 flex flex-col justify-start items-center'>
            <h1 className='font-bold text-xl text-center mb-3 text-orange-600'>Извините, на данный момент эта страница на разработке!</h1>
            <p className='italic text-gray-500 mb-3'>Вернитесь на главную старницу</p>
            <Link href='/' className="py-2 px-4 bg-orange-600 rounded-xl text-white font-bold ">Главная</Link>
        </div>
        )
}

export default Deploying