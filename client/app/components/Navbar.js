'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [closing, setClosing] = useState(false);

    const toggle = () => {
        if (open) {
            setClosing(true);
            setTimeout(() => {
                setOpen(false);
                setClosing(false);
            },150);
        } else {
            setOpen(true);
        }
    };
    return (
        <nav className="relative flex items-center justify-center px-6 py-4 bg-white shadow-md z-50">
            {/* Dropdown Container */}
            <div className="relative">
                <button
                onClick={toggle}
                className="font-medium hover:text-blue-600 focus:outline-none"
                >
                Products ⬇️
                </button>

                {(open || closing) && (
                <div 
                    className={`
                        absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg
                        transform origin-top
                        transition-transform duration-150 ease-in-out
                        ${open
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-0"}
                    `}>
                    <ul className="flex flex-col text-left">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        🏡 Homepage
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        👕 T-Shirts
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        🏀 Hoodies
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        ⌚ Accessories
                    </li>
                    </ul>
                </div>
                )}
            </div>

            {/* Logo / Brand */}
            <div className="text-xl font-bold mx-15">🧢 YourBrandHere</div>

            {/* Right-side Icons */}
            <div className="flex gap-4 text-lg">
                <button>🔍</button>
                <button>🛒</button>
            </div>
        </nav>
  );
}



// export default function Navbar() {
//   return (
//     <nav className="relative flex items-center justify-center p-4 shadow-md">
//       <div className="absolute left-4">🗺️ DropDown Menu</div>
//       <div className="text-xl font-bold">🧢 YourBrandHere</div>
//       <div className="absolute right-4 flex gap-4">
//         <button>🔍</button>
//         <button>🛒</button>
//         <button>☰</button>
//       </div>
//     </nav>
//   );
// }
