"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

export function BackgroundLanding() {
    return (
        <div className="h-[40rem] w-full  bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
            <div className="max-w-2xl mx-auto p-4">
                <h1 className="relative z-10 text-lg md:text-9xl bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 text-center font-extrabold mb-5"
                    style={{ lineHeight: '1.3' }} // atau nilai sesuai keinginan
                >tradrly
                </h1>
                <p
                    className="max-w-lg mx-auto my-2 text-xl text-center relative z-10 font-bold"
                    style={{
                        background: "linear-gradient(90deg, #0F6BCC 0%, #29BFDF 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    Maksimalkan Trading Anda<br />Bersama kami !
                </p>

            </div>
            <BackgroundBeams />
        </div>
    );
}
