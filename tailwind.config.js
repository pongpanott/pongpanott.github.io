/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                jost: 'Jost, sans-serif',
                nunito: 'Nunito, sans-serif',
            },
            colors: {
                'light-bg': '#f0e7db',
                primary: {
                    50: '#D6EAEA',
                    100: '#C1E0DF',
                    200: '#ADD5D5',
                    300: '#83C1BF',
                    400: '#5AACAA',
                    500: '#319795',
                    600: '#277977',
                    700: '#1D5B59',
                    800: '#194C4B',
                    900: '#143C3C',
                },
            },
        },
    },
    plugins: [],
};
