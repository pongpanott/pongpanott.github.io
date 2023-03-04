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
            colors: {
                dark: '#C9D1D9',
                light: '#24292F',
                'bg-dark': '#01040A',
            },
        },
    },
    plugins: [],
};
