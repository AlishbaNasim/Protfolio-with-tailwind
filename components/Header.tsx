import React from 'react';
import Link from "next/link";

function Header() {
    return (
        <div className="flex justify-between items-center p-5 bg-gray-800 text-white">
            {/* logo name */}
            <div>
                <Link href="/">
                    <h1 className="text-2xl font-bold">Alishba Naseem</h1>
                </Link>
            </div>

            {/* Navigation bar */}
            <div className="hidden md:flex space-x-6">
                <Link href="/About" className="nav text-lg hover:text-gray-400">About</Link>
                <Link href="/Skills" className="nav text-lg hover:text-gray-400">Skills</Link>
                <Link href="/Project" className="nav text-lg hover:text-gray-400">Projects</Link>
                <Link href="/Contact" className="nav text-lg hover:text-gray-400">Contact</Link>
            </div>

            {/* Hamburger menu for mobile */}
            <div className="md:hidden">
                <button className="text-white focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default Header;
