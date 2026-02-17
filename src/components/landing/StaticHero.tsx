"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GoldenDust } from "../effects/GoldenDust";

interface StaticHeroProps {
    visible: boolean;
}

/**
 * Phase 1: The Instant Load (0-2 seconds).
 * MasterpieceHero.jpg as full-screen priority background
 * with golden dust + headline reveal.
 */
export function StaticHero({ visible }: StaticHeroProps) {
    return (
        <div
            className="absolute inset-0 z-20 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: visible ? 1 : 0, pointerEvents: visible ? "auto" : "none" }}
        >
            {/* Background Image */}
            <Image
                src="/MasterpieceHero.jpg"
                alt="Damascus Perfumes — Roots of Fragrance"
                fill
                priority
                className="object-cover object-center"
                sizes="100vw"
                quality={90}
            />

            {/* Bottom gradient fade */}
            <div
                className="absolute inset-0 z-[2]"
                style={{
                    background: "linear-gradient(to bottom, transparent 40%, rgba(10,10,10,0.6) 70%, #0A0A0A 100%)",
                }}
            />

            {/* Golden Dust particles */}
            <GoldenDust />

            {/* Headline */}
            <div className="absolute inset-0 z-[10] flex flex-col items-center justify-end pb-24 md:pb-32 text-center px-6">
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                    className="font-serif text-2xl md:text-4xl lg:text-5xl text-[#F5F5F5] max-w-3xl leading-snug tracking-tight"
                    style={{
                        textShadow: "0 0 20px rgba(0,0,0,0.9), 0 4px 20px rgba(0,0,0,0.7)",
                    }}
                >
                    Roots of Fragrance.{" "}
                    <span className="text-damasus-gold">Reimagined.</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 }}
                    className="mt-4 text-[#F5F5F5]/50 text-sm md:text-base max-w-lg tracking-wide"
                    style={{
                        textShadow: "0 0 15px rgba(0,0,0,0.8)",
                    }}
                >
                    Where the ancient aromatic gardens meet the modern visionary.
                </motion.p>
            </div>
        </div>
    );
}
