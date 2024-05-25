'use client'

import styles from '../authenticate.module.css'
import PseudoOr from '../signup/pseudoOr'
import { SiApple } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import Link from 'next/link';
import { CiUser } from "react-icons/ci";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeUserType, selectUserType } from '@/app/reduxtoolkit/userSlice';
import LoginFooter from './loginfooter';

const AuthenticatePage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        handleSwitchReset()
    })

    const handleSwitchReset = () => {
        dispatch(selectUserType(false))
        dispatch(changeUserType(''))
    }

    return (
        <div className={`${styles.main} flex flex-col items-center justify-center py-10`}>
            <div className='rounded-xl border-2 md:w-8/12 w-10/12 md:p-10 p-2 lg:w-[510px] my-10'>
                <div className='md:px-5 px-2 my-5'>

                    <h3 className='mb-5 text-xl text-center font-semibold md:text-2xl'>Login to ProExchange</h3>

                    <div className='flex flex-col gap-5'>
                        <span className='relative flex items-center'>
                            <CiUser className='absolute left-1' />
                            <input placeholder='Username or Email' className="border-2 placeholder:text-sm rounded-md w-full block h-10 focus:outline-black/30 pl-6 px-2" />
                        </span>
                        <button className='w-full rounded-md bg-green-700 hover:bg-green-600 transition-colors duration-200 ease-in-out text-white h-10'>Proceed</button>
                        <PseudoOr />
                        <button className='rounded-3xl flex justify-between h-fit items-center text-white text-base bg-blue-500 hover:bg-blue-600 duration-150 ease-in-out transition-colors'>
                            <span className='rounded-full bg-white p-1'><FcGoogle className='text-2xl' /></span>
                            <span>Continue with Google</span>
                            <span></span>
                        </button>
                        <button className='rounded-3xl flex border-2 justify-between h-fit items-center bg-white/20 hover:bg-gray-600/20 duration-150 ease-in-out transition-colors'>
                            <span className='rounded-full bg-white p-1'><SiApple className='text-2xl' /></span>
                            <span>Continue with Apple</span>
                            <span></span>
                        </button>
                    </div>

                    <div className='flex flex-col gap-5 items-center mt-20'>
                        <span className={`flex items-center text-xs justify-center gap-2 w-full px-3
            before:inline-block before:content-[''] before:md:w-2/12 before:w-1/12 before:bg-black/20 before:h-[.5px] 
            after:inline-block after:content-[''] after:md:w-2/12 after:w-1/12 after:bg-black/20 after:h-[.5px]`}>
                            Dont have a ProExchange Account?
                        </span>

                        <Link href={'/signup'} className='border-2 border-green-700 px-5 py-2 md:w-4/12 text-center rounded-xl hover:bg-gray-100 transition-colors ease-in-out duration-200'>
                            Sign Up
                        </Link>
                    </div>

                </div>
            </div>

            <LoginFooter />
        </div >
    )
}

export default AuthenticatePage