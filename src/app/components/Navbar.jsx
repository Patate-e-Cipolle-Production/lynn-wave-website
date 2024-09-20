"use client"
import React, { useState, useEffect } from 'react';
import { navlinks } from '../costants';
import Link from 'next/link';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState(null);

    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const options = {
            root: null, 
            threshold: 0.3 // Cambia navlink quando almeno il 30% della sezione è visibile
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = Array.from(sections).indexOf(entry.target);
                    setActiveLink(index); // Imposta il navlink attivo in base alla sezione visibile
                }
            });
        }, options);

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    return (
        <>
            <div className='fixed hidden w-full bg-secondary h-[60px] md:flex flex-row justify-between px-10 ibm-plex-mono-medium z-50'>
                <div>
                    Logo
                </div>

                <div className='flex flex-row items-center justify-center'>
                    {navlinks.map((navlink, index) => (
                        <div 
                            className={`h-full w-[150px] text-tertiary flex items-center justify-center hover:bg-white cursor-pointer ${activeLink === index ? 'bg-white shadow-navlink z-20' : 'z-10'}`} 
                            key={index}
                        >
                            <Link href={navlink.link} className='flex items-center justify-center w-full h-full unselectable' draggable={false}>
                                {navlink.text}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        
            <div className='w-full h-[55px] shadow-object-card flex flex-row items-center px-14 md:hidden fixed bottom-0 bg-secondary text-tertiary justify-between ibm-plex-mono-medium z-50 '>
            {navlinks.map((navlink, index) => (
                        <div 
                            className={`h-full w-[150px] text-tertiary flex items-center justify-center cursor-pointer ${activeLink === index ? 'bg-white shadow-navlink z-20' : 'z-10'}`} 
                            key={index}
                        >
                            <Link href={navlink.link} className='flex items-center justify-center w-full h-full unselectable' draggable={false}>
                                +
                            </Link>
                        </div>
                    ))}
            </div>
        </>
    );
};

export default Navbar;
