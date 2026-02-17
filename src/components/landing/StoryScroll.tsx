"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/**
 * Three-Act Storyboard with real imagery.
 */
const stories = [
    {
        id: "origin",
        actLabel: "Act I",
        title: "The Origin",
        subtitle: "The Roots",
        body: "Where the Roots of Fragrance meet the Aromatic Gardens of Damascus. We do not just bottle scents; we preserve the ancient alchemy of the Silk Road.",
        accent: "Every essence carries the memory of a thousand-year journey.",
        image: "/origin.png",
        alt: "Ancient rose garden with attar bottles nestled among tree roots — the origin of fragrance",
    },
    {
        id: "craft",
        actLabel: "Act II",
        title: "The Craft",
        subtitle: "The Alchemy",
        body: "Distilled in the fires of tradition. Every drop is a voyage through time, born from copper vessels and perfected by hands that have guarded the secrets of the Rose for centuries.",
        accent: "Where fire meets petal, alchemy becomes art.",
        image: "/craft.jpg",
        alt: "Copper distillation pots over flames with golden steam — the ancient craft of attar making",
    },
    {
        id: "arrival",
        actLabel: "Act III",
        title: "The Arrival",
        subtitle: "Hyderabad",
        body: "The Odyssey reaches its destination. From the legendary gardens to the heart of Hyderabad, your signature scent has finally arrived.",
        accent: "From the Gardens of Damascus to the City of Pearls.",
        image: "/arrival.png",
        alt: "Silhouette overlooking the Charminar at twilight — the arrival in Hyderabad",
    },
];

/**
 * Image panel with gold frame, act label, and subtle overlay.
 */
function VisualPanel({
    image, alt, actLabel, index,
}: {
    image: string; alt: string; actLabel: string; index: number;
}) {
    return (
        <motion.div
            className="relative w-full h-[350px] md:h-[480px] lg:h-[560px] overflow-hidden"
            initial={{ opacity: 0, x: -30, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-12%" }}
            transition={{
                duration: 0.8,
                delay: index * 0.06,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
        >
            {/* The actual image */}
            <Image
                src={image}
                alt={alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 48vw"
                quality={85}
                loading={index === 0 ? "eager" : "lazy"}
            />

            {/* Dark overlay for contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/70 via-transparent to-[#0A0A0A]/30 z-[1]" />

            {/* Inner border */}
            <div className="absolute inset-4 border border-damasus-gold/10 z-[2]" />

            {/* Act label */}
            <div className="absolute top-7 left-7 z-[3]">
                <p className="text-damasus-gold/50 text-[10px] uppercase tracking-[0.4em] font-serif drop-shadow-md">
                    {actLabel}
                </p>
            </div>

            {/* Corner accents */}
            <div className="absolute top-6 left-6 w-5 h-5 border-t border-l border-damasus-gold/20 z-[2]" />
            <div className="absolute top-6 right-6 w-5 h-5 border-t border-r border-damasus-gold/20 z-[2]" />
            <div className="absolute bottom-6 left-6 w-5 h-5 border-b border-l border-damasus-gold/20 z-[2]" />
            <div className="absolute bottom-6 right-6 w-5 h-5 border-b border-r border-damasus-gold/20 z-[2]" />
        </motion.div>
    );
}

export function StoryScroll() {
    return (
        <section className="relative w-full bg-[#0A0A0A]">
            {/* Film grain */}
            <div className="film-grain absolute inset-0 pointer-events-none z-[1]" />

            {stories.map((story, index) => (
                <div
                    key={story.id}
                    id={story.id}
                    className="relative z-[2] min-h-screen flex flex-col md:flex-row items-center gap-8 md:gap-14 lg:gap-20 px-6 md:px-14 lg:px-24 py-20 md:py-28"
                >
                    {/* LEFT: Image Panel */}
                    <div className="w-full md:w-[48%] flex-shrink-0">
                        <VisualPanel
                            image={story.image}
                            alt={story.alt}
                            actLabel={story.actLabel}
                            index={index}
                        />
                    </div>

                    {/* RIGHT: Text */}
                    <motion.div
                        className="w-full md:w-[52%]"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-18%" }}
                        transition={{
                            duration: 0.9,
                            delay: 0.12 + index * 0.06,
                            ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                    >
                        <span className="text-damasus-gold/12 font-serif text-7xl md:text-8xl lg:text-9xl font-bold leading-none select-none">
                            {String(index + 1).padStart(2, "0")}
                        </span>

                        <p className="text-damasus-gold text-[10px] md:text-xs uppercase tracking-[0.35em] mt-3 mb-2 font-serif">
                            {story.subtitle}
                        </p>

                        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#F5F5F5] mb-5 leading-tight">
                            {story.title}
                        </h2>

                        <div className="w-14 h-[1px] bg-damasus-gold/35 mb-5" />

                        <p className="text-[#F5F5F5]/50 leading-relaxed text-sm md:text-base lg:text-lg mb-5">
                            {story.body}
                        </p>

                        <p className="text-damasus-gold/60 italic font-serif text-xs md:text-sm">
                            &ldquo;{story.accent}&rdquo;
                        </p>
                    </motion.div>
                </div>
            ))}
        </section>
    );
}
