'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="relative flex items-center justify-between px-5 py-3 bg-blue-300 border-b-1 border-blue-500 shadow-md">
            
            {/* Drop Down Menu on Desktop */}
            <div className="relative">
                <button
                    onClick={() => setOpen(o => !o)}
                    className="lg:block hidden text-lg hover:text-blue-700 focus:outline-none">
                    Products ⬇️
                </button>
                {/* Actual Menu that pops up*/}
                <div
                    className={`lg:block hidden absolute left-20 mt-2 w-40 bg-white border rounded shadow-lg
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
            <div className="relative">
                <button 
                    onClick={() => setOpen(o => !o)}
                    className="lg:hidden">
                        🟰
                </button>
                {/* Slide in menu */}
                <div
                    className={`
                    fixed lg:hidden inset-0
                    bg-white shadow-lg
                    transform transition-transform duration-300 ease-in-out
                    z-50
                    ${open ? 'translate-x-0' : '-translate-x-full'}
                    `}
                >
                    {/* Close button */}
                    <div className="flex justify-end p-4">
                        <button onClick={() => setOpen(false)}>
                            ✕
                        </button>
                    </div>
                    <ul className="flex flex-col text-left">
                        <li>
                            <Link
                                href="/"
                                className="block px-4 py-2 hover:bg-gray-300 text-2xl"
                                onClick={() => setOpen(false)}>
                                🏡 Homepage
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/products/t-shirts"
                                className="block px-4 py-2 hover:bg-gray-300 text-2xl"
                                onClick={() => setOpen(false)}>
                                👕 T-Shirts
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/products/hoodies"
                                className="block px-4 py-2 hover:bg-gray-300 text-2xl"
                                onClick={() => setOpen(false)}>
                                🏀 Hoodies
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/products/accessories"
                                className="block px-4 py-2 hover:bg-gray-300 text-2xl"
                                onClick={() => setOpen(false)}>
                                ⌚ Accessories
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Logo / Brand */}
            <div className="absolute left-1/2 transform -translate-x-1/2 lg:text-xl font-bold">🧢 YourBrandHere</div>

            {/* Right-side Icons On large Displays*/}
            <div className="hidden lg:flex pl-4 text-lg gap-4">
                <Link href="/search" className="hover:text-blue-600">
                🔍 Search
                </Link>
                <Link href="/cart" className="hover:text-blue-600">
                🛒 Cart
                </Link>
            </div>
        </nav>
  );
}