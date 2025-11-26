import { Link, useRouter } from "@tanstack/react-router";
import { ArrowLeftIcon } from "lucide-react";
import { ReactNode } from "react";

import { Links } from "@/lib/links.ts";

type PageTitleProps = {
    backButton?: boolean;
    title: string;
    endContent?: ReactNode;
};

export const PageTitle = ({ backButton, title, endContent }: PageTitleProps) => {
    const router = useRouter();

    const onBack = () => {
        router.history.back();
    };

    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
                {backButton && (
                    <button className="btn btn-xs btn-ghost btn-square" onClick={onBack}>
                        <ArrowLeftIcon className="size-4" />
                    </button>
                )}
                <p className="text-lg/none font-medium">{title}</p>
            </div>
            {endContent ? (
                endContent
            ) : (
                <div className="breadcrumbs hidden p-0 text-sm sm:inline">
                    <ul>
                        <li>
                            <Link to={Links.home}>SaaSKit</Link>
                        </li>
                        <li className="opacity-80">{title}</li>
                    </ul>
                </div>
            )}
        </div>
    );
};
