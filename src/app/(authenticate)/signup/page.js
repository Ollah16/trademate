'use client'

import TypeCheck from './typecheck'
import styles from '../authenticate.module.css'
import AuthForm from './authForm'
import LoginAlt from './loginalt'
import { useDispatch, useSelector } from 'react-redux'
import { selectUserType } from '@/app/reduxtoolkit/userSlice'

const RegisterPage = () => {

    const { userType, isUserTypeClicked } = useSelector(state => state.user)
    const dispatch = useDispatch()

    const buttonFunc = userType ? userType === 'contractor' ? `Apply as a contractor` : 'Join as a Client' : 'Create Account'

    return (<main className={`${styles.main} ${!isUserTypeClicked && 'flex items-center bg-gray-300/20'}`}>

        <div className={`${isUserTypeClicked ? 'hidden' : 'flex'}
         gap-1 items-center justify-center w-full`}>

            <div className="flex flex-col items-center justify-between h-fit py-5 px-4 bg-white rounded-lg gap-5">

                <h3 className="text-3xl font-semibold text-center">Join as a client or contractor</h3>
                <TypeCheck />

                <button
                    disabled={userType ? false : true}
                    onClick={() => dispatch(selectUserType(!isUserTypeClicked))}
                    className={`rounded-3xl py-2 px-4 transition-colors duration-200 ease-in-out ${userType ? 'bg-green-700 hover:bg-green-600' : 'bg-gray-200'} text-white`}>
                    {buttonFunc}
                </button>

                <LoginAlt />

            </div>
        </div>

        <AuthForm />
    </main>)
}

export default RegisterPage
