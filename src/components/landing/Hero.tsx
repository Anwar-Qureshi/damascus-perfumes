"use client";

import { StaticHero } from "./StaticHero";
import { Scene } from "../three/Scene";
import { useScrollProgress } from "../three/ScrollContext";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

/**
 * Hero wrapper — orchestrates Phase 1 → Phase 2 transition.
 * Text is centered over the bottle with strong text-shadow for readability.
 * Flanking glow/dust effects on left and right sides.
 */
export function Hero() {
    const { is3DReady } = useScrollProgress();

    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background with radial spotlight */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    background: "radial-gradient(ellipse 60% 50% at 50% 45%, #1a1408 0%, #0A0A0A 70%)",
                }}
            />

            {/* Flanking Glow — Left */}
            <div
                className="absolute top-1/4 -left-20 w-[400px] h-[400px] z-[2] pointer-events-none opacity-30"
                style={{
                    background: "radial-gradient(ellipse at center, rgba(212,175,55,0.12) 0%, transparent 70%)",
                    filter: "blur(60px)",
                }}
            />
            {/* Flanking Glow — Right */}
            <div
                className="absolute top-1/3 -right-20 w-[350px] h-[350px] z-[2] pointer-events-none opacity-25"
                style={{
                    background: "radial-gradient(ellipse at center, rgba(212,175,55,0.10) 0%, transparent 70%)",
                    filter: "blur(60px)",
                }}
            />

            {/* Floating gold flecks on flanks */}
            <div className="absolute left-[5%] top-[30%] w-1 h-1 rounded-full bg-damasus-gold/30 animate-pulse z-[3]" />
            <div className="absolute left-[8%] top-[55%] w-0.5 h-0.5 rounded-full bg-damasus-gold/20 animate-pulse z-[3]" style={{ animationDelay: "1.2s" }} />
            <div className="absolute left-[12%] top-[40%] w-1.5 h-1.5 rounded-full bg-damasus-gold/15 animate-pulse z-[3]" style={{ animationDelay: "0.5s" }} />
            <div className="absolute right-[6%] top-[35%] w-1 h-1 rounded-full bg-damasus-gold/25 animate-pulse z-[3]" style={{ animationDelay: "0.8s" }} />
            <div className="absolute right-[10%] top-[50%] w-0.5 h-0.5 rounded-full bg-damasus-gold/30 animate-pulse z-[3]" style={{ animationDelay: "1.5s" }} />
            <div className="absolute right-[14%] top-[25%] w-1.5 h-1.5 rounded-full bg-damasus-gold/10 animate-pulse z-[3]" style={{ animationDelay: "2s" }} />

            {/* Phase 1: Static Hero */}
            <StaticHero visible={!is3DReady} />

            {/* Phase 2: Live 3D Canvas */}
            <Scene visible={is3DReady} />

            {/* CENTERED Hero Text — sits over the bottle with strong text-shadow */}
            <div className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center px-4 pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: is3DReady ? 1 : 0, y: is3DReady ? 0 : 20 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="flex flex-col items-center"
                >
                    {/* Brand label */}
                    <p className="mb-4 text-[10px] md:text-xs uppercase tracking-[0.4em] text-damasus-gold/60 font-serif"
                        style={{ textShadow: "0 0 15px rgba(0,0,0,0.9)" }}>
                        Damascus
                    </p>

                    {/* Main headline */}
                    <h1
                        className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#F5F5F5] leading-[1.1]"
                        style={{
                            textShadow: "0 0 40px rgba(0,0,0,1), 0 0 80px rgba(0,0,0,0.9), 0 4px 30px rgba(0,0,0,0.8)",
                        }}
                    >
                        Roots of Fragrance.
                    </h1>

                    {/* Gold subtitle */}
                    <h1
                        className="mt-2 font-serif text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-damasus-gold leading-[1.1]"
                        style={{
                            textShadow: "0 0 40px rgba(212,175,55,0.4), 0 0 80px rgba(0,0,0,0.9), 0 4px 30px rgba(0,0,0,0.7)",
                        }}
                    >
                        Reimagined.
                    </h1>

                    {/* Sub-headline with modern font */}
                    <p
                        className="mt-6 max-w-lg text-sm md:text-base leading-relaxed"
                        style={{
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 300,
                            fontStyle: "italic",
                            letterSpacing: "0.12em",
                            color: "rgba(245,245,245,0.45)",
                            textShadow: "0 0 30px rgba(0,0,0,1), 0 0 60px rgba(0,0,0,0.9)",
                        }}
                    >
                        Where the ancient aromatic gardens meet the modern visionary.
                    </p>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 text-damasus-gold/30"
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            >
                <ArrowDown size={22} strokeWidth={1} />
            </motion.div>
        </section>
    );
}
