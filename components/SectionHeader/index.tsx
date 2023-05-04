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
    <Link href={url} className={` flex justify-between`}>
        <p className='font-bold text-2xl text-blue-600'>{title}</p>
        <ShortArrow color='white' size={30}/>
    </Link>
  )
}

export default SectionHeader