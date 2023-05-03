"use client";
import React from 'react'
import Footer from '../Footer'
import Header from '../Header'

const LayoutComponent = ({children}: {children: React.ReactNode}) => {

  return (
    <div className='mx-auto py-2' style={{width: '93%'}}>
        <Header/>
            {children}
        <Footer/>
    </div>
  )
}

export default LayoutComponent