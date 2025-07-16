// app/components/ProductCard.js
'use client';

import Link from 'next/link';

export default function ProductCard ({ product }) {
    return (
        <Link
            href={`/product/${product.slug}`}
            className="block border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200">
                <img
                    src={product.imgUrl}
                    alt={product.title}
                    className="w-full h-48 object-cover"
                />
                <div className="p-4">
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