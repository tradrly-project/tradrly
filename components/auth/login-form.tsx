"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { GlowingBorder } from "@/components/cards/glowing-border";
import { MainButton } from "@/components/button/main-button";
import Link from "next/link";

export default function SigninForm() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
    };

    return (
        <div className="relative mx-auto w-full max-w-md p-[1px] rounded-2xl overflow-hidden">
            {/* Glowing border */}
            <GlowingBorder duration={5000} rx="1rem" ry="1rem" />

            {/* Inner form */}
            <div className="relative z-10 rounded-2xl bg-black p-4 md:p-8 shadow-input">
                <h2 className="text-5xl font-bold text-white dark:text-neutral-200">Tradrly</h2>
                <p className="mt-3 max-w-sm text-sm text-white dark:text-neutral-300">
                    Selamat Datang Kembali !
                </p>

                <form className="my-10" onSubmit={handleSubmit}>
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="firstname">Username</Label>
                        <Input id="firstname" placeholder="user_123" type="text" />
                    </LabelInputContainer>
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" placeholder="emailkamu@gmail.com" type="email" />
                    </LabelInputContainer>

                    <LabelInputContainer className="mb-12">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" placeholder="••••••••" type="password" />
                    </LabelInputContainer>

                    <MainButton type="submit" className="w-full flex flex-1 items-center justify-center">
                        <span className="text-md">Masuk</span>
                    </MainButton>

                    <div className="my-8 flex items-end w-full text-sm text-zinc-200 ">
                        Belum terdaftar ?
                        <Link href="/register" className="ml-2">
                            <span className="text-sm text-sky-400">Register</span>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => (
    <div className={cn("flex w-full md:w-72 flex-col space-y-2", className)}>{children}</div>
);
