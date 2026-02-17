"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { products } from "@/data/products";

export default function CollectionPage() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <main className="relative w-full h-screen bg-[#050505] overflow-hidden text-[#F5F5F5]">
                {/* Film grain overlay */}
                <div className="film-grain absolute inset-0 pointer-events-none z-[3] opacity-30" />

                {/* Hero Image Background */}
                <div className="absolute inset-0 z-[1]">
                    <Image
                        src="/bg.jpg"
                        alt="Damascus Perfumes Collection Teaser - Bottle with Red Ribbon"
                        fill
                        className="object-cover object-center opacity-80"
                        priority
                        quality={90}
                    />
                </div>

                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 z-[2] bg-gradient-to-b from-[#050505]/60 via-transparent to-[#050505]/90 pointer-events-none" />

                {/* Central Content */}
                <div className="absolute inset-0 z-[10] flex flex-col items-center justify-center text-center px-6 pointer-events-none">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                    >
                        <p className="text-damasus-gold/90 text-[10px] md:text-xs uppercase tracking-[0.5em] mb-6 font-serif drop-shadow-lg shadow-black">
                            The Collection
                        </p>
                        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#F5F5F5] mb-4 tracking-tight drop-shadow-2xl shadow-black">
                            Wait For The<br />
                            <span className="text-damasus-gold italic">Reveal</span>
                        </h1>
                        <p className="text-[#F5F5F5]/80 max-w-lg mx-auto leading-relaxed text-sm md:text-base tracking-wide font-light mt-6 drop-shadow-md shadow-black">
                            We are currently distilling our first batch of signature extraits.
                            Precise alchemy takes time.
                        </p>
                    </motion.div>
                </div>

                {/* Bottom CTA to Scroll */}
                <div className="absolute bottom-12 left-0 right-0 z-[20] flex justify-center pointer-events-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                    >
                        <button
                            onClick={() => {
                                document.getElementById('product-grid')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            className="relative overflow-hidden group border border-damasus-gold/40 bg-black/40 backdrop-blur-md text-damasus-gold px-12 py-4 uppercase tracking-[0.25em] text-[10px] font-serif transition-colors duration-500 rounded-sm hover:border-damasus-gold hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]"
                        >
                            <span className="relative z-10 group-hover:text-[#F5F5F5] transition-colors duration-500">
                                Discover The Scents
                            </span>

                            {/* Shimmer effect */}
                            <div className="absolute inset-0 -translate-x-[150%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-shimmer z-0" />

                            {/* Fill effect */}
                            <div className="absolute inset-0 bg-damasus-gold transform origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-x-100 z-0 opacity-10" />
                        </button>
                    </motion.div>
                </div>
            </main>

            {/* Product Grid Section */}
            <section id="product-grid" className="relative w-full min-h-screen bg-[#050505] py-24 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-20"
                    >
                        <h2 className="font-serif text-3xl md:text-5xl text-[#F5F5F5] mb-4">The First Batch</h2>
                        <div className="w-24 h-[1px] bg-damasus-gold/50 mx-auto" />
                        <p className="mt-6 text-white/60 font-serif italic max-w-2xl mx-auto">
                            "Limited extraits, distilled from the rarest ingredients of the Silk Road."
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-x-16 md:gap-y-24">
                        {products.map((product) => (
                            <Link href={`/product/${product.slug}`} key={product.id} className="group block">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                >
                                    {/* Image Container */}
                                    <div className="relative aspect-[3/4] overflow-hidden bg-white/5 border border-white/10 mb-6 transition-all duration-500 group-hover:border-damasus-gold/40">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />

                                        {!product.inStock && (
                                            <div className="absolute top-4 right-4 bg-black/80 backdrop-blur text-white text-[10px] uppercase tracking-widest px-3 py-1 border border-white/10">
                                                Sold Out
                                            </div>
                                        )}
                                    </div>

                                    {/* Text Content */}
                                    <div className="text-center">
                                        <h3 className="font-serif text-xl text-[#F5F5F5] mb-2 group-hover:text-damasus-gold transition-colors duration-300">
                                            {product.name}
                                        </h3>
                                        <p className="text-sm text-damasus-gold/80 font-mono mb-3">
                                            ₹{product.price.toLocaleString('en-IN')}
                                        </p>
                                        <p className="text-xs text-white/50 uppercase tracking-widest group-hover:text-white/80 transition-colors">
                                            View Details
                                        </p>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
