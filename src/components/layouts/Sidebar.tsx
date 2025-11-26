import { Link } from "@tanstack/react-router";
import { BadgeDollarSignIcon, Contact2Icon, DownloadIcon, FileIcon, MailIcon, UsersIcon } from "lucide-react";

import { Logo } from "@/components/Logo";
import { Links } from "@/lib/links";

import { ISidebarMenuItem, SidebarMenuItem } from "./SidebarItem";

const menuItems: ISidebarMenuItem[] = [
    {
        title: "Navigation",
        isHeader: true,
    },
    {
        title: "Page",
        url: "/page",
        icon: FileIcon,
    },
    {
        title: "Auth",
        isHeader: true,
    },
    {
        title: "Users",
        url: "/users",
        icon: UsersIcon,
    },
    {
        title: "Roles",
        url: "/roles",
        icon: Contact2Icon,
    },

    {
        title: "Payment",
        isHeader: true,
    },
    {
        title: "Stripe",
        icon: BadgeDollarSignIcon,
        comingSoon: true,
    },
    {
        title: "Mail",
        isHeader: true,
    },
    {
        title: "Resend",
        icon: MailIcon,
        comingSoon: true,
    },
];

export const Sidebar = () => {
    return (
        <div className="border-base-300 bg-sid bg-sidebar-background flex h-screen w-60 min-w-60 flex-col border-e">
            <div className="flex h-15 min-h-15 items-center gap-3 px-5">
                <Logo />
                <hr className="border-base-300 h-5 w-px border-e" />
                <p className="text-base-content/60 font-medium">Demo</p>
            </div>
            <div className="relative min-h-0 grow overflow-auto">
                <div className="my-2.5 space-y-0.5 px-2.5">
                    {menuItems.map((item, index) => (
                        <SidebarMenuItem {...item} key={index} />
                    ))}
                </div>
            </div>
            <div className="border-base-300 bg-base-100 relative m-3 rounded-md border p-3">
                <p className="text-center font-medium">Download & Community</p>
                <p className="text-base-content/80 mt-2 text-sm">
                    Free Supabase auth boilerplate with ongoing updates. Join our Discord for support and feedback.
                </p>
                <div className="mt-3 flex items-center justify-center gap-2">
                    <Link className="btn btn-primary btn-sm btn-square" hash="pricing" to="/">
                        <DownloadIcon className="size-4.5" />
                    </Link>
                    <a
                        className="btn btn-outline btn-sm border-base-300"
                        href={Links.external.discord}
                        rel="noopener noreferrer"
                        target="_blank">
                        Join Discord
                    </a>
                </div>
            </div>
        </div>
    );
};
