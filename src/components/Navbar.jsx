'use client';
import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay';

const navLinks = [
    {
        title: 'Home',
        path: '#home'
    },
    {
        title: 'About',
        path: '#about'
    },
    {
        title: 'Projects',
        path: '#projects'
    },
    {
        title: 'Contact',
        path: '#contact'
    },
];

const Navbar = () => {
const [navbarOpen, setNavbarOpen] = useState(false);
const [scrolled, setScrolled] = useState(false);
const navbarRef = useRef(null);

useEffect(() => {
    const handleScroll = () => {
        setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
}, []);

const handleLinkClick = () => {
    setNavbarOpen(false);
};

  // Menangani klik di luar untuk menutup menu
useEffect(() => {
        const handleClickOutside = (event) => {
        if (navbarRef.current && !navbarRef.current.contains(event.target)) {
            setNavbarOpen(false);
        }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
}, [navbarRef]);

  // Lock scroll saat menu mobile terbuka
useEffect(() => {
    if (navbarOpen) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'unset';
    }
}, [navbarOpen]);

return (
    <>
      {/* FULL BACKGROUND BLUR OVERLAY */}
    <div
        className={`fixed inset-0 z-[90] bg-black/40 backdrop-blur-md transition-opacity duration-500 md:hidden ${
            navbarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setNavbarOpen(false)}
    />

    <nav
        ref={navbarRef}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
            scrolled || navbarOpen
            ? "bg-[#121212]/80 backdrop-blur-lg border-b border-white/10 py-3"
            : "bg-transparent py-5 md:py-8"
        }`}
    >
        <div className="flex container lg:py-2 items-center justify-between mx-auto px-6">
            <Link
                href={'/'}
                className="text-2xl md:text-4xl text-white font-black tracking-tighter group z-[110]">
                CESAR<span className="text-purple-500 group-hover:text-pink-500 transition-colors">.</span>
            </Link>

          {/* Mobile Button */}
            <div className="mobile-menu block md:hidden z-[110]">
                <button
                onClick={() => setNavbarOpen(!navbarOpen)}
                className="flex items-center p-2 text-slate-200 hover:text-white transition-all active:scale-90"
                >
                {navbarOpen ? (
                    <XMarkIcon className="h-8 w-8 transition-transform duration-300 rotate-90" />
                ) : (
                    <Bars3Icon className="h-8 w-8" />
                )}
                </button>
            </div>

          {/* Desktop Menu */}
            <div className="menu hidden md:block md:w-auto">
                <ul className="flex p-4 md:p-0 md:flex-row md:space-x-12 mt-0">
                {navLinks.map((link, index) => (
                    <li key={index} className="relative group overflow-hidden py-2">
                    <NavLink href={link.path} title={link.title} onClick={handleLinkClick} />
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 translate-x-[-105%] group-hover:translate-x-0 transition-transform duration-300"></span>
                    </li>
                ))}
                </ul>
            </div>
        </div>

        {/* MOBILE MENU CARD */}
        <div
            className={`absolute top-full left-0 right-0 px-4 mt-3 md:hidden transition-all duration-500 ease-in-out ${
                navbarOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-5 opacity-0 pointer-events-none"
            }`}
            >
            <div className="bg-[#1c1c1c]/90 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] p-4">
                <MenuOverlay links={navLinks} onLinkClick={handleLinkClick} />
            </div>
        </div>
    </nav>
    </>
);
};

export default Navbar;