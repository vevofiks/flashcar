"use client";

import React, { useState, useEffect } from "react";
import { fetchProducts } from "@/services/productService";
import { Product } from "@/interfces/productInterface";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";

const ProductsListing = () => {
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hoveredCard, setHoveredCard] = useState<null | string>(null);

    useEffect(() => {
        (async () => {
            await fetchProducts(setFilteredProducts);
            setIsLoading(false);
        })();
    }, []);

    const LoadingCard = () => (
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg animate-pulse">
            <div className="h-48 bg-gray-200"></div>
            <div className="p-6">
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen pt-6 bg-[#fffae6]">
            <section className="bg-gradient-to-br from-slate-900 via-gray-900 to-amber-900 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="space-y-6">
                        <h1 className="text-5xl md:text-6xl text-amber-400 font-bold">
                            Our Products
                        </h1>
                        <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                            Comprehensive automotive solutions delivered with
                            30+ years of expertise
                        </p>
                    </div>
                </div>
            </section>
            {/* Products Grid */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-800">
                        All Products
                    </h2>
                    <p className="text-gray-600">
                        {filteredProducts.length} products found
                    </p>
                </div>

                {isLoading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {[1, 2, 3, 4].map((i) => (
                            <LoadingCard key={i} />
                        ))}
                    </div>
                ) : filteredProducts.length === 0 ? (
                    <div className="text-center py-20">
                        <div className="text-6xl mb-4">🔍</div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">
                            No products found
                        </h3>
                        <p className="text-gray-600">
                            Try adjusting your search or filter criteria
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredProducts.map((product, index) => (
                            <div
                                key={product._id}
                                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
                                style={{ animationDelay: `${index * 0.1}s` }}
                                onMouseEnter={() => setHoveredCard(product._id)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <div className="relative overflow-hidden h-48">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        width={100}
                                        height={100}
                                        className={`w-full h-full object-cover transition-transform duration-500 ${
                                            hoveredCard === product._id
                                                ? "scale-110"
                                                : "scale-100"
                                        }`}
                                        unoptimized={true}
                                    />
                                    <div className="absolute top-2 left-2 bg-amber-400 px-3 py-1 rounded-xl shadow shadow-black/40 text-sm text-black">
                                        {product.category?.name || "N/A"}
                                    </div>
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-t from-black/50 to-transparent transition-opacity duration-300 ${
                                            hoveredCard === product._id
                                                ? "opacity-100"
                                                : "opacity-0"
                                        }`}
                                    ></div>
                                </div>

                                <div className="p-6 flex flex-col h-full">
                                    <div className="flex items-start justify-between mb-2">
                                        <h3 className="text-lg font-bold text-gray-800 flex-1">
                                            {product.name}
                                        </h3>
                                    </div>

                                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                        {product.description}
                                    </p>

                                    {/* WhatsApp Enquiry Button */}
                                    <div>
                                        <Link
                                            href={`https://wa.me/966546457500?text=Hi, I'm interested in *${product.name}*`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-auto inline-flex items-center w-full justify-center gap-2 px-4 py-2 rounded-xl bg-green-500 text-white font-medium shadow-md hover:bg-green-600 hover:shadow-lg transition-all duration-300"
                                        >
                                            <FaWhatsapp className="text-xl" />
                                            Enquire
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <style jsx>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes slide-up {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fade-in {
                    animation: fade-in 0.8s ease-out;
                }

                .animate-slide-up {
                    animation: slide-up 0.6s ease-out forwards;
                    opacity: 0;
                }

                .line-clamp-2 {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            `}</style>
        </div>
    );
};

export default ProductsListing;
