import { useState } from "react";
import { LiaEyeSolid } from "react-icons/lia";
import { LiaEyeSlashSolid } from "react-icons/lia";
import Anylogin from './logintype'
import LoginAlt from './loginalternative'
import { useSelector } from "react-redux";
import Link from "next/link";

const AuthInputs = () => {
    const { userType } = useSelector(state => state.user);
    const [viewPassword, setViewPassword] = useState(false)
    const emailLabel = userType === 'client' ? 'Work email address' : 'Email'
    const helpfulEmails = userType === 'client' ? 'Send me emails with tips on how to find talent that fits my needs.' : 'Send me helpful emails to find rewarding work and job leads.'


    return (
        <div className="flex flex-col items-center gap-3 w-full">

            <div className="flex gap-5 items-center w-full">
                <span className="flex flex-col gap-1 w-6/12">
                    <label htmlFor="firstName">First Name</label>
                    <input id="firstName" className="border-2 rounded-md w-full block h-10 focus:outline-black/30 px-2" />
                </span>

                <span className="flex flex-col gap-1 w-6/12">
                    <label htmlFor="firstName">Last Name</label>
                    <input id="lastName" className="border-2 rounded-md w-full block h-10 focus:outline-black/30 px-2" />
                </span>
            </div>

            <span className="w-full flex flex-col gap-2">
                <label htmlFor="email">{emailLabel}</label>
                <input id="email" className="border-2 px-2 py-3 h-10 rounded-md w-full text-sm focus:outline-black/30" />
            </span>

            <span className="w-full flex flex-col gap-2">
                <label htmlFor="password">Password</label>
                <span className="relative flex items-center">
                    <input
                        type={`${viewPassword ? 'text' : 'password'}`}
                        id="password"
                        placeholder="Password (8 or more characters)"
                        required
                        minLength="8"
                        className="border-2 px-2 py-3 text-sm h-10 rounded-md w-full placeholder:text-sm focus:outline-black/30"
                        autoComplete="off" />

                    <button onClick={() => setViewPassword(prev => !prev)} className="absolute right-1 bottom-auto">
                        {viewPassword ?
                            <LiaEyeSlashSolid className="text-2xl text-gray-600" /> :
                            <LiaEyeSolid className="text-2xl text-gray-600" />}
                    </button>
                </span>
            </span>

            <span className="w-full flex flex-col gap-2">
                <label htmlFor="country">Country</label>
                <select id="country" className="border-2 px-2 py-1 h-10 rounded-md w-full text-sm focus:outline-black/30">
                    <option>United Kingdom</option>
                </select>
            </span>

            <span className="flex flex-col gap-2 py-2">
                <p className="flex gap-4 items-center md:text-base text-xs">
                    <span>
                        <input type="checkbox" className="inline-block h-5 w-5" />
                    </span>
                    <span>{helpfulEmails}</span>
                </p>

                <p className="flex gap-4 items-center md:text-base text-xs">
                    <span>
                        <input type="checkbox" className="inline-block h-5 w-5" />
                    </span>
                    <span>Yes, I understand and agree to the <Link href={'/'} className="underline text-green-600 hover:text-green-600/90 transition-colors duration-200 ease-in-out">ProExchange Terms of Service</Link>, including the <Link href={'/'} className="underline text-green-600 hover:text-green-600/90 transition-colors duration-200 ease-in-out">User Agreement</Link> and <Link href={'/'} className="underline text-green-600 hover:text-green-600/90 transition-colors duration-200 ease-in-out">Privacy Policy.</Link></span>
                </p>
            </span>

            <button className="bg-green-700 px-4 block py-2 rounded-3xl text-white font-semibold hover:bg-green-600 transition-colors duration-200 ease-in-out mt-5">Create my profile</button>

            <div className="md:block hidden">
                <LoginAlt />
            </div>

            <div className="md:hidden block">
                <Anylogin />
            </div>

        </div>
    )
}

export default AuthInputs
