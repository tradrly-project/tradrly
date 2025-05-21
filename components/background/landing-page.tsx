"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

export function BackgroundLanding() {
    return (
        <div className="h-[40rem] w-full  bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
            <div className="max-w-2xl mx-auto p-4">
                <h1 className="relative z-10 text-lg md:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-extrabold"
                    style={{ lineHeight: '1.3' }} // atau nilai sesuai keinginan
                >tradrly
                </h1>
                <p className="text-neutral-500 max-w-lg mx-auto my-2 text-lg text-center relative z-10">
                    Maksimalkan Trading Anda<br></br>Bersama kami !
                </p>
            </div>
            <BackgroundBeams />
        </div>
    );
}
