"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

interface ScrollContextValue {
    /** Whether the 3D canvas is loaded and ready */
    is3DReady: boolean;
    /** Set by Scene when 3D is loaded */
    set3DReady: () => void;
    /** Mouse position normalized -1 to 1 for cursor parallax */
    mouseX: number;
    mouseY: number;
}

const ScrollContext = createContext<ScrollContextValue>({
    is3DReady: false,
    set3DReady: () => { },
    mouseX: 0,
    mouseY: 0,
});

export function useScrollProgress() {
    return useContext(ScrollContext);
}

export function ScrollProvider({ children }: { children: React.ReactNode }) {
    const [is3DReady, setIs3DReady] = useState(false);
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);

    const set3DReady = useCallback(() => {
        setIs3DReady(true);
    }, []);

    // Mouse tracking for cursor parallax
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMouseX((e.clientX / window.innerWidth) * 2 - 1);
            setMouseY(-((e.clientY / window.innerHeight) * 2 - 1));
        };

        window.addEventListener("mousemove", handleMouseMove, { passive: true });
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <ScrollContext.Provider
            value={{ is3DReady, set3DReady, mouseX, mouseY }}
        >
            {children}
        </ScrollContext.Provider>
    );
}
