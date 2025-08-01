// app/components/ProductCard.js
'use client';

import Link from 'next/link';

export default function ProductCard ({ product }) {
    return (
        <Link
            href={`/product/${product.slug}`}
            className="block w-full overflow-hidden hover:shadow-lg transition-shadow duration-200 rounded-lg p-4">
                <div className="flex flex-col">
                    <img
                        src={product.imgUrl}
                        alt={product.title}
                        className="object-contain w-full h-48 mb-4"
                    />
                    <div className="w-full">
                        <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
                        <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                        <div className="font-bold flex justify-between items-center">
                            <span>${product.price.toFixed(2)}</span>
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    //missing add card logic
                                }}
                                className="bg-stone-950 text-white px-4 py-1 rounded-sm hover:animate-spin duration-200"
                            >
                                Add To Bag
                            </button>
                        </div>
                    </div>
                </div>
        </Link>
    )
}