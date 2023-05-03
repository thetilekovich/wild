"use client";
import Deploying from '@/components/Deploying';
import { useAppSelector } from '@/store/hooks'
import React from 'react'

const BasketPage = () => {
    const { location } = useAppSelector(s => s.base)
    return (
        <Deploying/>
    )
}

export default BasketPage