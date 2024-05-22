'use client'

import { handleExpandNav } from "@/app/reduxtoolkit/navSlice"
import { useDispatch, useSelector } from "react-redux"
import styles from './nav.module.css'

export const NavBurger = () => {
    const dispatch = useDispatch()
    const isNavExpanded = useSelector(state => state.nav.isNavExpanded)

    return (<button className="flex flex-col w-6 justify-center overflow-hidden gap-[2px] h-6 md:hidden relative" onClick={() => dispatch(handleExpandNav())}>
        <hr className={`bg-black h-1 w-6 rounded border-0 transition-transform duration-200 ease-in-out ${isNavExpanded && styles.rotateHrFor}`}></hr>
        <hr className={`bg-black h-1 w-5 rounded border-0 opacity-100 transition-opacity duration-200 ease-in-out ml-auto ${isNavExpanded && styles.adjustOpacity}`}></hr>
        <hr className={`bg-black h-1 w-6 rounded border-0 transition-transform duration-200 ease-in-out ${isNavExpanded && styles.rotateHrOpp}`}></hr>
    </button>)
}