"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";
import { useCartStore } from "@/lib/store";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const menuVariants = {
    closed: {
        opacity: 0,
        y: "-100%",
        transition: {
            duration: 0.8,
            ease: [0.76, 0, 0.24, 1] as const
        }
    },
    open: {
        opacity: 1,
        y: "0%",
        transition: {
            duration: 0.8,
            ease: [0.76, 0, 0.24, 1] as const
        }
    }
};

const linkVariants = {
    closed: {
        y: 40,
        opacity: 0
    },
    open: (i: number) => ({
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            delay: 0.1 + (i * 0.1),
            ease: "easeOut" as const
        }
    })
};

const links = [
    { label: "The Origin", href: "/#origin" },
    { label: "The Craft", href: "/#craft" },
    { label: "The Arrival", href: "/#arrival" },
    { label: "The Collection", href: "/collection" },
    { label: "The Vault", href: "/#vault" },
];

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
    const { openCart } = useCartStore();

    const handleLinkClick = (href: string) => {
        onClose();
        if (href === "#vault") {
            openCart();
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-[60] bg-[#0A0A0A] flex flex-col justify-center items-center"
                    variants={menuVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                >
                    {/* Background Grain */}
                    <div className="film-grain absolute inset-0 pointer-events-none opacity-50" />

                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 text-damasus-gold/60 hover:text-damasus-gold transition-colors z-20 p-2"
                    >
                        <X size={32} strokeWidth={1} />
                    </button>

                    {/* Links */}
                    <nav className="relative z-10 flex flex-col items-center gap-8">
                        {links.map((link, i) => (
                            <motion.div
                                key={link.label}
                                custom={i}
                                variants={linkVariants}
                            >
                                <Link
                                    href={link.href === "/#vault" ? "#" : link.href}
                                    onClick={(e) => {
                                        if (link.href === "/#vault") {
                                            e.preventDefault();
                                            handleLinkClick("#vault");
                                        } else {
                                            onClose();
                                        }
                                    }}
                                    className="font-serif text-3xl md:text-5xl text-[#F5F5F5] hover:text-damasus-gold transition-colors duration-500 tracking-wider group relative"
                                >
                                    {link.label}
                                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-damasus-gold group-hover:w-full transition-all duration-500" />
                                </Link>
                            </motion.div>
                        ))}
                    </nav>

                    {/* Footer Info */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            transition: { delay: 0.6, duration: 1 }
                        }}
                        className="absolute bottom-12 text-center"
                    >
                        <p className="text-damasus-gold/40 text-[10px] uppercase tracking-[0.3em] font-serif">
                            Damascus Perfumes
                        </p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
