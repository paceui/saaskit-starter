import { Link } from "@tanstack/react-router";
import { ArrowDownToLineIcon, ChevronRightIcon, MonitorIcon } from "lucide-react";

import { Links } from "@/lib/links.ts";

export const Hero = () => {
    return (
        <div className="container-inner py-6 md:py-8 lg:py-12 xl:py-16 2xl:py-24">
            <div className="relative flex justify-center">
                <div className="flex max-w-5xl flex-col items-center text-center">
                    <a
                        className="border-base-300 flex items-center gap-2 rounded-full border px-3 py-0.5 text-sm font-medium"
                        href="#pricing">
                        <div className="bg-base-content/20 size-1.5 rounded-full"></div>
                        <p>Rebrand + OSS Starter</p>
                    </a>
                    <h1 className="mt-4 text-3xl leading-[1.25] font-bold tracking-tight text-balance sm:text-4xl md:text-5xl 2xl:text-7xl">
                        Launch your next SaaS idea faster with our modular kit
                    </h1>
                    <h2 className="text-base-content/70 mt-4 text-sm text-balance sm:mt-6 sm:text-lg md:text-xl lg:mt-8">
                        A production-ready TanStack starter with type-safe modules for core SaaS features. Skip the
                        complex setup and launch your next great idea in just days.
                    </h2>
                    <div className="mt-6 flex flex-wrap justify-center gap-4 max-sm:items-center sm:mt-8 xl:mt-12 xl:gap-6 2xl:mt-16">
                        <Link to={Links.home} className="btn btn-primary btn-lg shadow-primary/10 gap-3 shadow-xl">
                            <MonitorIcon className="size-5" />
                            Preview
                            <ChevronRightIcon className="size-4" />
                        </Link>
                        <a href="#pricing" className="btn btn-lg btn-ghost gap-3">
                            <ArrowDownToLineIcon className="size-5" />
                            Download
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
