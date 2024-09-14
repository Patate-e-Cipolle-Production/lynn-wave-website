"use client"
import React, { useState, useEffect } from 'react';
import { navlinks } from '../costants';
import Link from 'next/link';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            const options = {
                root: null, 
                threshold: 0.7 // Cambia navlink quando il 70% della sezione è visibile
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Array.from(sections).indexOf(entry.target);
                        setActiveLink(index); // Imposta il navlink attivo in base alla sezione visibile
                    }
                });
            }, options);

            sections.forEach((section) => {
                observer.observe(section);
            });

            return () => {
                sections.forEach((section) => {
                    observer.unobserve(section);
                });
            };
        };

        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='fixed w-full bg-secondary h-[60px] flex flex-row justify-between px-10 ibm-plex-mono-light z-50'>
            <div>
                Logo
            </div>

            <div className='flex flex-row justify-center items-center'>
                {navlinks.map((navlink, index) => (
                    <div 
                        className={`h-full w-[150px] text-tertiary flex items-center justify-center hover:bg-white cursor-pointer ${activeLink === index ? 'bg-white shadow-navlink z-20' : 'z-10'}`} 
                        onClick={() => setActiveLink(index)}
                        key={index}
                    >
                        <Link href={navlink.link}>
                            {navlink.text}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Navbar;
