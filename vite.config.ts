import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { nitro } from "nitro/vite";

import viteTsConfigPaths from "vite-tsconfig-paths";

const config = defineConfig({
    plugins: [
        viteTsConfigPaths({
            projects: ["./tsconfig.json"],
        }),
        nitro(),
        tailwindcss(),
        tanstackStart(),
        viteReact(),
    ],
});

export default config;
