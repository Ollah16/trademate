'use client'
import React from 'react'
import { NavBrand } from '../components/navbar/navbrand'
import { useDispatch, useSelector } from 'react-redux'
import { changeUserType } from '../reduxtoolkit/userSlice'

const AuthNav = () => {
    const { userType, isUserTypeClicked } = useSelector(state => state.user)
    const dispatch = useDispatch()

    return (
        <div className='px-2 border-b py-3 h-16 fixed left-0 right-0 top-0 bg-white flex justify-between items-center'>
            <NavBrand />
            <div>
                {isUserTypeClicked ?
                    userType === 'contractor' ?
                        <p className='text-sm'><span>Here to hire contractor?</span>
                            <button className='text-green-600 ml-2' onClick={() => dispatch(changeUserType('client'))}> Join as a client</button></p>
                        :
                        <p className='text-sm'><span>Looking for contract?</span>
                            <button className='text-green-600 ml-2' onClick={() => dispatch(changeUserType('contractor'))}> Apply as a contractor</button></p>
                    :
                    ''}
            </div>
        </div >
    )
}

export default AuthNav
