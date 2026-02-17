"use client";

import { useEffect, useRef, useCallback } from "react";

/**
 * Golden Dust with mouse-repelling parallax.
 * Particles drift upward and repel away from the cursor
 * to simulate physical space interaction.
 */
export function GoldenDust() {
    const containerRef = useRef<HTMLDivElement>(null);
    const mouseRef = useRef({ x: -1, y: -1 });
    const particlesRef = useRef<{ el: HTMLSpanElement; x: number; y: number; baseX: number; baseY: number }[]>([]);
    const rafRef = useRef<number>(0);

    // Track mouse position
    const handleMouseMove = useCallback((e: MouseEvent) => {
        const container = containerRef.current;
        if (!container) return;
        const rect = container.getBoundingClientRect();
        mouseRef.current = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        };
    }, []);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const particleCount = 35;
        const particles: typeof particlesRef.current = [];

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement("span");
            const size = Math.random() * 3.5 + 1;
            const startX = Math.random() * 100;
            const startY = Math.random() * 100;
            const duration = Math.random() * 18 + 12;
            const delay = Math.random() * -20;
            const opacity = Math.random() * 0.45 + 0.1;

            particle.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${startX}%;
                top: ${startY}%;
                background: radial-gradient(circle, #D4AF37 0%, transparent 70%);
                border-radius: 50%;
                opacity: ${opacity};
                animation: goldenDustFloat ${duration}s ease-in-out ${delay}s infinite;
                pointer-events: none;
                will-change: transform, opacity;
                transition: transform 0.3s ease-out;
            `;

            container.appendChild(particle);
            particles.push({
                el: particle,
                x: (startX / 100) * container.offsetWidth,
                y: (startY / 100) * container.offsetHeight,
                baseX: (startX / 100) * container.offsetWidth,
                baseY: (startY / 100) * container.offsetHeight,
            });
        }

        particlesRef.current = particles;

        // Repel animation loop
        const animate = () => {
            const mx = mouseRef.current.x;
            const my = mouseRef.current.y;
            const repelRadius = 120;
            const repelStrength = 50;

            for (const p of particlesRef.current) {
                if (mx < 0) continue; // Mouse not in container

                const dx = p.baseX - mx;
                const dy = p.baseY - my;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < repelRadius && dist > 0) {
                    const force = (1 - dist / repelRadius) * repelStrength;
                    const offsetX = (dx / dist) * force;
                    const offsetY = (dy / dist) * force;
                    p.el.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
                } else {
                    p.el.style.transform = "";
                }
            }

            rafRef.current = requestAnimationFrame(animate);
        };

        rafRef.current = requestAnimationFrame(animate);
        window.addEventListener("mousemove", handleMouseMove, { passive: true });

        return () => {
            cancelAnimationFrame(rafRef.current);
            window.removeEventListener("mousemove", handleMouseMove);
            particles.forEach((p) => p.el.remove());
        };
    }, [handleMouseMove]);

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 z-[5] overflow-hidden pointer-events-none"
            aria-hidden="true"
        />
    );
}
