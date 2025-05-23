// components/MovingGlow.tsx
"use client";
import React, { useRef } from "react";
import {
    motion,
    useAnimationFrame,
    useMotionTemplate,
    useMotionValue,
    useTransform,
} from "motion/react";

export function GlowingBorder({
    duration = 3000,
    rx = "30%",
    ry = "30%",
    className,
}: {
    duration?: number;
    rx?: string;
    ry?: string;
    className?: string;
}) {
    const pathRef = useRef<SVGRectElement>(null);
    const progress = useMotionValue<number>(0);

    useAnimationFrame((time) => {
        const length = pathRef.current?.getTotalLength();
        if (length) {
            const pxPerMs = length / duration;
            progress.set((time * pxPerMs) % length);
        }
    });

    const x = useTransform(progress, (val) => pathRef.current?.getPointAtLength(val).x);
    const y = useTransform(progress, (val) => pathRef.current?.getPointAtLength(val).y);

    const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

    return (
        <>
            <svg
                className="absolute h-full w-full"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
            >
                <rect ref={pathRef} fill="none" width="100%" height="100%" rx={rx} ry={ry} />
            </svg>

            <motion.div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    transform,
                }}
            >
                <div
                    className={className || "h-20 w-20 bg-[radial-gradient(#0ea5e9_40%,transparent_60%)] opacity-[0.6]"}
                />
            </motion.div>
        </>
    );
}
