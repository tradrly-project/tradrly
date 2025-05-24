"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { IconBrandGoogle } from "@tabler/icons-react";
import { GlowingBorder } from "@/components/cards/glowing-border";
import { MainButton } from "@/components/button/main-button";
import Link from "next/link";
import { signUpCredentials } from "@/lib/actions"; // path sesuai project-mu
import { useActionState } from "react";

export default function RegisterForm() {
  const [state, formAction] = useActionState(signUpCredentials, null);

  return (
    <div className="relative mx-auto w-full max-w-md p-[1px] rounded-2xl overflow-hidden">
      <GlowingBorder duration={5000} rx="1rem" ry="1rem" />
      <div className="relative z-10 rounded-2xl bg-black p-4 md:p-8 shadow-input">
        <h2 className="text-5xl font-bold text-white dark:text-neutral-200">
          Tradrly
        </h2>
        <p className="mt-5 max-w-sm text-sm text-white dark:text-neutral-300">
          Buat akun Anda untuk memulai pengalaman Anda dengan Tradrly!
        </p>

        {/* ✅ Ini bagian penting */}
        <form className="my-8" action={formAction}>
          {state?.message ? (
            <div
              className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-100"
              role="alert"
            >
              <span className="font-medium">{state?.message}</span>
            </div>
          ) : null}

          <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
            <LabelInputContainer>
              <Label htmlFor="name">Nama</Label>
              <Input
                id="name"
                name="name"
                placeholder="Nama Kamu"
                type="text"
              />
              <div className="-mt-3 ml-2 ">
                <span className="text-xs text-red-700">
                  {state?.errors?.name}
                </span>
              </div>
            </LabelInputContainer>

            <LabelInputContainer>
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                name="username"
                placeholder="user_123"
                type="text"
              />
              <div className="-mt-3 ml-2 ">
                <span className="text-xs text-red-700">
                  {state?.errors?.username}
                </span>
              </div>
            </LabelInputContainer>
          </div>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              placeholder="emailkamu@gmail.com"
              type="email"
            />
            <div className="-mt-3 ml-2 ">
              <span className="text-xs text-red-700">
                {state?.errors?.email}
              </span>
            </div>
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              placeholder="••••••••"
              type="password"
            />
            <div className="-mt-3 ml-2 ">
              <span className="text-xs text-red-700">
                {state?.errors?.password}
              </span>
            </div>
          </LabelInputContainer>

          <LabelInputContainer className="mb-8">
            <Label htmlFor="ConfirmPassword">Konfirmasi Password</Label>
            <Input
              id="ConfirmPassword"
              name="ConfirmPassword"
              placeholder="••••••••"
              type="password"
            />
            <div className="-mt-3 ml-2 ">
              <span className="text-xs text-red-700">
                {state?.errors?.ConfirmPassword}
              </span>
            </div>
          </LabelInputContainer>

          <MainButton
            type="submit"
            className="w-full flex flex-1 items-center justify-center"
          >
            <span className="text-md">Daftar</span>
          </MainButton>

          <div className="my-4 flex items-end w-full text-sm text-zinc-200 ">
            Sudah punya akun ?
            <Link href="/login" className="ml-2">
              <span className="text-sm text-sky-400"> Masuk</span>
            </Link>
          </div>

          <div className="my-8 flex items-center w-full">
            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-zinc-400 to-transparent dark:via-neutral-700" />
            <span className="mx-4 text-sm text-neutral-600 dark:text-neutral-400">
              Atau
            </span>
            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-zinc-400 to-transparent dark:via-neutral-700" />
          </div>

          <div className="flex flex-col space-y-4">
            <button
              className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626] cursor-pointer"
              type="button"
            >
              <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-sm text-neutral-700 dark:text-neutral-300">
                Daftar Lewat Google
              </span>
              <BottomGradient />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

const BottomGradient = () => (
  <span className="absolute inset-x-0 -bottom-px block h-px w-auto bg-gradient-to-r from-transparent via-sky-900 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
);

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("flex w-full flex-col space-y-2", className)}>
    {children}
  </div>
);
