'use client'
import React from 'react'
import { NavBrand } from '../components/navbar/navbrand'
import Anylogin from './signup/logintype'
import LoginLink from './signup/loginlinktag'
import { useSelector } from 'react-redux'


const AuthNav = () => {
    const { isUserTypeClicked } = useSelector(state => state.user)

    return (
        <div className='px-2 border-b py-3 h-16 fixed left-0 right-0 top-0 bg-white flex justify-between items-center'>
            <NavBrand />
            <div className='hidden md:block'>
                <Anylogin />
            </div>
            <div className='block md:hidden'>
                {isUserTypeClicked && <LoginLink />}
            </div>

        </div >
    )
}

export default AuthNav
