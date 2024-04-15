const colors = require('tailwindcss/colors')

module.exports = {
    content: ['./src/**/*.js'],
    darkMode: 'media',
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '1rem',
                md: '1rem',
                lg: '1rem',
                xl: '3rem',
                '2xl': '13rem',
            },
        },
        fontFamily: {
            body: ['Be Vietnam Pro', 'sans-serif'],
        },

        extend: {
            colors: {
                primary: colors.blue[600],
            },
        },
    },
    variants: {
        extend: {
            opacity: ['disabled'],
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
    ],
}
