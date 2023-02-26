/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { BiSearch } from 'react-icons/bi'

export default function Navbar() {
  return (
    <div className='flex justify-between items-center sm:px-20 text-black h-[15vh]'>
      <div className='hidden sm:flex flex-[1] items-center h-[13vh] font-[500]'>
        <p className='lg:mr-14 h-max cursor-pointer'>Home</p>
        <p className='lg:mr-14 h-max cursor-pointer'>Product</p>
        <p className='lg:mr-14 h-max cursor-pointer'>Pages</p>
        <p className='lg:mr-14 h-max cursor-pointer'>Blog</p>
      </div>
      <div className='flex-[1] flex items-center gap-5'>
        <img src='assets/logo.png' alt='' className='h-[13vh]' />
        <div className='hidden sm:flex h-max p-2 items-center gap-2'>
          <BiSearch size={25} className='cursor-pointer' />
          <input className='p-2 text-sm w-[40vh] rounded-sm' type='text' name='search' placeholder='What are you looking for?' />
        </div>
      </div>
      <div className='flex h-[13vh] justify-end items-center gap-4'>
        <p className='font-[500] pr-2 border-r cursor-pointer'>Adi</p>
        <img src='assets/profile.png' alt='' className='w-[50px] h-[50px] cursor-pointer' /> 
      </div>
    </div>
  )
}
