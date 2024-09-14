"use client"
import React, {useState} from 'react'
import { navlinks } from '../costants'

const Navbar = () => {
    const [activeLink, setActiveLink] = useState(null);

    return (
        <div className='fixed w-full bg-secondary h-[60px] flex flex-row justify-between px-10 ibm-plex-mono-light'>
            <div>
                Logo
            </div>

            <div className='flex flex-row jsutify-center items-center'>
                {navlinks.map((navlink, index) => (
                    <div className={`h-full w-[150px] text-tertiary flex items-center justify-center hover:bg-white cursor-pointer ${activeLink === index ? 'bg-white shadow-navlink z-10' : 'z-20'}`} 
                        onClick={() => setActiveLink(index)}
                        key={index}
                    >
                        {navlink.text}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Navbar