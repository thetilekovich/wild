"use client";
import { WalletConsts } from '@/public/data/walletData';
import changeWallet from '@/store/actions/changeWallet';
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { IWalletConst } from '@/types/app';
import Image from 'next/image'
import React, { useState } from 'react'

const WalletDropdown = () => {
    const { wallet } = useAppSelector(s => s.base)
    const [dropdownShow, setDropdownShow] = useState(false)
    const dispatch = useAppDispatch();

    const handleClickWallet = (el: IWalletConst) => {
        dispatch(changeWallet(el))
        setDropdownShow(false)
    }

    return (
        <div>
            <div className={`absolute top-0 bottom-0 right-0 left-0 bg-gray-300 opacity-40 z-10 ${dropdownShow ? 'block' : "hidden"}`}></div>
            <div className='cursor-pointer'
            onMouseMove={() => setDropdownShow(true)}
            onMouseLeave={() => setDropdownShow(false)}
            onClick={() => setDropdownShow(true)}
            >
                <div
                    className='flex items-center py-2 relative z-20'>
                    <Image width={20} height={20} src={wallet.icon} alt="" />
                    <p className='mx-2 text-sm text-gray-500'>{wallet.id}</p>
                </div>
                <div className={`absolute top-15 rounded-lg bg-white px-4 py-3 z-20 ${dropdownShow ? 'block' : 'hidden'}`}>
                    <h3 className='px-2'>Выберите валюту</h3>
                    <ul className=''>
                        {
                            WalletConsts.map(el => (
                                <li
                                key={el.id}
                                onClick={() => handleClickWallet(el)}
                                className='flex items-center px-4 my-1 py-2 hover:bg-gray-100'>
                                    <Image src={el.icon} width={20} height={20} alt="" />
                                    <p className='text-gray-400 mx-2'>{el.id}</p>
                                    <p className='mx-2'>{el.title}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default WalletDropdown