/** @type {import('zudoku').ZudokuConfig} */
const config = {
    basePath: "/stream-docs/",
    topNavigation: [
        {id: "docs", label: "Documentation"},
        {id: "api", label: "API Reference"},
        {id: "news-aggregator-srs", label: "News Aggregator SRS"},
        {id: "about", label: "About"}
    ],
    sidebar: {
        docs: [
            {
                type: "category",
                label: "Documentation",
                items: [
                    "/docs/installation",
                    "/docs/authorization",
                    "/docs/news-aggregator-srs",
                    "/docs/about"
                ]
            }
        ]
    },
    redirects: [
        { from: "/", to: "/docs/installation" },
        { from: "/news-aggregator-srs", to: "/docs/news-aggregator-srs" },
        { from: "/about", to: "/docs/about" }
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