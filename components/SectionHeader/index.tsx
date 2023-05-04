"use client";
import ShortArrow from '@/public/icons/Arrow';
import Link from 'next/link'
import React, { FC } from 'react'


interface SectionHeaderProps {
    title: string,
    url: string
}


const SectionHeader: FC<SectionHeaderProps> = ({title, url}) => {
  return (
    <Link href={url} className={` flex items-center justify-between`}>
        <h1 className='font-bold text-blue-600' style={{fontSize: '25px'}}>{title}</h1>
        <ShortArrow size={50}/>
    </Link>
  )
}

export default SectionHeader