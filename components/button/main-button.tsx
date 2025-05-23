"use client";
import React from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

type MainButtonProps = {
    children: React.ReactNode;
    className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function MainButton({ children, className, ...props }: MainButtonProps) {
    return (
        <HoverBorderGradient
            containerClassName="rounded-full w-full"
            as="button"
            className={`flex items-center justify-center space-x-2 cursor-pointer ${className ?? ""}`}
            {...props}
        >
            {children}
        </HoverBorderGradient>
    );
}
