/** @type {import('zudoku').ZudokuConfig} */
const config = {
    basePath: "/stream-docs/",
    topNavigation: [
        {id: "docs", label: "Documentation"},
        {id: "api", label: "API Reference"},
        {id: "about", label: "About"}
    ],
    sidebar: {
        docs: [
            {
                type: "category",
                label: "Documentation",
                items: [
                    "/stream-docs/docs/installation",
                    "/stream-docs/docs/authorization",
                    "/stream-docs/docs/about"
                ]
            }
        ]
    },
    redirects: [
        { from: "/", to: "/stream-docs/docs/installation" },
        { from: "/about", to: "/stream-docs/docs/about" }
    ],
    apis: {
        type: "file",
        input: "./apis/openapi.yaml",
        navigationId: "api"
    },
    docs: {
        files: "/pages/**/*.{md,mdx}",
    }
};

export default config;