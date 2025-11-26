import { Link, useLocation } from "@tanstack/react-router";
import { LucideIcon } from "lucide-react";
import { AnchorHTMLAttributes } from "react";

import { Links } from "@/lib/links.ts";

export type ISidebarMenuItem = {
    title: string;
    id?: string;
    icon?: LucideIcon;
    isHeader?: boolean;
    url?: string;
    linkProp?: AnchorHTMLAttributes<HTMLAnchorElement>;
    comingSoon?: boolean;
};

export const SidebarMenuItem = (props: ISidebarMenuItem) => {
    const { url, icon: Icon, isHeader, linkProp, title, comingSoon } = props;
    const { pathname } = useLocation();

    const selected = url && pathname.includes(url);

    if (isHeader) {
        return <p className="text-base-content/70 mx-2.5 mt-6 mb-1.5 text-sm font-medium first:mt-0">{title}</p>;
    }

    return (
        <Link
            {...linkProp}
            to={url ?? Links.home}
            className={`hover:bg-base-200 rounded-box flex items-center gap-2 px-2.5 py-1 ${selected && "bg-base-200"}`}>
            {Icon && <Icon className="size-4" />}
            <span className="grow text-[15px]">{title}</span>
            {comingSoon && (
                <div className="text-base-content/70 rounded-box border-base-200 bg-base-200/60 border px-1.5 py-px text-xs">
                    Coming
                </div>
            )}
        </Link>
    );
};
