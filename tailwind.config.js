module.exports = {
    content: ['./src/**/*.{ts,tsx,svg}'],
    darkMode: ['class'],
    theme: {
        extend: {
            fontFamily: {
                gotu: 'Gotu',
                quattrocento: 'Quattrocento',
                poppins: 'Poppins',
            },
            fontSize: {
                '2xs': '10px',
                xs: '12px',
                sm: '14px',
                base: '16px',
                lg: '18px',
                xl: '20px',
                '2xl': '22px',
                '3xl': '30px',
                '4xl': '36px',
                '5xl': '40px',
                '6xl': '48px',
                '7xl': '56px',
                '8xl': '64px',
            },
            colors: {
                primary: '#D3A528',
                snow: '#FFFDFA',
                shade: {
                    0: '#FFFFFF',
                    100: '#3A342C',
                },
                timeline: {
                    node: '#DAD4C9',
                    year: '#B3A896',
                },
            },
        },
    },
    plugins: [],
};
