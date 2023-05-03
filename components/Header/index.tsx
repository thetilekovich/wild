'use client';
import { useAppSelector } from '@/store/hooks';
import Image from 'next/image';
import WalletDropdown from '../DropDowns/WalletDropdown';
import locationIcon from '@/public/icons/location.png'
import ProductCatalogs from '../ProductCatalogs';
import '@/styles/header.scss'
import { useState } from 'react';
import Link from 'next/link';
import Heart from '@/public/icons/Heart';
import Basket from '@/public/icons/Basket';
import Person from '@/public/icons/Person';



const Header = () => {
    const { location } = useAppSelector(s => s.base)
    const [searchInputValue, setSearchInputValue] = useState('')
    return (
        <header id='header'>
            <div className='flex items-center justify-between mb-7'>
                <div className='flex items-center'>
                    <WalletDropdown />
                    <button
                        onClick={() => { }}
                        className='flex items-center ml-5'>
                        <Image src={locationIcon} width={20} alt="" />
                        <p className='mx-2 text-gray-500'>{location.city}</p>
                    </button>
                </div>
                <div>
                    <button className='bg-blue-600 text-white rounded-md px-3'>Стать продавцом</button>
                </div>
            </div>
            <div className='flex items-start justify-between'>
                <div className='flex items-center'>
                    <ProductCatalogs />
                    <h1 className='mx-2 text-4xl font-bold'></h1>
                </div>
                <div className='flex items-center'>
                    <div className='mr-10 lg:block hidden '>
                        <input
                            value={searchInputValue}
                            onChange={(e) => setSearchInputValue(e.target.value)}
                            className=' w-[360px] xl:w-[600px] rounded-l-md outline-none text-xl border-2 border-blue-600 border-solid text-black px-7 py-2'
                            type="search" placeholder='Я ищу...' name="header-search-input" id="header-search-input" />
                        <button className='bg-blue-600 py-[10px] px-5 text-xl text-white font-bold rounded-r-md'>Search</button>
                    </div>
                    <div>
                        <nav className='flex'>
                            <Link href="/login" className='mx-3 flex flex-col justify-center items-center'>
                                <Person size={20} />
                                <p className='text-lg'>Войти</p>
                            </Link>
                            <Link href="/favorites" className='mx-3 flex flex-col justify-center items-center' >
                                <Heart size={20} />
                                <p className='text-lg'>Избранное</p>
                            </Link>
                            <Link href="basket" className='mx-3 flex flex-col justify-center items-center'>
                                <Basket size={20} />
                                <p className='text-lg'>Корзина</p>
                            </Link>
                        </nav>
                    </div>

                </div>

            </div>
            <div className='flex items-center justify-center'>
                <input
                    value={searchInputValue}
                    onChange={(e) => setSearchInputValue(e.target.value)}
                    className='w-full rounded-l-md outline-none text-xl border-2 border-blue-600 border-solid text-black px-7 py-2'
                    type="search" placeholder='Я ищу...' name="header-search-input" id="header-search-input" />
                <button className='bg-blue-600 py-[10px] px-5 text-xl text-white font-bold rounded-r-md'>Search</button>
            </div>
        </header>
    )
}

export default Header