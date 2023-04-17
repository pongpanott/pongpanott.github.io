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
                '2xs': ['10px', '17px'],
                xs: ['12px', '20px'],
                sm: ['14px', '23px'],
                base: ['16px', '27px'],
                lg: ['18px', '30px'],
                xl: ['20px', '33px'],
                '2xl': ['22px', '37px'],
                '3xl': '1.953rem',
                '4xl': '2.441rem',
                '5xl': '3.052rem',
            },
            colors: {
                primary: '#D3A528',
                snow: '#FFFDFA',
                shade: {
                    0: 'white',
                    100: '#333333',
                },
            },
        },
    },
    plugins: [],
};
