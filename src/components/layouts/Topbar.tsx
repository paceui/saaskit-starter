import { Link } from "@tanstack/react-router";
import { LogOutIcon, MenuIcon, SearchIcon, UserIcon } from "lucide-react";

import { ThemeToggle } from "@/components/ThemeToggle.tsx";
import { IUser } from "@/features/auth/types.ts";
import { Links } from "@/lib/links.ts";

export const Topbar = ({ user }: { user?: IUser }) => {
    return (
        <div className="flex h-full w-full items-center justify-between">
            <button className="btn btn-ghost btn-square btn-sm">
                <MenuIcon className="size-4.5" />
            </button>
            <label className="input input-sm w-44">
                <SearchIcon className="text-base-content/70 size-4" />
                <input className="" placeholder="Search..." />
            </label>
            <div className="flex items-center gap-1">
                <ThemeToggle />
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} className="btn btn-sm btn-circle">
                        {user?.image ? <img src={user.image} alt="Avatar" /> : "U"}
                    </div>
                    <div tabIndex={0} className="dropdown-content bg-base-100 rounded-box z-1 w-40 shadow-sm">
                        <div className="flex items-center gap-2 px-3 py-2">
                            <div className="bg-base-200 flex size-8 items-center justify-center rounded-full">A</div>
                            <div>
                                <p className="text-sm/none font-medium">{user?.name ?? "Denish"}</p>
                                <p className="text-base-content/60 mt-0.5 text-xs/none">User</p>
                            </div>
                        </div>
                        <ul className="menu border-base-300 w-full border-t p-1">
                            <li>
                                <a>
                                    <UserIcon className="size-4" />
                                    <p>My Profile</p>
                                </a>
                            </li>
                            <li>
                                <Link to={Links.signOut}>
                                    <LogOutIcon className="size-4" />
                                    <p>Logout</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
