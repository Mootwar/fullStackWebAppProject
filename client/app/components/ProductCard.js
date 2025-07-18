// app/components/ProductCard.js
'use client';

import Link from 'next/link';

export default function ProductCard ({ product }) {
    return (
        <Link
            href={`/product/${product.slug}`}
            className="block overflow-hidden hover:shadow-lg transition-shadow duration-200 w-50">
                <img
                    src={product.imgUrl}
                    alt={product.title}
                    className="object-contain  "
                />
                <div className="p-4 sm:w-1/2 md:w-1/3 lg:w-1/4">
                    <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
                    <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                    <div className="font-bold">
                        <span>${product.price.toFixed(2)}</span>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                //missing add card logic
                            }}
                            className="pl-2"
                        >
                            Add To Bag
                        </button>
                    </div>
                </div>

        </Link>
    )
}