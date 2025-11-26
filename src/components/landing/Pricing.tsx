import { ArrowDownToLineIcon, CheckIcon, ConstructionIcon } from "lucide-react";

export const Pricing = () => {
    return (
        <div className="container-inner py-6 md:py-8 lg:py-12 xl:py-16 2xl:py-24" id="pricing">
            <div className="flex flex-col items-center justify-center">
                <p className="from-base-content to-base-content/75 bg-linear-to-r bg-clip-text pb-2 text-2xl font-bold tracking-tight text-transparent sm:text-3xl lg:text-4xl 2xl:text-5xl">
                    Pricing (Demo)
                </p>
                <p className="text-base-content/80 max-w-lg text-center max-sm:text-sm">
                    Ideal for solo developers, indie hackers, and founders launching their next big idea.
                </p>
                <div className="card bg-base-100 card-border border-base-300 mt-8 w-xs p-5 shadow-xs sm:w-sm md:mt-12 xl:mt-16">
                    <div className="flex items-center justify-between gap-2">
                        <p className="text-xl font-medium">Starter</p>
                        <p className="text-2xl/none font-medium">
                            <span className="text-base-content/80 text-base">$</span>0
                        </p>
                    </div>
                    <p className="text-base-content/80 mt-2 text-sm">
                        The perfect entry point to explore core features, structure, and begin rapid prototyping
                    </p>
                    <p className="mt-4 font-medium">Features:</p>
                    <ul className="list mt-2 list-inside list-disc space-y-1.5">
                        <li className="flex items-center gap-2">
                            <CheckIcon className="size-4.5" />
                            <p>Secure Supabase Authentication</p>
                        </li>
                        <li className="flex items-center gap-2">
                            <CheckIcon className="size-4.5" />
                            <p>Built-in User Roles</p>
                        </li>
                        <li className="flex items-center gap-2">
                            <CheckIcon className="size-4.5" />
                            <p>Auth Protected Routes</p>
                        </li>
                        <li className="flex items-center gap-2">
                            <CheckIcon className="size-4.5" />
                            <p>Next.js App Router</p>
                        </li>
                        <li className="text-base-content/70 flex items-center gap-2">
                            <ConstructionIcon className="size-4.5" />
                            <p>SMS & Confirm email (WIP)</p>
                        </li>
                        <li className="text-base-content/70 flex items-center gap-2">
                            <ConstructionIcon className="size-4.5" />
                            <p>Advanced Auth Routing (WIP)</p>
                        </li>
                    </ul>
                    <button className="btn btn-block btn-outline border-base-300 mt-5 gap-2">
                        <ArrowDownToLineIcon className="size-4.5" />
                        Download Free
                    </button>
                </div>
            </div>
        </div>
    );
};
