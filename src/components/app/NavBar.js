'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import LoginLinks from '@/components/app/LoginLinks'

const NavBar = () => {
    const navbarRef = useRef(null)

    const isScrolled = () => {
        return (
            document.body.scrollTop >= 75 ||
            document.documentElement.scrollTop >= 75
        )
    }

    const handleNavbarSticky = () => {
        if (navbarRef.current && isScrolled()) {
            navbarRef.current.classList.add('nav-sticky');
        } else if (navbarRef.current) {
            navbarRef.current.classList.remove('nav-sticky');
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleNavbarSticky)

        return () => {
            window.removeEventListener('scroll', handleNavbarSticky)
        }
    }, [])

    return (
        <>
            <header
                ref={navbarRef}
                id="navbar"
                className="light fixed top-0 inset-x-0 flex items-center z-40 w-full lg:bg-transparent bg-white transition-all py-5">
                <div className="container">
                    <nav className="flex justify-between items-center w-full">
                        <Link className="flex items-center" href="/">
                            <div className="w-12 h-auto">
                                <Image
                                    src="/logo.png"
                                    alt="Logo"
                                    width={50}
                                    height={15}
                                    priority
                                />
                            </div>
                            <span className="text-amber-400 font-bold text-lg">
                                Tech
                            </span>
                            <span className="text-black font-bold text-lg">
                                Razzi
                            </span>
                        </Link>
                        <LoginLinks />
                    </nav>
                </div>
            </header>
        </>
    )
}

export default NavBar
