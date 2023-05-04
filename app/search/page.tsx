"use client";
import Deploying from '@/components/Deploying'
import { useParams } from 'next/navigation';
import React from 'react'

const SearchResult = () => {
    const params = useParams()
    console.log(params)
  return (
    <Deploying/>
  )
}

export default SearchResult