"use client";

import { Product } from "@/data/products";
import { useCartStore } from "@/lib/store";
import { motion } from "framer-motion";
import { ArrowLeft, Minus, Plus, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function ProductDetails({ product }: { product: Product }) {
    const { addItem, openCart } = useCartStore();
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        addItem({ ...product }); // Add single item
        // If we wanted to add multiple, we'd loop or update store to accept quantity
        // For now, simple add.
        openCart();
    };

    return (
        <div className="min-h-screen bg-[#050505] text-[#F5F5F5] flex flex-col md:flex-row">
            {/* Left: Image (Sticky) */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="w-full md:w-1/2 h-[50vh] md:h-screen relative md:sticky md:top-0 bg-white/5"
            >
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent md:bg-none opacity-80" />

                {/* Back Button (Mobile) - Positioned below Navbar */}
                <Link href="/collection" className="absolute top-24 left-6 md:hidden z-10 text-white/80 p-2 bg-black/20 backdrop-blur rounded-full border border-white/10">
                    <ArrowLeft size={20} />
                </Link>
            </motion.div>

            {/* Right: Details (Scrollable) */}
            <div className="w-full md:w-1/2 px-6 pt-24 pb-12 md:p-24 flex flex-col justify-center min-h-screen">
                {/* Back Button (Desktop) */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <Link href="/collection" className="flex items-center gap-2 text-damasus-gold/60 hover:text-damasus-gold transition-colors text-xs tracking-widest uppercase font-serif group">
                        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Collection
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-damasus-gold/80 text-xs tracking-[0.2em] uppercase font-serif mb-4">
                        Extrait de Parfum
                    </p>
                    <h1 className="font-serif text-4xl md:text-6xl text-[#F5F5F5] mb-6 tracking-tight">
                        {product.name}
                    </h1>
                    <p className="font-mono text-damasus-gold text-lg md:text-xl mb-8">
                        ₹{product.price.toLocaleString('en-IN')}
                    </p>

                    <div className="w-24 h-[1px] bg-white/10 mb-8" />

                    <p className="text-white/70 leading-relaxed font-light text-sm md:text-base mb-8 max-w-md">
                        {product.longDescription || product.description}
                    </p>

                    {/* Olfactory Notes */}
                    <div className="mb-12">
                        <h3 className="text-xs uppercase tracking-widest text-white/40 mb-4">Olfactory Notes</h3>
                        <div className="flex flex-wrap gap-2">
                            {product.notes.map((note) => (
                                <span key={note} className="px-3 py-1 border border-white/10 rounded-full text-xs text-brand-gold/80 hover:bg-white/5 transition-colors cursor-default">
                                    {note}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col gap-4 max-w-sm">
                        <button
                            onClick={handleAddToCart}
                            className="w-full bg-damasus-gold text-black font-serif uppercase tracking-widest text-xs py-4 hover:bg-[#eac54f] transition-all duration-300 flex items-center justify-center gap-3 group relative overflow-hidden"
                        >
                            <span className="relative z-10">Add to Vault</span>
                            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
                        </button>

                        <p className="text-center text-white/30 text-[10px] mt-2">
                            Free shipping across India on orders over ₹10,000.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
