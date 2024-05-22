'use client'
import Link from "next/link"
import { useSelector } from "react-redux"


export const NavExpand = () => {

    const isNavExpanded = useSelector(state => state.nav.isNavExpanded)

    return (<div className={`${isNavExpanded ? 'right-0' : 'right-[-500px]'} md:hidden transition-right duration-500 min-h-screen fixed w-9/12`}>
        <Link href={'/'} className="px-1 py-2">Sign Up</Link>
    </div>)
}