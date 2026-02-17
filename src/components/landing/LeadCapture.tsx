"use client";

import { motion } from "framer-motion";
import { useState } from "react";

/**
 * The Vault — premium footer/conversion section.
 * Modern Tech-Luxury redesign: Glassmorphism input, Magnetic-feel button,
 * improved contrast, and updated contact info.
 */
export function LeadCapture() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <footer id="vault" className="relative w-full text-[#F5F5F5] overflow-hidden">
            {/* ===== CONVERSION SECTION ===== */}
            <section
                className="relative py-28 md:py-36 px-6"
                style={{
                    background: "linear-gradient(180deg, #0A0A0A 0%, #1a0808 20%, #6b0000 55%, #990000 70%, #6b0000 85%, #0A0A0A 100%)",
                }}
            >
                {/* Film grain */}
                <div className="film-grain absolute inset-0 pointer-events-none z-[1]" />

                {/* Gold glow overlay */}
                <div
                    className="absolute inset-0 pointer-events-none z-[2]"
                    style={{
                        background: "radial-gradient(ellipse 40% 30% at 50% 45%, rgba(212,175,55,0.06) 0%, transparent 100%)",
                    }}
                />

                <div className="relative z-10 max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        {/* Label */}
                        <p className="text-damasus-gold/60 text-[10px] uppercase tracking-[0.5em] mb-8 font-serif shadow-black drop-shadow-lg">
                            The Vault
                        </p>

                        {/* Decorative gold line */}
                        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-damasus-gold/60 to-transparent mx-auto mb-8" />

                        <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl mb-3 text-[#F5F5F5] leading-tight drop-shadow-xl">
                            Your Signature Scent
                        </h2>
                        <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl mb-8 text-damasus-gold leading-tight drop-shadow-lg shadow-black">
                            Awaits
                        </h2>

                        <p className="text-[#F5F5F5]/60 mb-12 max-w-md mx-auto leading-relaxed text-sm md:text-base tracking-wide font-light">
                            From the Gardens of Damascus to the heart of Hyderabad.
                            Secure your place in the Vault.
                        </p>

                        {submitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="inline-block"
                            >
                                <div className="px-12 py-8 border border-damasus-gold/30 bg-white/[0.04] backdrop-blur-md rounded-sm">
                                    <p className="text-damasus-gold font-serif text-sm md:text-base tracking-wider">
                                        ✦ Thank you. Your journey begins soon. ✦
                                    </p>
                                </div>
                            </motion.div>
                        ) : (
                            <form
                                onSubmit={handleSubmit}
                                className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto items-stretch"
                            >
                                {/* Modern Glass Input */}
                                <div className="flex-1 relative group">
                                    <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-sm rounded-sm transition-colors duration-500 group-focus-within:bg-white/[0.07]" />
                                    <input
                                        type="email"
                                        placeholder="Your Email Address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        suppressHydrationWarning
                                        className="relative z-10 w-full bg-transparent border border-white/10 px-6 py-4 text-[#F5F5F5] text-sm placeholder:text-[#F5F5F5]/40 focus:outline-none focus:border-damasus-gold/50 transition-all duration-500 tracking-[0.1em] rounded-sm shadow-[inset_0_2px_10px_rgba(0,0,0,0.2)]"
                                    />
                                    {/* Focus Glow Line */}
                                    <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-damasus-gold/80 transition-all duration-700 ease-out group-focus-within:w-full shadow-[0_0_15px_rgba(212,175,55,0.6)] z-20" />
                                </div>

                                {/* Modern Tech-Luxury Button */}
                                <button
                                    type="submit"
                                    suppressHydrationWarning
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                    className="relative overflow-hidden group bg-[#0A0A0A] border border-damasus-gold/40 hover:border-damasus-gold text-damasus-gold px-10 py-4 uppercase tracking-[0.25em] text-[11px] font-serif transition-all duration-500 rounded-sm hover:shadow-[0_0_40px_rgba(212,175,55,0.25)] active:scale-[0.98]"
                                >
                                    <span className="relative z-10 group-hover:text-[#0A0A0A] transition-colors duration-500 flex items-center justify-center gap-2">
                                        Notify Me
                                    </span>

                                    {/* Shimmer effect */}
                                    <div className="absolute inset-0 -translate-x-[150%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-shimmer z-0" />

                                    {/* Liquid amber fill */}
                                    <span className="absolute inset-0 bg-damasus-gold transform origin-bottom scale-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-y-100 z-0" />
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </section>

            {/* ===== FOOTER BAR ===== */}
            <div className="relative bg-[#050505] border-t border-white/[0.04]">
                <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                        {/* Brand column */}
                        <div>
                            <h3 className="font-serif text-lg tracking-[0.2em] text-[#F5F5F5] mb-4">DAMASCUS</h3>
                            <p className="text-[#F5F5F5]/40 text-xs leading-relaxed max-w-xs font-light">
                                Roots of Fragrance, Reimagined. Born from the ancient alchemy of the Silk Road and distilled for the modern visionary.
                            </p>
                            <div className="flex gap-6 mt-6">
                                {/* Social icons */}
                                <a href="#" className="text-[#F5F5F5]/30 hover:text-damasus-gold transition-colors duration-300 transform hover:scale-110" aria-label="Instagram">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <rect x="2" y="2" width="20" height="20" rx="5" />
                                        <circle cx="12" cy="12" r="5" />
                                        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                                    </svg>
                                </a>
                                <a href="#" className="text-[#F5F5F5]/30 hover:text-damasus-gold transition-colors duration-300 transform hover:scale-110" aria-label="Twitter">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M4 4l11.733 16H20L8.267 4H4z" />
                                        <path d="M4 20l6.768-6.768M20 4l-6.768 6.768" />
                                    </svg>
                                </a>
                                <a href="#" className="text-[#F5F5F5]/30 hover:text-damasus-gold transition-colors duration-300 transform hover:scale-110" aria-label="LinkedIn">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z" />
                                        <rect x="2" y="9" width="4" height="12" />
                                        <circle cx="4" cy="4" r="2" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Navigation column */}
                        <div>
                            <h4 className="text-[#F5F5F5]/50 text-[10px] uppercase tracking-[0.3em] mb-6 font-serif border-b border-white/5 pb-2 inline-block">Explore</h4>
                            <ul className="space-y-3">
                                <li><a href="/collection" className="text-[#F5F5F5]/40 hover:text-damasus-gold text-xs tracking-wider transition-colors duration-300 flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-[1px] bg-damasus-gold transition-all duration-300"></span>The Collection</a></li>
                                <li><a href="/#origin" className="text-[#F5F5F5]/40 hover:text-damasus-gold text-xs tracking-wider transition-colors duration-300 flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-[1px] bg-damasus-gold transition-all duration-300"></span>The Origin</a></li>
                                <li><a href="/#craft" className="text-[#F5F5F5]/40 hover:text-damasus-gold text-xs tracking-wider transition-colors duration-300 flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-[1px] bg-damasus-gold transition-all duration-300"></span>The Craft</a></li>
                                <li><a href="/#arrival" className="text-[#F5F5F5]/40 hover:text-damasus-gold text-xs tracking-wider transition-colors duration-300 flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-[1px] bg-damasus-gold transition-all duration-300"></span>The Arrival</a></li>
                                <li><a href="/#vault" className="text-[#F5F5F5]/40 hover:text-damasus-gold text-xs tracking-wider transition-colors duration-300 flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-[1px] bg-damasus-gold transition-all duration-300"></span>The Vault</a></li>
                            </ul>
                        </div>

                        {/* Contact column */}
                        <div>
                            <h4 className="text-[#F5F5F5]/50 text-[10px] uppercase tracking-[0.3em] mb-6 font-serif border-b border-white/5 pb-2 inline-block">Contact</h4>
                            <ul className="space-y-4">
                                <li>
                                    <p className="text-[#F5F5F5]/30 text-[10px] uppercase tracking-widest mb-1">HQ</p>
                                    <p className="text-[#F5F5F5]/60 text-xs tracking-wider font-light">Hyderabad, India</p>
                                </li>
                                <li>
                                    <p className="text-[#F5F5F5]/30 text-[10px] uppercase tracking-widest mb-1">Inquiries</p>
                                    <a href="mailto:perfumesdamascus@gmail.com" className="text-[#F5F5F5]/60 hover:text-damasus-gold text-xs tracking-wider transition-colors duration-300 block">
                                        perfumesdamascus@gmail.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Copyright bar */}
                <div className="border-t border-white/[0.03] px-6 md:px-12 py-6 bg-[#020202]">
                    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
                        <p className="text-[#F5F5F5]/20 text-[10px] tracking-[0.2em] uppercase">
                            © 2025 Damascus Perfumes. All rights reserved.
                        </p>
                        <p className="text-[#F5F5F5]/20 text-[10px] tracking-[0.2em] uppercase font-serif">
                            Roots of Fragrance, Reimagined
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
