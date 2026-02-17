"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useScrollProgress } from "./ScrollContext";

// ============================================================================
// GEOMETRY PROFILES
// ============================================================================

import { createBottleProfile, createLiquidProfile, createStopperProfile } from "./bottleGeometry";

// ============================================================================
// SUB-COMPONENTS
// ============================================================================

const GOLD_MATERIAL_PROPS = {
    color: "#D4AF37",
    metalness: 1.0,
    roughness: 0.05,
    envMapIntensity: 2.5,
} as const;

function GoldCrown() {
    const geometry = useMemo(() => {
        const points = [
            new THREE.Vector2(0.94, 1.95),
            new THREE.Vector2(1.04, 1.97),
            new THREE.Vector2(1.06, 2.0),
            new THREE.Vector2(1.04, 2.03),
            new THREE.Vector2(1.06, 2.06),
            new THREE.Vector2(1.04, 2.09),
            new THREE.Vector2(1.06, 2.12),
            new THREE.Vector2(1.02, 2.15),
            new THREE.Vector2(0.96, 2.15),
        ];
        const geom = new THREE.LatheGeometry(points, 64);
        geom.computeVertexNormals();
        return geom;
    }, []);

    return (
        <mesh geometry={geometry}>
            <meshStandardMaterial {...GOLD_MATERIAL_PROPS} side={THREE.DoubleSide} />
        </mesh>
    );
}

function GoldCage() {
    const ribs = useMemo(() => {
        const ribCount = 16;
        const items: { position: THREE.Vector3; rotation: THREE.Euler }[] = [];
        for (let i = 0; i < ribCount; i++) {
            const angle = (i / ribCount) * Math.PI * 2;
            items.push({
                position: new THREE.Vector3(
                    Math.sin(angle) * 0.77,
                    0.8,
                    Math.cos(angle) * 0.77
                ),
                rotation: new THREE.Euler(0, angle, 0),
            });
        }
        return items;
    }, []);

    return (
        <group>
            {ribs.map((rib, i) => (
                <mesh key={i} position={rib.position} rotation={rib.rotation}>
                    <boxGeometry args={[0.015, 1.2, 0.06]} />
                    <meshStandardMaterial {...GOLD_MATERIAL_PROPS} />
                </mesh>
            ))}
        </group>
    );
}

function GoldRing({
    y, innerRadius, outerRadius, height = 0.04,
}: {
    y: number; innerRadius: number; outerRadius: number; height?: number;
}) {
    const geometry = useMemo(() => {
        const points = [
            new THREE.Vector2(innerRadius, 0),
            new THREE.Vector2(outerRadius, 0),
            new THREE.Vector2(outerRadius, height),
            new THREE.Vector2(innerRadius, height),
        ];
        const geom = new THREE.LatheGeometry(points, 64);
        geom.computeVertexNormals();
        return geom;
    }, [innerRadius, outerRadius, height]);

    return (
        <mesh geometry={geometry} position={[0, y, 0]}>
            <meshStandardMaterial {...GOLD_MATERIAL_PROPS} />
        </mesh>
    );
}

function CentralPlaque() {
    const plaqueWidth = 0.3;
    const plaqueHeight = 0.35;

    return (
        <mesh position={[0, 1.2, 1.01]} rotation={[0, 0, 0]}>
            <planeGeometry args={[plaqueWidth, plaqueHeight, 1, 1]} />
            <meshStandardMaterial
                {...GOLD_MATERIAL_PROPS}
                side={THREE.DoubleSide}
            />
        </mesh>
    );
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export function HeroBottle() {
    const groupRef = useRef<THREE.Group>(null);
    const { mouseX, mouseY } = useScrollProgress();

    const bottleGeometry = useMemo(() => {
        const geom = new THREE.LatheGeometry(createBottleProfile(), 64);
        geom.computeVertexNormals();
        return geom;
    }, []);

    const liquidGeometry = useMemo(() => {
        const geom = new THREE.LatheGeometry(createLiquidProfile(), 64);
        geom.computeVertexNormals();
        return geom;
    }, []);

    const stopperGeometry = useMemo(() => {
        const geom = new THREE.LatheGeometry(createStopperProfile(), 64);
        geom.computeVertexNormals();
        return geom;
    }, []);

    // --- Centered float + cursor parallax only (NO scroll movement) ---
    useFrame((state) => {
        if (!groupRef.current) return;

        const t = state.clock.elapsedTime;

        // Antigravity Y-axis oscillation
        const floatOffset = Math.sin(t * 1.2) * 0.08;
        groupRef.current.position.y = -1.5 + floatOffset;

        // Cursor parallax tilt ("Float & Tilt")
        const tiltX = mouseY * 0.1;
        const tiltY = mouseX * 0.15;
        groupRef.current.rotation.x = THREE.MathUtils.lerp(
            groupRef.current.rotation.x, tiltX, 0.05
        );
        groupRef.current.rotation.y = THREE.MathUtils.lerp(
            groupRef.current.rotation.y, tiltY + t * 0.15, 0.05
        );
    });

    return (
        <group ref={groupRef} position={[0, -1.5, 0]}>
            {/* 1. GLASS BOTTLE */}
            <mesh geometry={bottleGeometry}>
                <meshPhysicalMaterial
                    color="#f5e6c8"
                    transmission={1.0}
                    thickness={2.0}
                    roughness={0.05}
                    ior={1.5}
                    clearcoat={1.0}
                    clearcoatRoughness={0.02}
                    envMapIntensity={1.5}
                    attenuationColor={new THREE.Color("#e8c870")}
                    attenuationDistance={1.5}
                    transparent
                    side={THREE.DoubleSide}
                />
            </mesh>

            {/* 2. LIQUID (85% fill) */}
            <mesh geometry={liquidGeometry}>
                <meshPhysicalMaterial
                    color="#c8941e"
                    transmission={0.6}
                    thickness={1.0}
                    roughness={0.1}
                    ior={1.33}
                    metalness={0.1}
                    envMapIntensity={1.0}
                    attenuationColor={new THREE.Color("#D4AF37")}
                    attenuationDistance={0.8}
                    transparent
                    side={THREE.DoubleSide}
                />
            </mesh>

            {/* 3. GOLD CROWN */}
            <GoldCrown />

            {/* 4. GOLD CAGE */}
            <GoldCage />

            {/* 5. GOLD RINGS */}
            <GoldRing y={0.0} innerRadius={0.53} outerRadius={0.60} />
            <GoldRing y={0.45} innerRadius={0.68} outerRadius={0.74} />
            <GoldRing y={1.0} innerRadius={0.80} outerRadius={0.86} />
            <GoldRing y={1.5} innerRadius={0.90} outerRadius={0.96} />
            <GoldRing y={2.63} innerRadius={0.36} outerRadius={0.42} />
            <GoldRing y={3.22} innerRadius={0.30} outerRadius={0.37} />

            {/* 6. CENTRAL PLAQUE */}
            <CentralPlaque />

            {/* 7. GLASS STOPPER */}
            <mesh geometry={stopperGeometry} position={[0, 3.1, 0]}>
                <meshPhysicalMaterial
                    color="#f5e6c8"
                    transmission={0.92}
                    thickness={1.5}
                    roughness={0.05}
                    ior={1.5}
                    clearcoat={1.0}
                    clearcoatRoughness={0.02}
                    envMapIntensity={1.5}
                    transparent
                    side={THREE.DoubleSide}
                />
            </mesh>

            {/* Gold finial */}
            <mesh position={[0, 4.32, 0]}>
                <sphereGeometry args={[0.07, 32, 32]} />
                <meshStandardMaterial {...GOLD_MATERIAL_PROPS} />
            </mesh>
        </group>
    );
}
