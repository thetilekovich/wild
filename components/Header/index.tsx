'use client';
import React from 'react';
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
import MessageIcon from '@/public/icons/MessageIcon';


const Header = () => {
    const { location, auth } = useAppSelector(s => s.base)
    const [searchInputValue, setSearchInputValue] = useState('')


    return (
        <header id='header'>
            <div className='desktop-header hidden md:block mx-auto mb-10' style={{ width: '95%' }}>
                <div className='flex items-center justify-between md:mb-7'>
                    <div className='flex items-center'>
                        <WalletDropdown />
                        <Link
                            href='/map'
                            className='flex items-center ml-5'>
                            <Image src={locationIcon} width={20} alt="" />
                            <p className='mx-2 text-gray-500'>{location.city}</p>
                        </Link>
                    </div>
                    <div>
                        <Link href='become-a-seller' className='bg-blue-600 py-1 text-white rounded-md px-3'>Стать продавцом</Link>
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
                            <nav className='hidden md:flex'>
                                <Link href="/login" className='mx-3 flex flex-col justify-center items-center'>
                                    <Person size={20} />
                                    <p className='text-lg'>Войти</p>
                                </Link>
                                {
                                    auth ?
                                        <Link href="/favorites" className='mx-3 flex flex-col justify-center items-center' >
                                            <Heart size={20} />
                                            <p className='text-lg'>Избранное</p>
                                        </Link>

                                        : null
                                }
                                <Link href="basket" className='mx-3 flex flex-col justify-center items-center'>
                                    <Basket size={20} />
                                    <p className='text-lg'>Корзина</p>
                                </Link>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className='flex lg:hidden mt-5 items-center justify-center'>
                    <input
                        value={searchInputValue}
                        onChange={(e) => setSearchInputValue(e.target.value)}
                        className='w-full rounded-l-md outline-none text-xl border-2 border-blue-600 border-solid text-black px-7 py-2'
                        type="search" placeholder='Я ищу...' name="header-search-input" id="header-search-input" />
                    <Link href={{ pathname: '/search', query: { resultOf: searchInputValue } }} className='bg-blue-600 py-[10px] px-5 text-xl text-white font-bold rounded-r-md'>Искать</Link>
                </div>
            </div>
            <div className='mobile-header md:hidden text-white'>
                <div className='w-full flex items-center mb-2 mx-auto' style={{ width: '95%' }}>
                    <input
                        placeholder='Искать здесь...'
                        className='w-11/12 mx-auto bg-mobile-content py-1 px-5 outline-none rounded-2xl placeholder-gray-500'
                        type="search" value={searchInputValue} onChange={(e) => setSearchInputValue(e.target.value)} />
                    <Link href='/feedback'>
                        <MessageIcon size={20} />
                    </Link>
                </div>
                <div className='bg-mobile-content'>
                    <div className='mx-auto flex justify-between items-center py-1' style={{width: '90%'}}>
                        <p className=' text-white italic border-b-1 border-b pr-3 pb-1 border-b-solid border-gray-500'>Ваш город: <Link href='/map' className='text-blue-400'>{location.city}</Link></p>
                        <Link href='/news' className='font-bold bg-blue-600 px-2 rounded-sm text-sm uppercase'>новости</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header