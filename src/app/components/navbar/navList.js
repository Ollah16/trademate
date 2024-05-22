'use client'

import Link from "next/link"
import { useEffect, useRef } from "react"

export const NavList = () => {

    const navlist = [
        { title: 'Community', link: '/community' },
        { title: 'Support', link: '/support' },
        { title: 'Log In', link: '/login' },
        { title: 'Sign Up', link: '/signup' }
    ]

    const navListRef = useRef()
    const hoveringLiRef = useRef()

    useEffect(() => {
        const handleMouseOver = event => {
            if (event.target.tagName === 'LI') {
                const listItem = event.target;
                const dimensions = listItem.getBoundingClientRect();
                hoveringLiRef.current.style.left = `${dimensions.left}px`;
                hoveringLiRef.current.style.width = `${dimensions.width}px`;
                hoveringLiRef.current.style.height = `5px`;
            }
        };

        const handleMouseLeave = () => {
            hoveringLiRef.current.style.height = `0px`;
        };

        const navList = navListRef.current;

        navList.addEventListener('mouseover', handleMouseOver);
        navList.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            navList.removeEventListener('mouseover', handleMouseOver);
            navList.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <ul className="hidden md:flex gap-1 overflow-hidden h-full items-center" ref={navListRef}>
            {navlist.map((list, index) => {

                return (
                    <li key={index} className="cursor-pointer px-2 text-md">
                        <Link href={list.link}>{list.title}</Link>
                    </li>
                )
            })}
            <li className="absolute bottom-0 bg-black z-20 transition-left transition-height ease-in-out duration-300" ref={hoveringLiRef}></li>
        </ul>
    )
}