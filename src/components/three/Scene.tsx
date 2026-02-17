"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls, ContactShadows, useProgress } from "@react-three/drei";
import { HeroBottle } from "./HeroBottle";
import { Suspense, useEffect, useRef, useMemo } from "react";
import { useScrollProgress } from "./ScrollContext";
import * as THREE from "three";

/**
 * Monitors Three.js asset loading and signals 3D readiness.
 */
function LoadMonitor() {
    const { progress } = useProgress();
    const { set3DReady } = useScrollProgress();

    useEffect(() => {
        if (progress >= 100) {
            set3DReady();
        }
    }, [progress, set3DReady]);

    return null;
}

/**
 * Golden God-Rays — volumetric light shafts behind the bottle.
 * Simulated with transparent planes that pulse in opacity.
 */
function GodRays() {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (!groupRef.current) return;
        const t = state.clock.elapsedTime;
        groupRef.current.rotation.z = Math.sin(t * 0.2) * 0.05;
        // Slow pulsing opacity
        groupRef.current.children.forEach((child, i) => {
            if (child instanceof THREE.Mesh) {
                const mat = child.material as THREE.MeshBasicMaterial;
                mat.opacity = 0.04 + Math.sin(t * 0.5 + i * 1.2) * 0.02;
            }
        });
    });

    const rays = useMemo(() => {
        const items: { rotation: number; width: number; height: number }[] = [];
        const rayCount = 6;
        for (let i = 0; i < rayCount; i++) {
            const angle = ((i / rayCount) * Math.PI) - Math.PI / 2;
            items.push({
                rotation: angle,
                width: 0.3 + Math.random() * 0.4,
                height: 12 + Math.random() * 6,
            });
        }
        return items;
    }, []);

    return (
        <group ref={groupRef} position={[0, 2, -2]}>
            {rays.map((ray, i) => (
                <mesh key={i} rotation={[0, 0, ray.rotation]}>
                    <planeGeometry args={[ray.width, ray.height]} />
                    <meshBasicMaterial
                        color="#D4AF37"
                        transparent
                        opacity={0.04}
                        side={THREE.DoubleSide}
                        blending={THREE.AdditiveBlending}
                        depthWrite={false}
                    />
                </mesh>
            ))}
        </group>
    );
}

/**
 * Scent Mist — volumetric fog at the base of the bottle.
 * A translucent disc that gently oscillates in scale and opacity.
 */
function ScentMist() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!meshRef.current) return;
        const t = state.clock.elapsedTime;
        const scale = 2.5 + Math.sin(t * 0.6) * 0.3;
        meshRef.current.scale.set(scale, scale, 1);
        (meshRef.current.material as THREE.MeshBasicMaterial).opacity =
            0.06 + Math.sin(t * 0.4) * 0.02;
    });

    return (
        <mesh
            ref={meshRef}
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -1.6, 0]}
        >
            <circleGeometry args={[2, 64]} />
            <meshBasicMaterial
                color="#D4AF37"
                transparent
                opacity={0.06}
                blending={THREE.AdditiveBlending}
                depthWrite={false}
            />
        </mesh>
    );
}

/**
 * Marble pedestal with gold accent ring.
 */
function MarblePedestal() {
    return (
        <group position={[0, -1.85, 0]}>
            <mesh>
                <cylinderGeometry args={[1.8, 2.0, 0.3, 64]} />
                <meshStandardMaterial
                    color="#1a1a18"
                    metalness={0.3}
                    roughness={0.2}
                    envMapIntensity={1.5}
                />
            </mesh>
            <mesh position={[0, 0.16, 0]}>
                <cylinderGeometry args={[1.82, 1.82, 0.02, 64]} />
                <meshStandardMaterial
                    color="#D4AF37"
                    metalness={1.0}
                    roughness={0.1}
                    envMapIntensity={2.0}
                />
            </mesh>
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.151, 0]}>
                <circleGeometry args={[1.8, 64]} />
                <meshPhysicalMaterial
                    color="#0f0f0e"
                    metalness={0.5}
                    roughness={0.05}
                    clearcoat={1.0}
                    clearcoatRoughness={0.05}
                    envMapIntensity={2.0}
                />
            </mesh>
        </group>
    );
}

interface SceneProps {
    visible: boolean;
}

export function Scene({ visible }: SceneProps) {
    return (
        <div
            className="absolute inset-0 z-10 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: visible ? 1 : 0 }}
        >
            <Canvas
                camera={{
                    position: [0, 1.5, 9],
                    fov: 35,
                }}
                gl={{
                    preserveDrawingBuffer: true,
                    alpha: true,
                    antialias: true,
                    toneMappingExposure: 1.2,
                }}
                dpr={[1, 1.5]}
                performance={{ min: 0.5 }}
            >
                <Suspense fallback={null}>
                    <LoadMonitor />

                    {/* Studio HDR for metallic glints */}
                    <Environment preset="studio" environmentIntensity={1.5} />

                    {/* God-Rays behind bottle */}
                    <GodRays />

                    {/* Scent Mist at bottle base */}
                    <ScentMist />

                    {/* Key Light — warm, upper-right */}
                    <spotLight
                        position={[5, 8, 5]}
                        angle={0.25}
                        penumbra={1}
                        intensity={2.5}
                        castShadow
                        color="#fff5e0"
                    />

                    {/* Fill Light — cooler, from left */}
                    <spotLight
                        position={[-6, 3, 4]}
                        angle={0.4}
                        penumbra={1}
                        intensity={1}
                        color="#e0e8ff"
                    />

                    {/* Rim Light — gold accent */}
                    <spotLight
                        position={[0, 6, -8]}
                        angle={0.3}
                        penumbra={1}
                        intensity={4}
                        color="#D4AF37"
                    />

                    {/* Ambient fill */}
                    <ambientLight intensity={0.1} />

                    {/* The Bottle */}
                    <HeroBottle />

                    {/* Marble Pedestal */}
                    <MarblePedestal />

                    {/* Contact shadow */}
                    <ContactShadows
                        position={[0, -1.7, 0]}
                        opacity={0.35}
                        scale={6}
                        blur={2.5}
                        far={4}
                        color="#D4AF37"
                    />

                    {/* Orbit controls — constrained */}
                    <OrbitControls
                        enableZoom={false}
                        enablePan={false}
                        minPolarAngle={Math.PI / 3.5}
                        maxPolarAngle={Math.PI / 1.7}
                        autoRotate={false}
                    />
                </Suspense>
            </Canvas>
        </div>
    );
}
