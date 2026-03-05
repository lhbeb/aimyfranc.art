import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                'ast-primary': '#e8cac6',
                'ast-accent': '#b2221b',
                'ast-dark': '#3f3e3e',
                'ast-light': '#ededed',
            },
            fontFamily: {
                futura: ['var(--font-futura)', 'sans-serif'],
            },
        },
    },
    plugins: [],
} satisfies Config;
