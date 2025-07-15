'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="relative flex w-screen items-center justify-center p-5 bg-blue-300 border-b-1 border-blue-500 shadow-md z-75">
            {/* Drop Down Menu on Desktop */}
            <div className="relative pr-4">
                <button
                    onClick={() => setOpen(o => !o)}
                    className="hidden lg:flex hover:text-blue-700 focus:outline-none">
                    Products ⬇️
                </button>

                <div
                    className={`absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg
                        transform origin-top transition duration-150 ease-in-out
                        ${open ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                    <ul className="flex flex-col text-left">
                        <li>
                            <Link
                                href="/"
                                className="block px-4 py-2 hover:bg-gray-300 border-b-1"
                                onClick={() => setOpen(false)}>
                                🏡 Homepage
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/products/t-shirts"
                                className="block px-4 py-2 hover:bg-gray-300 border-b-1"
                                onClick={() => setOpen(false)}>
                                👕 T-Shirts
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/products/hoodies"
                                className="block px-4 py-2 hover:bg-gray-300 border-b-1"
                                onClick={() => setOpen(false)}>
                                🏀 Hoodies
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/products/accessories"
                                className="block px-4 py-2 hover:bg-gray-300"
                                onClick={() => setOpen(false)}>
                                ⌚ Accessories
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Mobile Hamburger */}
            <button 
                className="lg:hidden">

            </button>
            {/* Logo / Brand */}
            <div className="text-xl font-bold justify-center">🧢 YourBrandHere</div>

            {/* Right-side Icons On large Displays*/}
            <div className="hidden lg:flex pl-4 text-lg gap-4">
                <Link href="/search" className="hover:text-blue-600">
                🔍
                </Link>
                <Link href="/cart" className="hover:text-blue-600">
                🛒 Cart
                </Link>
            </div>
        </nav>
  );
}