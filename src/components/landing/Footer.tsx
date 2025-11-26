import { Links } from "@/lib/links.ts";

export const Footer = () => {
    return (
        <div className="flex items-center justify-between">
            <p>
                SaaSKit - by{" "}
                <a href={Links.external.paceui} className="hover:underline" target="_blank">
                    PaceUI
                </a>
            </p>
        </div>
    );
};
