import { Link } from "@tanstack/react-router";
import { ClassNameValue } from "tailwind-merge";

import { Logo } from "@/components/Logo.tsx";
import { ThemeToggle } from "@/components/ThemeToggle.tsx";
import { Links } from "@/lib/links.ts";
import { cn } from "@/lib/utils.ts";

type TopbarProps = {
    className?: ClassNameValue;
};

export const Topbar = ({ className }: TopbarProps) => {
    return (
        <div className={cn("flex h-full items-center justify-between", className)}>
            <Logo />

            <div className="flex items-center gap-2">
                <ThemeToggle />
                <Link className="btn btn-sm btn-outline border-base-300" to={Links.signIn}>
                    Sign In
                </Link>
            </div>
        </div>
    );
};
