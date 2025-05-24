"use client";
import React, { useState } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Link from "next/link";


export function BackgroundLanding() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="h-[40rem] w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
            <div className="max-w-2xl mx-auto p-4 flex flex-col items-center">
                <h1
                    className="relative z-10 text-lg md:text-9xl bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 text-center font-extrabold mb-5"
                    style={{ lineHeight: "1.3" }}
                >
                    tradrly
                </h1>
                <p
                    className="max-w-lg mx-auto my-2 text-xl text-center relative z-10 font-bold"
                    style={{
                        background: "linear-gradient(90deg, #0F6BCC 0%, #29BFDF 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    Maksimalkan Trading Anda<br />
                    Bersama kami !
                </p>

                {/* CTA Button */}
                <Link href="/register" className="mt-8 relative z-10">
                    <button
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        className="cursor-pointer px-6 py-3 rounded-full text-white text-md font-medium bg-black/20 border border-white/20 transition duration-300 ease-in-out hover:shadow-[0_0_0.5rem_#29BFDF] hover:border-[#29acdf]"
                    >
                        <span
                            style={{
                                animation: isHovered ? "none" : "breath 2.4s ease-in-out infinite",
                                display: "inline-block",
                            }}
                        >
                            Coba Gratis !
                        </span>
                        <style>
                            {`@keyframes breath {0%, 100% { transform: scale(1); opacity: 0; } 50% {transform: scale(1.05); opacity: 0.85; }}`}
                        </style>
                    </button>
                </Link>
            </div>
            <BackgroundBeams />
        </div>
    );
}
