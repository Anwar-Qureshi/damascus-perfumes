import * as THREE from "three";

export function createBottleProfile(): THREE.Vector2[] {
    return [
        new THREE.Vector2(0.0, 0.0),
        new THREE.Vector2(0.55, 0.0),
        new THREE.Vector2(0.58, 0.04),
        new THREE.Vector2(0.62, 0.15),
        new THREE.Vector2(0.72, 0.5),
        new THREE.Vector2(0.82, 1.0),
        new THREE.Vector2(0.92, 1.5),
        new THREE.Vector2(1.0, 2.0),
        new THREE.Vector2(0.95, 2.15),
        new THREE.Vector2(0.78, 2.35),
        new THREE.Vector2(0.55, 2.5),
        new THREE.Vector2(0.38, 2.6),
        new THREE.Vector2(0.30, 2.65),
        new THREE.Vector2(0.28, 2.75),
        new THREE.Vector2(0.28, 3.15),
        new THREE.Vector2(0.32, 3.2),
        new THREE.Vector2(0.35, 3.25),
        new THREE.Vector2(0.32, 3.28),
        new THREE.Vector2(0.0, 3.28),
    ];
}

export function createLiquidProfile(): THREE.Vector2[] {
    const fillFraction = 0.85;
    const inset = 0.06;
    return [
        new THREE.Vector2(0.0, 0.05),
        new THREE.Vector2(0.55 - inset, 0.05),
        new THREE.Vector2(0.58 - inset, 0.08),
        new THREE.Vector2(0.62 - inset, 0.15),
        new THREE.Vector2(0.72 - inset, 0.5),
        new THREE.Vector2(0.82 - inset, 1.0),
        new THREE.Vector2(0.92 - inset, 1.5),
        new THREE.Vector2(0.97 - inset, 2.0 * fillFraction),
        new THREE.Vector2(0.0, 2.0 * fillFraction),
    ];
}

export function createStopperProfile(): THREE.Vector2[] {
    return [
        new THREE.Vector2(0.0, 0.0),
        new THREE.Vector2(0.24, 0.0),
        new THREE.Vector2(0.24, 0.25),
        new THREE.Vector2(0.30, 0.3),
        new THREE.Vector2(0.42, 0.45),
        new THREE.Vector2(0.48, 0.65),
        new THREE.Vector2(0.44, 0.85),
        new THREE.Vector2(0.32, 1.0),
        new THREE.Vector2(0.18, 1.1),
        new THREE.Vector2(0.08, 1.15),
        new THREE.Vector2(0.0, 1.18),
    ];
}
