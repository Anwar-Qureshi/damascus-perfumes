"use client";

import Image from "next/image";
import { useState } from "react";
import { MobileMenu } from "./MobileMenu";

/**
 * Minimalist Attar Drop SVG — a sleek teardrop with sparkle.
 */
function AttarDropSVG({ size = 28 }: { size?: number }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Damasus Attar Drop"
        >
            <path
                d="M16 2C16 2 6 14 6 20C6 25.5228 10.4772 30 16 30C21.5228 30 26 25.5228 26 20C26 14 16 2 16 2Z"
                fill="url(#attarGrad)"
                stroke="#D4AF37"
                strokeWidth="0.8"
            />
            <ellipse cx="13" cy="21" rx="4" ry="5" fill="rgba(212,175,55,0.15)" />
            <circle cx="16" cy="8" r="1.2" fill="#FFFFFF" opacity="0.9" />
            <line x1="16" y1="5.5" x2="16" y2="10.5" stroke="#FFFFFF" strokeWidth="0.5" opacity="0.6" />
            <line x1="13.5" y1="8" x2="18.5" y2="8" stroke="#FFFFFF" strokeWidth="0.5" opacity="0.6" />
            <defs>
                <linearGradient id="attarGrad" x1="16" y1="2" x2="16" y2="30" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#D4AF37" />
                    <stop offset="100%" stopColor="#8B6914" />
                </linearGradient>
            </defs>
        </svg>
    );
}

import { useCartStore } from "@/lib/store";
import { ShoppingBag } from "lucide-react";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { openCart, items } = useCartStore();

    return (
        <>
            <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
            <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 backdrop-blur-md bg-[#0A0A0A]/50 border-b border-white/[0.03]">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <Image
                        src="/logo.jpeg"
                        alt="Damascus Perfumes"
                        width={44}
                        height={44}
                        className="rounded-full border border-damasus-gold/30"
                        priority
                    />
                    <span className="font-serif text-lg tracking-[0.25em] text-[#F5F5F5] uppercase hidden md:flex items-center gap-0.5">
                        D<span className="inline-flex items-center -mt-0.5"><AttarDropSVG size={16} /></span>M
                        <span className="text-damasus-gold">A</span>SCUS
                    </span>
                </div>

                {/* Nav Links — modern underline-reveal hover */}
                <div className="hidden md:flex items-center gap-10 font-serif text-[11px] tracking-[0.25em] uppercase text-[#F5F5F5]/50">
                    <a href="/collection" className="nav-link group relative py-2 hover:text-[#F5F5F5] transition-colors duration-400">
                        The Collection
                        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-damasus-gold group-hover:w-full transition-all duration-400 ease-out" />
                    </a>
                    <a href="/#origin" className="nav-link group relative py-2 hover:text-[#F5F5F5] transition-colors duration-400">
                        The Origin
                        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-damasus-gold group-hover:w-full transition-all duration-400 ease-out" />
                    </a>
                    <a href="/#craft" className="nav-link group relative py-2 hover:text-[#F5F5F5] transition-colors duration-400">
                        The Craft
                        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-damasus-gold group-hover:w-full transition-all duration-400 ease-out" />
                    </a>
                    <a href="/#arrival" className="nav-link group relative py-2 hover:text-[#F5F5F5] transition-colors duration-400">
                        The Arrival
                        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-damasus-gold group-hover:w-full transition-all duration-400 ease-out" />
                    </a>

                    {/* Vault CTA — Open Cart */}
                    <button
                        onClick={openCart}
                        className="relative px-5 py-2 border border-damasus-gold/40 text-damasus-gold hover:bg-damasus-gold/10 hover:border-damasus-gold hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] transition-all duration-500 uppercase tracking-widest text-[10px]"
                    >
                        The Vault
                    </button>

                    {/* Cart Icon */}
                    <button
                        onClick={openCart}
                        className="relative text-[#F5F5F5]/60 hover:text-damasus-gold transition-colors"
                    >
                        <ShoppingBag size={20} strokeWidth={1.5} />
                        {items.length > 0 && (
                            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center text-[8px] text-white">
                                {items.length}
                            </span>
                        )}
                    </button>
                </div>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden text-[#F5F5F5]/60 hover:text-damasus-gold transition-colors"
                    aria-label="Menu"
                    onClick={() => setIsMenuOpen(true)}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M3 12h18M3 6h18M3 18h18" />
                    </svg>
                </button>
            </nav>
        </>
    );
}
