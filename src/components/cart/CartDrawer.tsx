"use client";

import { useCartStore } from "@/lib/store";
import { AnimatePresence, motion } from "framer-motion";
import { X, Minus, Plus, ShoppingBag, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export function CartDrawer() {
    const { isOpen, closeCart, items, removeItem, updateQuantity } = useCartStore();

    // Prevent body scroll when cart is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [isOpen]);

    const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeCart}
                        className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 30, stiffness: 300 }}
                        className="fixed top-0 right-0 z-[70] h-full w-full max-w-md bg-[#0A0A0A] border-l border-damasus-gold/20 shadow-2xl flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-white/5">
                            <h2 className="font-serif text-xl tracking-widest text-damasus-gold uppercase">The Vault</h2>
                            <button onClick={closeCart} className="text-white/50 hover:text-white transition-colors">
                                <X size={24} strokeWidth={1} />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
                            {items.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                                    <div className="w-16 h-16 rounded-full bg-damasus-gold/5 flex items-center justify-center">
                                        <ShoppingBag size={24} className="text-damasus-gold/40" />
                                    </div>
                                    <div className="space-y-2">
                                        <p className="font-serif text-lg text-white/80">Your Vault is Empty</p>
                                        <p className="text-white/40 text-xs tracking-wider max-w-[200px] mx-auto">
                                            The finest essences are yet to be discovered.
                                        </p>
                                    </div>
                                    <button
                                        onClick={closeCart}
                                        className="text-damasus-gold text-xs uppercase tracking-widest border-b border-damasus-gold/30 hover:border-damasus-gold pb-1 transition-all"
                                    >
                                        Explore the Collection
                                    </button>
                                </div>
                            ) : (
                                <div className="space-y-6">
                                    {items.map((item) => (
                                        <div key={item.id} className="flex gap-4">
                                            <div className="relative w-20 h-24 bg-white/5 rounded-sm overflow-hidden flex-shrink-0 border border-white/10">
                                                {item.image ? (
                                                    <Image
                                                        src={item.image}
                                                        alt={item.name}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center bg-damasus-gold/10">
                                                        <span className="text-damasus-gold/20 text-[10px]">IMG</span>
                                                    </div>
                                                )}
                                            </div>
                                            <div className="flex-1 flex flex-col justify-between py-1">
                                                <div>
                                                    <div className="flex justify-between items-start">
                                                        <h3 className="font-serif text-sm text-[#F5F5F5] tracking-wide">{item.name}</h3>
                                                        <button
                                                            onClick={() => removeItem(item.id)}
                                                            className="text-white/20 hover:text-red-400 transition-colors"
                                                        >
                                                            <X size={14} />
                                                        </button>
                                                    </div>
                                                    <p className="text-damasus-gold/60 text-xs mt-1">
                                                        ₹{item.price.toLocaleString('en-IN')}
                                                    </p>
                                                </div>

                                                <div className="flex items-center gap-3">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, -1)}
                                                        className="w-6 h-6 flex items-center justify-center rounded-full border border-white/10 text-white/40 hover:border-white/30 hover:text-white transition-colors"
                                                    >
                                                        <Minus size={10} />
                                                    </button>
                                                    <span className="text-xs font-mono text-white/60 w-4 text-center">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, 1)}
                                                        className="w-6 h-6 flex items-center justify-center rounded-full border border-white/10 text-white/40 hover:border-white/30 hover:text-white transition-colors"
                                                    >
                                                        <Plus size={10} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        {items.length > 0 && (
                            <div className="p-6 border-t border-white/5 bg-[#0A0A0A]">
                                <div className="flex justify-between items-center mb-6">
                                    <span className="text-white/40 text-xs tracking-wider uppercase">Subtotal</span>
                                    <span className="font-serif text-lg text-damasus-gold">₹{subtotal.toLocaleString('en-IN')}</span>
                                </div>
                                <button
                                    onClick={() => {
                                        const phoneNumber = "916304522941";
                                        const cartDetails = items.map(i => `- ${i.quantity} x ${i.name} (₹${(i.price * i.quantity).toLocaleString('en-IN')})`).join('\n');
                                        const message = `Hello Damascus Perfumes,\nI would like to place an order:\n\n${cartDetails}\n\nTotal: ₹${subtotal.toLocaleString('en-IN')}\n\nPlease confirm my order.`;
                                        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                                        window.open(url, '_blank');
                                    }}
                                    className="w-full bg-damasus-gold text-black font-serif uppercase tracking-widest text-xs py-4 hover:bg-[#eac54f] transition-colors flex items-center justify-center gap-2 group"
                                >
                                    Proceed to Checkout
                                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                                <p className="text-center text-white/20 text-[10px] mt-4">
                                    Secure checkout via WhatsApp Concierge.
                                </p>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
