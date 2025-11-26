export default {
    printWidth: 120,
    tabWidth: 4,
    semi: true,
    bracketSpacing: true,
    arrowParens: "always",
    bracketSameLine: true,
    importOrder: ["^react/(.*)$", "^@?gsap(?:/.*)?$", "^@/(.*)$", "^[./]"],
    importOrderGroupNamespaceSpecifiers: true,
    plugins: ["@trivago/prettier-plugin-sort-imports", "prettier-plugin-tailwindcss"],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
};
