const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} \*/

module.exports = {
    content: ['./src/**/*.{ts,tsx}'],
    darkMode: ['class'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-apercu)', ...fontFamily.sans],
            },
        },
    },
    plugins: [],
};
